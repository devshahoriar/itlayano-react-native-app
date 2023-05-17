import { useCallback, useState } from 'react'
import Slider from 'rn-range-slider'
import Label from './Slider/Label'
import Notch from './Slider/Notch'
import Rail from './Slider/Rail'
import RailSelected from './Slider/RailSelected'
import Thumb from './Slider/Thumb'
import styles from './styles'
const Sliderr = ({setH,setL}) => {
  const [rangeDisabled, setRangeDisabled] = useState(false)
  const [low, setLow] = useState(300)
  const [high, setHigh] = useState(900)
  const [min, setMin] = useState(200)
  const [max, setMax] = useState(1000)
  const [floatingLabel, setFloatingLabel] = useState(false)

  const renderThumb = useCallback(
    (name) => <Thumb name={name} />,
    []
  )
  const renderRail = useCallback(() => <Rail />, [])
  const renderRailSelected = useCallback(() => <RailSelected />, [])
  const renderLabel = useCallback((value) => <Label text={value} />, [])
  const renderNotch = useCallback(() => <Notch />, [])
  const handleValueChange = useCallback((lowValue, highValue) => {
    
    setLow(lowValue)
    setHigh(highValue)
    setH(highValue)
    setL(lowValue)
  }, [])
  const toggleRangeEnabled = useCallback(
    () => setRangeDisabled(!rangeDisabled),
    [rangeDisabled]
  )
  const toggleFloatingLabel = useCallback(
    () => setFloatingLabel(!floatingLabel),
    [floatingLabel]
  )

  return (
    <Slider
      style={styles.slider}
      min={min}
      max={max}
      step={1}
      disableRange={rangeDisabled}
      renderThumb={renderThumb}
      renderRail={renderRail}
      renderRailSelected={renderRailSelected}
      onValueChanged={handleValueChange}
    />
  )
}

export default Sliderr
