import React, { useEffect, useState } from 'react'
import { diffInDays } from '@niaratech/niara-js-commons/dist/dateUtils'

import theme from '../../theme/ota'
import { Button } from '..'

import RenderDate, { RenderDateProps } from './RenderDate'
import { Btn, Container, Footer } from './styles'

import 'react-date-range/dist/theme/default.css'
import 'react-date-range/dist/styles.css'
import { useTheme } from 'styled-components'
import { themeColor } from '../../theme'
export type InputDateProps = RenderDateProps & {
  priceDay?: string
  colorButton?: string
  colorButtonText?: string
  rangeColor?: string
  rangeColorText?: string
}

const InputDate: React.FC<InputDateProps> = ({
  colorButton,
  colorButtonText,
  endDate,
  focusedRange,
  minDate,
  priceDay,
  ranges,
  rangeColor,
  rangeColors,
  onChange,
}) => {
  const [size, setSize] = useState<number>()
  const [openDate, setOpenDate] = useState(false)
  const [invert, setInvert] = useState(true)
  const theme = useTheme()

  const nights = diffInDays(ranges[0]?.endDate, ranges[0]?.startDate) || 1

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setSize(window.innerWidth)
    }

    const onResize = () => {
      setSize(window.innerWidth)
    }
    window.addEventListener('resize', onResize)
  }, [])

  const customDate = (date: any) =>
    date
      .toLocaleDateString('pt-BR', {
        weekday: 'short',
        day: '2-digit',
        month: 'short',
      })
      .replace('de', ' ')
      .replace('.', '')

  return (
    <>
      {size < 768 ? (
        openDate ? (
          <Container visibleDate>
            <RenderDate
              endDate={endDate}
              ranges={ranges}
              priceDay={priceDay}
              rangeColors={[themeColor('rangeColor', 'primary')({ rangeColor, theme })]}
              minDate={minDate}
              months={2}
              focusedRange={focusedRange}
              onChange={onChange}
            />

            <Footer>
              {ranges.map((item) => (
                <div key={item.key}>
                  <h4>
                    {customDate(item.startDate)}- {customDate(item.endDate)}
                  </h4>
                  {nights > 1 ? <p>{nights} Noites</p> : <p>{nights} Noite</p>}
                </div>
              ))}

              <Button
                color={themeColor('colorButton', 'primary')({ colorButton, theme })}
                colorText={themeColor('colorButtonText', 'primaryReadable')({ colorButtonText, theme })}
                disabled={diffInDays(ranges[0].endDate, ranges[0].startDate) === 0}
                block
                type="button"
                onClick={() => setOpenDate(false)}
              >
                Aplicar
              </Button>
            </Footer>
          </Container>
        ) : (
          <Container>
            <Btn type="button" onClick={() => setOpenDate(true)}>
              <RenderDate
                endDate={endDate}
                ranges={ranges}
                priceDay={priceDay}
                rangeColors={[themeColor('rangeColor', 'primary')({ rangeColor, theme })]}
                months={0}
                focusedRange={focusedRange}
                onChange={onChange}
              />
            </Btn>
          </Container>
        )
      ) : (
        <Container>
          <Btn type="button" onClick={() => setOpenDate(!openDate)}>
            <RenderDate
              horizontal
              endDate={endDate}
              ranges={ranges}
              priceDay={priceDay}
              rangeColors={[themeColor('rangeColor', 'primary')({ rangeColor, theme })]}
              months={0}
              focusedRange={focusedRange}
              onChange={onChange}
            />
          </Btn>

          {openDate && (
            <Container visibleDate>
              <RenderDate
                horizontal
                endDate={endDate}
                ranges={ranges}
                priceDay={priceDay}
                rangeColors={[themeColor('rangeColor', 'primary')({ rangeColor, theme })]}
                months={openDate ? 2 : 0}
                focusedRange={focusedRange}
                onChange={onChange}
              />
            </Container>
          )}
        </Container>
      )}
    </>
  )
}

export default InputDate
