import { createStreamableUI, createStreamableValue } from 'ai/rsc'
import { CoreMessage, streamText } from 'ai'
import { createOpenAI } from '@ai-sdk/openai'
import { AnswerSection } from '@/components/answer-section'
import writerPrompt from '@/prompts/writer'
import { AnswerSectionGenerated } from '@/components/answer-section-generated'

export async function writer(
  uiStream: ReturnType<typeof createStreamableUI>,
  streamableText: ReturnType<typeof createStreamableValue<string>>,
  messages: CoreMessage[]
) {
  let fullResponse = ''
  let hasError = false
  const answerSection = <AnswerSection result={streamableText.value} />
  uiStream.append(answerSection)

  const openai = createOpenAI({
    baseURL: process.env.SPECIFIC_API_BASE,
    apiKey: process.env.SPECIFIC_API_KEY,
    organization: '' // optional organization
  })

  await streamText({
    model: openai!.chat(process.env.SPECIFIC_API_MODEL || 'llama3-70b-8192'),
    maxTokens: 2500,
    system: writerPrompt,
    onFinish: event => {
      // If the response is generated, update the generated answer section
      // There is a bug where a new instance of the answer section is displayed once when the next section is added
      uiStream.update(<AnswerSectionGenerated result={event.text} />)
    }
  })
    .then(async result => {
      for await (const text of result.textStream) {
        if (text) {
          fullResponse += text
          streamableText.update(fullResponse)
        }
      }
    })
    .catch(err => {
      hasError = true
      fullResponse = 'Error: ' + err.message
      streamableText.update(fullResponse)
    })

  return { response: fullResponse, hasError }
}
