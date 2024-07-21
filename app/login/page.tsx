import { redirect } from 'next/navigation'
import { SubmitButton } from './submit-button'
import { headers } from 'next/headers'
import { createClient } from '@/utils/supabase/server'
import Image from 'next/image'

export default function Login({
  searchParams
}: {
  searchParams: { message: string }
}) {
  const signIn = async (formData: FormData) => {
    'use server'

    const email = formData.get('email') as string
    const password = formData.get('password') as string

    const supabase = createClient()
    const { error } = await supabase.auth.signInWithPassword({
      email,
      password
    })

    if (error) {
      return redirect(
        `/login?message=${encodeURIComponent('用户名或密码错误')}`
      )
    }

    return redirect('/')
  }

  const signInByGuest = async (formData: FormData) => {
    'use server'

    const supabase = createClient()
    const { error } = await supabase.auth.signInAnonymously()

    if (error) {
      return redirect(
        `/login?message=${encodeURIComponent('用户名或密码错误')}`
      )
    }

    return redirect('/')
  }

  const signUp = async (formData: FormData) => {
    'use server'

    const origin = headers().get('origin')
    const email = formData.get('email') as string
    const password = formData.get('password') as string

    const supabase = createClient()
    const { error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        emailRedirectTo: `${origin}/auth/callback`
      }
    })

    if (error) {
      return redirect(
        `/login?message=${encodeURIComponent('注册失败，请换一个邮箱重试')}`
      )
    }

    return redirect('/')
  }

  return (
    <div className="bg-background text-foreground min-h-screen flex flex-col items-center">
      <div className="flex-1 flex flex-col w-full px-8 sm:max-w-md justify-center gap-2">
        <form className="animate-in flex-1 flex flex-col w-full justify-center gap-2 text-foreground">
          <h1 className="animate-in text-slate-700 font-bold text-2xl mb-12 flex items-center gap-3 dark:text-slate-400">
            <Image
              src={'/logo.png'}
              width="32"
              height="32"
              alt="MagickPen logo"
            />
            余弦法律：AI全网分析引擎
          </h1>
          <label className="text-md font-bold" htmlFor="email">
            邮箱
          </label>
          <input
            className="rounded-md px-4 py-2 bg-inherit border mb-6"
            name="email"
            placeholder="you@example.com"
            required={false}
          />
          <label className="text-md font-bold" htmlFor="password">
            密码
          </label>
          <input
            className="rounded-md px-4 py-2 bg-inherit border mb-6"
            type="password"
            name="password"
            placeholder="••••••••"
            required={false}
          />
          <SubmitButton
            formAction={signIn}
            className="bg-green-700 rounded-md px-4 py-2 text-foreground mb-2"
            pendingText="登录中..."
          >
            登录
          </SubmitButton>
          <SubmitButton
            formAction={signUp}
            className="border border-foreground/20 rounded-md px-4 py-2 text-foreground mb-2"
            pendingText="注册中..."
          >
            注册
          </SubmitButton>
          <SubmitButton
            formAction={signInByGuest}
            className="border border-foreground/20 rounded-md px-4 py-2 text-foreground mb-2"
            pendingText="登录中..."
          >
            游客登录
          </SubmitButton>
          {searchParams?.message && (
            <p className="mt-4 p-4 bg-foreground/10 text-foreground text-center">
              {searchParams.message}
            </p>
          )}
        </form>
      </div>
    </div>
  )
}
