// components/ui/Logo.tsx — CodeX Solutions SVG Logo

interface LogoProps {
  size?:      number
  showText?:  boolean
  className?: string
}

export function Logo({ size = 40, showText = true, className = '' }: LogoProps) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {/* C mark */}
      <svg
        width={size}
        height={size}
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <clipPath id="cMark">
            <path d="M0,20 L20,0 L75,0 L100,25 L25,25 L25,75 L100,75 L75,100 L20,100 L0,80 Z"/>
          </clipPath>
          <linearGradient id="redGrad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%"   stopColor="#ff3333"/>
            <stop offset="100%" stopColor="#e8000d"/>
          </linearGradient>
        </defs>

        {/* Main C shape */}
        <path
          d="M0,20 L20,0 L75,0 L100,25 L25,25 L25,75 L100,75 L75,100 L20,100 L0,80 Z"
          fill="url(#redGrad)"
        />

        {/* Hatch lines — top arm */}
        <g clipPath="url(#cMark)" opacity="0.30">
          <line x1="57" y1="1"  x2="99" y2="22" stroke="#fff" strokeWidth="3"/>
          <line x1="63" y1="1"  x2="99" y2="17" stroke="#fff" strokeWidth="3"/>
          <line x1="51" y1="1"  x2="98" y2="25" stroke="#fff" strokeWidth="3"/>
        </g>

        {/* Hatch lines — bottom arm */}
        <g clipPath="url(#cMark)" opacity="0.30">
          <line x1="1"  y1="77" x2="43" y2="99" stroke="#fff" strokeWidth="3"/>
          <line x1="1"  y1="82" x2="37" y2="99" stroke="#fff" strokeWidth="3"/>
          <line x1="1"  y1="72" x2="49" y2="99" stroke="#fff" strokeWidth="3"/>
        </g>
      </svg>

      {/* Wordmark */}
      {showText && (
        <div className="flex flex-col leading-none">
          <span className="font-display font-bold text-white tracking-widest text-lg">
            CODE<span className="text-brand-500">X</span>
          </span>
          <span className="text-[10px] tracking-[0.3em] text-gray-400 font-medium uppercase">
            Solutions
          </span>
        </div>
      )}
    </div>
  )
}
