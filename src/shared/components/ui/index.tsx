interface HeadingProps {
  text: string
}

interface piBgProps {
  className: string
  color: string
}

interface textDecorator {
  color: string
}

export const PiBg: React.FC<piBgProps> = ({ className, color }: piBgProps) => (
  <svg className={className} width={172} height={125} viewBox="0 0 172 125" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M0 11.9023C0 5.12619 5.86009 -0.163073 12.6008 0.528973L161.232 15.7884C167.063 16.3871 171.497 21.2995 171.497 27.1617V113.567C171.497 119.881 166.378 125 160.064 125H11.4331C5.11879 125 0 119.881 0 113.567V11.9023Z" fill={color} />
  </svg>
)

export const Heading: React.FC<HeadingProps> = ({ text }: HeadingProps) => <h2 className="page-heading">{text}</h2>

export const TextDecorator: React.FC<textDecorator> = ({ color }: textDecorator) => (
  <svg width={100} height={10} viewBox="0 0 100 10" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M0 2.59139C0 1.41818 1.00517 0.496933 2.17394 0.598968L62.8457 5.89571C62.9484 5.90468 63.0517 5.90569 63.1545 5.89874L97.8652 3.55342C99.0202 3.47538 100 4.39124 100 5.54888V6.43372C100 7.52866 99.1195 8.42005 98.0247 8.43357L19 9.40918H2C0.895431 9.40918 0 8.51375 0 7.40918V2.59139Z" fill={color} />
  </svg>
)
