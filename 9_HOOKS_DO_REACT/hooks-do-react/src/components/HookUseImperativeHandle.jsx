import { useRef } from "react"
import SomeComponent from "./SomeComponent"

const HookUseImperativeHandle = () => {
    const componentRef = useRef()

  return (
    <div>
        <h2>UseImperativeHandle</h2>
        <SomeComponent ref={componentRef} />
        <button onClick={() => componentRef.current.validate()} >Validate</button>
        <hr />
    </div>
  )
}

export default HookUseImperativeHandle