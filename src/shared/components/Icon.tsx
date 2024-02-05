interface IconType {
  name: string
  className?: string
  width?: number
  height?: number
}

const Icon: React.FC<IconType> = ({ width = 24, height = 24, name, className = '' }: IconType) => (
  <svg width={width} height={height} className={`icon ${className}`}>
    <use href={`/icons/sprite.svg#${name}`} />
  </svg>
)

export default Icon
