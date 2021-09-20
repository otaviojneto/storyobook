import React from 'react';
import { Form, Formik } from 'formik';
import * as yup from 'yup';

import { Card } from '../..';
import theme from '../../../styles/colors';

import OutlinedInput, { InputProps } from './OutlinedInput';

export default {
  title: 'Micro Components/MaterialUI/Inputs',
  argTypes: {
    label: { control: 'text' },
    labelWidth: { control: 'number' },
    size: {
      control: {
        type: 'radio',
        options: ['small', 'medium'],
      },
    },
  },
};

const validation = yup.object().shape({
  name: yup.string().required(),
});

const InitialValue = {
  name: '',
};

export const Outlinedinput = ({
  label = 'Nome',
  labelWidth = 50,
  bgLabel,
  size,
}: InputProps) => {
  return (
    <Card padding="50px">
      <Formik
        initialValues={InitialValue}
        validationSchema={validation}
        onSubmit={values => console.log(values)}
      >
        {({
          isValid,
          handleSubmit,
          handleChange,
          values,
          touched,
          errors,
        }) => (
          <Form>
            <OutlinedInput
              name="name"
              label={label}
              value={values.name}
              onChange={handleChange}
              error={touched.name && Boolean(errors.name)}
              labelWidth={labelWidth}
              bgLabel={bgLabel}
              size={size}
              labelColor={`${theme.colors?.success}`}
              borderColor={`${theme.colors?.error}`}
            />

            <br />
            <br />
            <br />
            <button type="submit" onClick={() => handleSubmit()}>
              Submit
            </button>
          </Form>
        )}
      </Formik>
    </Card>
  );
};
