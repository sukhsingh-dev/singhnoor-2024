export const Heading = ({ text }: { text: string }): React.ReactNode => <h2 className="page-heading">{text}</h2>

export const TextDecorator = ({ color }: { color: string }): React.ReactNode => (
  <svg width={100} height={10} viewBox="0 0 100 10" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M0 2.59139C0 1.41818 1.00517 0.496933 2.17394 0.598968L62.8457 5.89571C62.9484 5.90468 63.0517 5.90569 63.1545 5.89874L97.8652 3.55342C99.0202 3.47538 100 4.39124 100 5.54888V6.43372C100 7.52866 99.1195 8.42005 98.0247 8.43357L19 9.40918H2C0.895431 9.40918 0 8.51375 0 7.40918V2.59139Z" fill={color} />
  </svg>
)
