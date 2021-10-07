import React, { useCallback, useEffect, useState } from 'react';
import { DateRange, DateRangeProps } from 'react-date-range';
import { format, isThisYear } from 'date-fns';
import locale from 'date-fns/locale/pt';
import { parseISO } from 'date-fns';

import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';

import { Btn, Container, Footer, OpenDateProps } from './styles';
import { Button } from '..';
import theme from '../../theme/ota';
import { diffInDays } from '@niaratech/niara-js-commons/dist/dateUtils';

export type InputDateProps = OpenDateProps &
  DateRangeProps & {
    priceDay?: string;
    ColorButton?: string;
  };

const InputDate: React.FC<InputDateProps> = ({
  ColorButton,
  ranges,
  priceDay,
  rangeColors,
  onChange,
}) => {
  const [size, setSize] = useState<number>();
  const [openDate, setOpenDate] = useState(false);

  const period = {
    startDate: parseISO(
      ranges?.startDate || new Date().toISOString(),
    ),
    endDate: parseISO(
      ranges?.endDate || new Date().toISOString(),
    ),
  };

  const nights =
    diffInDays(period?.endDate, period?.startDate) || 1;

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setSize(window.innerWidth);
    }

    const onResize = () => {
      setSize(window.innerWidth);
    };
    window.addEventListener('resize', onResize);
  }, []);

  // const handleSelect = (ranges: any) => {
  //   setstartDate(ranges.selection.startDate);
  //   setEndDate(ranges.selection.endDate);
  // };

  // const date = {
  //   startDate: startDate,
  //   endDate: endDate,
  //   key: 'selection',
  // };

  const customDayContent = (day: number) => {
    let extraDot = null;
    if (isThisYear(day)) {
      extraDot = <p>{priceDay}</p>;
    }
    return (
      <div>
        {extraDot}
        <span>{format(day, 'd')}</span>
      </div>
    );
  };
  console.log(ranges);
  return (
    <>
      {size < 768 ? (
        openDate ? (
          <Container visibleDate>
            <DateRange
              showSelectionPreview
              direction="vertical"
              linkedCalendars={true}
              ranges={ranges}
              onChange={onChange}
              months={2}
              dayContentRenderer={customDayContent}
              priceDay={priceDay}
              locale={locale}
              rangeColors={rangeColors}
            />

            <Footer>
              {ranges.map(item => (
                <div key={item.key}>
                  <h4>
                    {item.startDate
                      .toLocaleDateString('pt-BR', {
                        weekday: 'short',
                        day: '2-digit',
                        month: 'short',
                      })
                      .replace('de', ' ')
                      .replace('.', '')}
                    -{' '}
                    {item.endDate
                      .toLocaleDateString('pt-BR', {
                        weekday: 'short',
                        day: '2-digit',
                        month: 'short',
                      })
                      .replace('de', ' ')
                      .replace('.', '')}
                  </h4>
                  {console.log('nights', nights)}
                  <p>({nights} Noite) </p>
                </div>
              ))}

              <Button
                color={ColorButton}
                colorText={`${theme.colors.white}`}
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
            <Btn onClick={() => setOpenDate(true)}>
              <DateRange
                showSelectionPreview
                direction="horizontal"
                linkedCalendars={true}
                ranges={ranges}
                onChange={onChange}
                months={0}
                dayContentRenderer={customDayContent}
                locale={locale}
                rangeColors={rangeColors}
                priceDay={priceDay}
              />
            </Btn>
          </Container>
        )
      ) : (
        <Container>
          <DateRange
            showSelectionPreview
            direction="horizontal"
            linkedCalendars={true}
            ranges={ranges}
            onChange={onChange}
            months={2}
            dayContentRenderer={customDayContent}
            locale={locale}
            rangeColors={rangeColors}
            priceDay={priceDay}
          />
        </Container>
      )}
    </>
  );
};

export default InputDate;
