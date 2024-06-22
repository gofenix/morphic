import { createStreamableUI, createStreamableValue } from 'ai/rsc'
import { CoreMessage, streamText } from 'ai'
import { createOpenAI } from '@ai-sdk/openai'
import { AnswerSection } from '@/components/answer-section'
import writerPrompt from '@/prompts/writer'
import { AnswerSectionGenerated } from '@/components/answer-section-generated'

export async function writer(
  uiStream: ReturnType<typeof createStreamableUI>,
  messages: CoreMessage[]
) {
  let fullResponse = ''
  let hasError = false
  const streamableAnswer = createStreamableValue<string>('')
  const answerSection = <AnswerSection result={streamableAnswer.value} />
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
      fullResponse = event.text
      streamableAnswer.done(event.text)
    }
  })
    .then(async result => {
      for await (const text of result.textStream) {
        if (text) {
          fullResponse += text
          streamableAnswer.update(fullResponse)
        }
      }
    })
    .catch(err => {
      hasError = true
      fullResponse = 'Error: ' + err.message
      streamableAnswer.update(fullResponse)
    })

  return { response: fullResponse, hasError }
}
