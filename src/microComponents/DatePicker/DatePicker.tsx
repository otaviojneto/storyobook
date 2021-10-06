import React, { useEffect, useState } from 'react';
import { DateRange, DateRangeProps } from 'react-date-range';
import { format, isThisYear } from 'date-fns';
import locale from 'date-fns/locale/pt';

import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';

import { Btn, Container, OpenDateProps } from './styles';

export type InputDateProps = OpenDateProps &
  DateRangeProps & {
    priceDay?: string;
  };

const InputDate: React.FC<InputDateProps> = ({
  ranges,
  priceDay,
  hoverColor,
  rangeColors,
  onChange,
}) => {
  const [startDate, setstartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [size, setSize] = useState<number>();
  const [openDate, setOpenDate] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setSize(window.innerWidth);
    }

    const onResize = () => {
      setSize(window.innerWidth);
    };
    window.addEventListener('resize', onResize);
  }, []);

  const handleSelect = (ranges: any) => {
    setstartDate(ranges.selection.startDate);
    setEndDate(ranges.selection.endDate);
  };

  const date = {
    startDate: startDate,
    endDate: endDate,
    key: 'selection',
  };

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

  return (
    <>
      {size < 768 ? (
        <Btn onClick={() => setOpenDate(true)}>
          {openDate ? (
            <Container visibleDate>
              <DateRange
                showSelectionPreview
                direction="horizontal"
                linkedCalendars={true}
                ranges={ranges}
                onChange={onChange}
                months={1}
                dayContentRenderer={customDayContent}
                priceDay={priceDay}
                locale={locale}
                rangeColors={rangeColors}
                // hoverColor={hoverColor}
              />
            </Container>
          ) : (
            <Container>
              <DateRange
                showSelectionPreview
                direction="horizontal"
                linkedCalendars={true}
                ranges={ranges}
                onChange={onChange}
                months={1}
                dayContentRenderer={customDayContent}
                locale={locale}
                rangeColors={rangeColors}
                priceDay={priceDay}
                // hoverColor={hoverColor}
              />
            </Container>
          )}
        </Btn>
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
            // hoverColor={hoverColor}
          />
        </Container>
      )}
    </>
  );
};

export default InputDate;
