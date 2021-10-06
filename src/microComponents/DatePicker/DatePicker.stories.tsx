import React, { useState } from 'react';
import InputDate from './DatePicker';
import theme from '../../theme/ota';

export default {
  title: 'Micro Components/Input',

  argTypes: {
    colorText: { control: 'color' },
  },
};

export const Datepicker = () => {
  const [startDate, setstartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  const handleSelect = (ranges: any) => {
    setstartDate(ranges.selection.startDate);
    setEndDate(ranges.selection.endDate);
  };

  const dates = {
    startDate: startDate,
    endDate: endDate,
    key: 'selection',
  };

  return (
    <InputDate
      ranges={[dates]}
      onChange={handleSelect}
      rangeColors={['black']}
    />
  );
};
