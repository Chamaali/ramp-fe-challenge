import classNames from "classnames"
import { useRef, useState } from "react"
import { InputCheckboxComponent } from "./types"

export const InputCheckbox: InputCheckboxComponent = ({ id, checked = false, disabled, onChange }) => {
  const [isChecked, setISCheceked] = useState(false)

  const { current: inputId } = useRef(`RampInputCheckbox-${id}`)

  const handleCheckboxChange = () => {
    setISCheceked(!isChecked)
  }

  return (
    <div className="RampInputCheckbox--container" data-testid={inputId}>
      {/* <label
        className={classNames("RampInputCheckbox--label", {
          "RampInputCheckbox--label-checked": checked,
          "RampInputCheckbox--label-disabled": disabled,
        })}
      /> */}
      <input
        id={inputId}
        type="checkbox"
        className="RampInputCheckbox--label"
        checked={isChecked}
        // onChange={() => onChange(!checked)}
        onChange={handleCheckboxChange}
      />
    </div>
  )
}
