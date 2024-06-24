import React from 'react'
import Link from 'next/link'
import {
  SiDiscord,
  SiGithub,
  SiTwitter,
  SiWechat,
  SiXiaohongshu
} from 'react-icons/si'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import {
  Popover,
  PopoverContent,
  PopoverTrigger
} from '@/components/ui/popover'

const Footer: React.FC = () => {
  return (
    <footer className="w-fit p-1 md:p-2 fixed bottom-0 right-0 hidden md:block">
      <div className="flex justify-end items-center">
        <div className="text-muted-foreground/50 w-full">
          <span className="text-xs">
            沪ICP备2024055394号-1 © 2024 上海余弦魔塔科技有限公司
          </span>
        </div>

        <Button
          variant={'ghost'}
          size={'icon'}
          className="text-muted-foreground/50 text-red-500"
        >
          <Link
            href="https://www.xiaohongshu.com/user/profile/66375ae9000000000b031c9b?xhsshare=CopyLink&appuid=604a31040000000001004520&apptime=1717772927&wechatWid=c6867a08d6fe23aa6dee925c4cdf57b4&wechatOrigin=menu"
            target="_blank"
          >
            <SiXiaohongshu size={20} />
          </Link>
        </Button>

        <Popover>
          <PopoverTrigger asChild>
            <Button
              variant={'ghost'}
              size={'icon'}
              className="text-muted-foreground/50 text-green-500"
            >
              <SiWechat size={18} />
            </Button>
          </PopoverTrigger>
          <PopoverContent>
            <Image
              src={
                'https://lkgesolebdfrrtuuivbm.supabase.co/storage/v1/object/public/public_assets/help.jpeg'
              }
              width={'0'}
              height={'0'}
              alt="MagickPen logo"
              sizes="100vw"
              className="w-full h-auto"
            ></Image>
          </PopoverContent>
        </Popover>
      </div>
    </footer>
  )
}

export default Footer
