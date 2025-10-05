'use client'

import ShinyText from '../ShinyText'

export default function ShinyTextStyled({ text }: { text: string }) {
  return (
    <ShinyText
      text={text}
      className="text-xl text-gray-400 max-w-3xl mx-auto"
    />
  )
}
