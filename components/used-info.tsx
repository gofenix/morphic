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
    <div className=" px-1 font-bold text-white">
      <a
        href="https://afdian.net/order/create?plan_id=42d8aee03a6b11ef9c0352540025c377&product_type=0&remark="
        className="bg-gradient-to-r hover:from-green-400 hover:to-blue-500 from-pink-500 to-yellow-500"
      >
        已消耗{count}积分，点此获取更多~
      </a>
    </div>
  )
}
