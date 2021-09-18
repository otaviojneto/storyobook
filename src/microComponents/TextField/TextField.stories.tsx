// import { Form, Formik } from 'formik';
// import * as yup from 'yup';
// import React from 'react';
// import TextField, { InputProps } from './TextField';
// import { Card } from '..';

// export default {
//   title: 'Micro Components/TextField',
//   argTypes: {
//     placeholder: { control: 'text' },
//   },
// };

// const validation = yup.object().shape({
//   name: yup.string().required(),
// });

// export const Counter = ({ name, placeholder }: InputProps) => {
//   return (
//     <Card>
//       <Formik
//         validationSchema={validation}
//         initialValues={{
//           name: '',
//         }}
//         onSubmit={values => {
//           // same shape as initial values
//           console.log(values);
//         }}
//       >
//         {({ errors, values, isValidating }) => (
//           <Form>
//             <TextField
//               name="name"
//               placeholder="name"
//               error={errors.name}
//               value={values.name}
//             />

//             {/* <button type="submit">Submit</button> */}
//           </Form>
//         )}
//       </Formik>
//     </Card>
//   );
// };
