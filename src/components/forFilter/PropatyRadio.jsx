import { Radio } from '@ui-kitten/components'
import React from 'react'
import { gray } from '../../utils/th'
import { memo } from 'react'

const PropatyRadio = ({ title = 'Propaty', set, active,w }) => {
  return (
    <Radio
      onChange={() => set(title)}
      checked={active === title}
      status="primary"
      style={{
        borderColor: gray,
        borderWidth: 1,
        paddingHorizontal: 15,
        borderRadius: 10,
        height: 60,
        marginHorizontal: 10,
        ...(w && {width:w})
      }}
    >
      {title}
    </Radio>
  )
}

export default memo(PropatyRadio)
