export const clickSound = (): void => {
  const audio = new Audio('audio/click-sound.mp3')
  // eslint-disable-next-line @typescript-eslint/no-floating-promises
  audio.play()
}

// added this due to esLint single export error remove once added new function
export const NewImage = (): number => 1
