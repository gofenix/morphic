'use client'

import Script from 'next/script'

interface CozeProps {
  botId: string
  title?: string
  icon?: string
  lang?: 'zh-CN' | 'en'
  height?: string
  bottom?: string
  right?: string
}

export default function CozeBot({
  botId,
  title,
  icon,

  lang = 'zh-CN',
  height = '80%',
  bottom = '10px',
  right = '10px'
}: CozeProps) {
  const cozeWebSDK =
    'https://lf-cdn.coze.cn/obj/unpkg/flow-platform/chat-app-sdk/0.1.0-beta.5/libs/cn/index.js'

  const inlineStyles = `
    #coze_bot_position > div:has(> iframe) {
      height: ${height};
    }
  `

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: inlineStyles }}></style>
      <div
        id="coze_bot_position"
        style={{
          position: 'fixed',
          bottom: bottom,
          right: right
        }}
      ></div>
      <Script
        src={cozeWebSDK}
        onLoad={() => {
          if (!botId) {
            console.error('no botId')
            return
          }

          // @ts-ignore
          new CozeWebSDK.WebChatClient({
            config: {
              bot_id: botId
            },

            componentProps: {
              title: title,
              icon: icon,
              lang: lang
            },
            el: document.getElementById('coze_bot_position')
          })
        }}
      />
    </>
  )
}
