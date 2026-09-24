import Image from 'next/image'

interface LogoProps {
  size?:      number
  className?: string
}

export function Logo({ size = 150, className = '' }: LogoProps) {
  return (
    <div className={`flex items-center ${className}`}>
      <Image 
        src="/images/logo.png" 
        alt="CodeX Solutions" 
        width={size} 
        height={size} 
        className="object-contain"
        priority
      />
    </div>
  )
}
