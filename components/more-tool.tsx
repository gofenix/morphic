import Link from 'next/link'
import Image from 'next/image'

export default function MoreTools() {
  return (
    <div className="text-center w-full">
      <h2 className="text-slate-500">更多智能体</h2>
      <ul className="animate-in  grid grid-cols-2 md:grid-cols-4 gap-3 mt-4 max-w-2xl mx-auto text-xs">
        <li>
          <Link
            href="https://www.cosine.work/zh"
            className=" 
              dark:bg-white/30
              dark:text-slate-900
              dark:border-slate-900
               text-slate-400  border border-slate-300/30 transition-all hover:bg-white/50 hover:backdrop-blur-md py-2.5 rounded-md block"
          >
            <Image
              src={'/review.jpg'}
              width={100}
              height="20"
              className="w-full mb-1 h-5 object-contain"
              alt="MagickPen - 智能写作助手"
            />
            合同审查
          </Link>
        </li>

        <li>
          <Link
            href="https://www.cosine.work/zh"
            className=" 
              dark:bg-white/30
              dark:text-slate-900
              dark:border-slate-900
               text-slate-400  border border-slate-300/30 transition-all hover:bg-white/50 hover:backdrop-blur-md py-2.5 rounded-md block"
          >
            <Image
              src={'/draft.jpg'}
              width={100}
              height="20"
              className="w-full mb-1 h-5 object-contain"
              alt="MagickPen - 智能写作助手"
            />
            文书草拟
          </Link>
        </li>
        <li>
          <Link
            href="https://www.cosine.work/zh"
            className=" 
              dark:bg-white/30
              dark:text-slate-900
              dark:border-slate-900
               text-slate-400  border border-slate-300/30 transition-all hover:bg-white/50 hover:backdrop-blur-md py-2.5 rounded-md block"
          >
            <Image
              src={'/legal.jpg'}
              width={100}
              height="20"
              className="w-full mb-1 h-5 object-contain"
              alt="MagickPen - 智能写作助手"
            />
            相关法条
          </Link>
        </li>
        <li>
          <Link
            href="https://www.cosine.work/zh"
            className=" 
              dark:bg-white/30
              dark:text-slate-900
              dark:border-slate-900
               text-slate-400  border border-slate-300/30 transition-all hover:bg-white/50 hover:backdrop-blur-md py-2.5 rounded-md block"
          >
            <Image
              src={'/logo.png'}
              width={100}
              height="20"
              className="w-full mb-1 h-5 object-contain"
              alt="MagickPen - 智能写作助手"
            />
            敬请期待
          </Link>
        </li>
      </ul>
    </div>
  )
}
