import { createClient } from '@/utils/supabase/server'
import Link from 'next/link'
import { redirect } from 'next/navigation'
import { Button } from './ui/button'

export default async function AuthButton() {
  const supabase = createClient()
  const {
    data: { user }
  } = await supabase.auth.getUser()

  const signOut = async () => {
    'use server'
    const supabase = createClient()

    await supabase.auth.signOut()
    return redirect('/login')
  }

  return user ? (
    <div className="text-sm flex items-center gap-2 w-full">
      <span className="text-muted-foreground ">
        {user.email ? user.email : '游客'}
      </span>
      <form action={signOut}>
        <Button
          variant="ghost"
          size="icon"
          className="text-muted-foreground/50 hidden md:block"
        >
          登出
        </Button>
      </form>
    </div>
  ) : (
    <Button variant="ghost" size="icon" className="w-full">
      <Link
        href="/login"
        className="py-4 px-2 text-sm flex rounded-md no-underline bg-btn-background hover:bg-btn-background-hover"
      >
        注册/登录
      </Link>
    </Button>
  )
}
