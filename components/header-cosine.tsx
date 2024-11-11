import React from 'react'
import { ModeToggle } from './mode-toggle'
import { IconLogo } from './ui/icons'
import { cn } from '@/lib/utils'
import HistoryContainer from './history-container'
import AuthButton from './auth-button'
import { createClient } from '@/utils/supabase/server'
import UsedInfo from './used-info'
import Image from 'next/image'
import { HomeIcon } from 'lucide-react'

export const Header: React.FC = async () => {
  let count = 0

  return (
    <header className="fixed w-full p-1 md:p-2 flex justify-between items-center z-10 backdrop-blur md:backdrop-blur-none bg-background/80 md:bg-transparent">
      <div className="flex items-center">
        <a href="/">
          <HomeIcon className={cn('w-5 h-5')} />
          <span className="sr-only">Morphic</span>
        </a>
        <UsedInfo />
      </div>
      <div className="flex gap-0.5">
        <AuthButton />
        <ModeToggle />
        <HistoryContainer location="header" />
      </div>
    </header>
  )
}

export default Header
