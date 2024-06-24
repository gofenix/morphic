'use client'

import { createClient } from '@/utils/supabase/client'
import { useEffect, useState } from 'react'

export default function UsedInfo() {
  const [count, setCount] = useState(0)

  const getUsed = async () => {
    const supabase = createClient()
    const {
      data: { user }
    } = await supabase.auth.getUser()
    if (user) {
      const { data } = await supabase
        .from('morphic_used')
        .select()
        .eq('user_id', user.id)
      setCount(data?.length ?? 0)
    }
  }

  useEffect(() => {
    getUsed()
  }, [])

  return (
    <div className="text-xs px-1 text-muted-foreground/50">
      已消耗{count}点数
    </div>
  )
}
