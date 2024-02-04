interface IconType {
  name: string
  className?: string
  width?: number
  height?: number
}

const Icon: React.FC<IconType> = ({ width, height, name, className }: IconType) => (
  <svg width={width} height={height} className={`icon ${className}`}>
    <use href={`/icons/sprite.svg#${name}`} />
  </svg>
)

Icon.defaultProps = {
  width: 24,
  height: 24,
  className: ''
}

export default Icon
