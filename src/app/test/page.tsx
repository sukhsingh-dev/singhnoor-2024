import "./styles.module.sass"
import Icon from "@/shared/components/Icon"

export default function Test(): React.ReactNode {
  return (
    <>
      <h1>test page</h1>
      <button type="button" className="btn btn-primary">Primary button</button>
      <Icon name="menu" />
      <Icon name="search" />
      <Icon name="menu" className="text-primary" />
      <Icon name="search" className="text-secondary" />
    </>
  )
}
