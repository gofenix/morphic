import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'

const exampleMessages = [
  {
    heading: '离婚需要双方同意吗？',
    message: '离婚需要双方同意吗？'
  },
  {
    heading: '欠了信用卡的钱还不上要坐牢吗？',
    message: '欠了信用卡的钱还不上要坐牢吗？'
  },
  {
    heading: '民间借贷受国家保护的合法利息是多少？',
    message: '民间借贷受国家保护的合法利息是多少？'
  },
  {
    heading: '劳动仲裁',
    message: '劳动仲裁'
  }
]
export function EmptyScreen({
  submitMessage,
  className
}: {
  submitMessage: (message: string) => void
  className?: string
}) {
  return (
    <div className={`animate-in  mx-auto w-full transition-all ${className}`}>
      <div className="bg-background p-2">
        <div className="mt-4 flex flex-col items-start space-y-2 mb-4">
          {exampleMessages.map((message, index) => (
            <Button
              key={index}
              variant="link"
              className="h-auto p-0 text-base"
              name={message.message}
              onClick={async () => {
                submitMessage(message.message)
              }}
            >
              <ArrowRight size={16} className="mr-2 text-muted-foreground" />
              {message.heading}
            </Button>
          ))}
        </div>
      </div>
    </div>
  )
}
