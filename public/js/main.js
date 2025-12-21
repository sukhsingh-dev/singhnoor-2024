document.addEventListener("DOMContentLoaded", () => {
  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  const clickSound = () => {
    const audio = new Audio('audio/click-sound.mp3')
    // eslint-disable-next-line @typescript-eslint/no-floating-promises
    audio.play()
  }

  document.querySelectorAll('button[data-has-click="true"]').forEach((button) => {
    const targetClass = button.getAttribute("data-class-target")
    const classApplied = button.getAttribute("data-class-applied")
    const bodyOverflowHidden = button.getAttribute("data-body-overflow-hidden") === "true"
    const soundClick = button.getAttribute("data-sound-click") === "true"

    button.addEventListener("click", () => {
      if (targetClass != null && classApplied != null) {
        document.querySelector(`.${targetClass}`)?.classList.toggle(classApplied)
      }
      if (bodyOverflowHidden) {
        document.body.classList.toggle("overflow-hidden")
      }
      if (soundClick) {
        clickSound()
      }
    })
  })

  // to close the sidebar on link change
  document.querySelectorAll('.sn-sidebar a').forEach((link) => {
    link.addEventListener("click", () => {
      document.querySelector('.hamburger-btn').click()
    })
  })

  // to open menus on tab/desktops
  if (window.innerWidth >= 750) {
    const detailsElements = document.querySelectorAll('.sn-sidebar details')
    detailsElements.forEach((detail) => {
      detail.setAttribute('open', '')
    })
  }
})
