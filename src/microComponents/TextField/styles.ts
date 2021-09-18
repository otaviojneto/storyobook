// import { Field as InputField } from 'formik';
// import styled from 'styled-components';
// import theme from '../../styles/colors';

// export type InputTypesProps = {
//   width?: string;
//   error?: boolean | string;
// };

// export const Input = styled.div<InputTypesProps>`
//   margin: 4px 0;
//   position: relative;
//   width: ${({ width }) => (width ? width : '100%')};

//   h6 {
//     color: ${theme?.colors?.error};
//     font-size: 10px;
//     line-height: 10px;
//     position: absolute;
//     bottom: -14px;
//   }

//   input[type='number']::-webkit-inner-spin-button,
//   input[type='number']::-webkit-outer-spin-button {
//     -webkit-appearance: none;
//   }

//   label {
//     p {
//       background-color: ${theme?.colors?.white};
//       color: ${({ error }) =>
//         error
//           ? `${theme?.colors?.error}`
//           : `${theme?.colors?.info}`};
//       font-size: 12px;
//       left: 16px;
//       line-height: 12px;
//       position: absolute;
//       top: -6px;
//     }

//     img {
//       position: absolute;
//       right: 8px;
//       top: 10px;
//     }
//   }
// `;

// export const Field = styled(InputField)`
//   background-color: transparent;
//   border: ${({ error }) =>
//     error
//       ? `1px solid ${theme?.colors?.error}`
//       : `1px solid ${theme?.colors?.grey1}`};
//   border-radius: 2px;
//   font-size: 16px;
//   padding: 8px 24px 6px 8px;
//   width: 100%;

//   &:active,
//   &:focus {
//     border: 1px solid ${theme?.colors?.grey1};
//     transition: 0.15s ease-in-out;
//   }

//   &::placeholder {
//     color: ${theme?.colors?.grey}
// `;
