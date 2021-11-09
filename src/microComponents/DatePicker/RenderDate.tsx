import React from 'react'
import locale from 'date-fns/locale/pt'
import { DateRange, DateRangeProps } from 'react-date-range'
import { format, isThisYear } from 'date-fns'

import { OpenDateProps } from './styles'

export type RenderDateProps = DateRangeProps &
  OpenDateProps & {
    horizontal?: boolean
    priceDay?: string
  }

const RenderDate: React.FC<RenderDateProps> = ({
  horizontal,
  months,
  priceDay,
  ranges,
  rangeColors,
  focusedRange,
  startDate,
  endDate,
  onChange,
}) => {
  const customDayContent = (day: number) => {
    let extraDot = null
    if (isThisYear(day)) {
      extraDot = <p>{priceDay}</p>
    }
    return (
      <div>
        {extraDot}
        <span>{format(day, 'd')}</span>
      </div>
    )
  }

  return (
    <DateRange
      startDate={startDate}
      endDate={endDate}
      showSelectionPreview
      direction={horizontal ? 'horizontal' : 'vertical'}
      linkedCalendars={true}
      ranges={ranges}
      onChange={onChange}
      months={months}
      dayContentRenderer={customDayContent}
      priceDay={priceDay}
      locale={locale}
      rangeColors={rangeColors}
      preventSnapRefocus={true}
      focusedRange={focusedRange}
      minDate={new Date()}
    />
  )
}

export default RenderDate
