import { addDays } from 'date-fns'
import React, { useState } from 'react'
import InputDate from './DatePicker'
import { diffInDays } from '@niaratech/niara-js-commons/dist/dateUtils'

export default {
  title: 'Micro Components/Input',

  argTypes: {
    colorText: { control: 'color' },
  },
}

export const Datepicker = () => {
  const [startDate, setstartDate] = useState(new Date())
  const [endDate, setEndDate] = useState(new Date(addDays(startDate, 1)))

  const handleSelect = (ranges: any) => {
    setstartDate(ranges.selection.startDate)
    setEndDate(ranges.selection.endDate)
  }

  const dates = {
    startDate: startDate,
    endDate: endDate,
    key: 'selection',
  }

  {
    console.log('diffInDays', diffInDays(dates.endDate, dates.startDate))
  }
  return (
    <>
      <button
        style={{
          backgroundColor: 'gray',
          color: 'white',
          opacity: diffInDays(dates.endDate, dates.startDate) === 0 ? '0.5' : 1,
        }}
      ></button>
      <InputDate
        ranges={[dates]}
        onChange={handleSelect}
        rangeColors={['black']}
        // priceDay="500,00"
      />
    </>
  )
}
