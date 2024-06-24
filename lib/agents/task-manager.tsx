import { CoreMessage, generateObject } from 'ai'
import { nextActionSchema } from '../schema/next-action'
import { getModel } from '../utils'
import taskManagerPrompt from '@/prompts/task-manager'

// Decide whether inquiry is required for the user input
export async function taskManager(messages: CoreMessage[]) {
  try {
    const result = await generateObject({
      model: getModel(),
      system: taskManagerPrompt,
      messages,
      schema: nextActionSchema
    })

    return result
  } catch (error) {
    console.error(error)
    return null
  }
}
