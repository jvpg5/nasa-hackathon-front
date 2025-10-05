'use client'

import BlurText from '../BlurText'

export default function TextStyled({ text }: { text: string }) {
  return (
    <BlurText
      text={text}
      className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-white tracking-tight justify-center"
    />
  )
}
