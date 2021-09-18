// import React, { useState } from 'react';
// import Checkbox from './Checkbox';

// export default {
//   title: 'Micro Components/MaterialUI/Inputs',
//   argTypes: {
//     label: { control: 'text' },
//     labelWidth: { control: 'number' },
//     colorText: { control: 'color' },
//     checkColor: { control: 'color' },
//   },
// };

// export const CheckBox = ({
//   checkColor = 'green',
//   colorText,
//   disabled = false,
//   name = 'name',
// }) => {
//   const [checked, setChecked] = useState(true);

//   return (
//     <Checkbox
//       name={name}
//       checked={checked}
//       checkColor={checkColor}
//       disabled={disabled}
//       onChange={() => setChecked(!checked)}
//       colorText={colorText}
//       label="Label"
//     />
//   );
// };
