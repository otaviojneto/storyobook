import React from 'react';
import { Form, Formik } from 'formik';
import * as yup from 'yup';

import { Card } from '../..';

import OutlinedSelect, { SelectProps } from './OutlinedSelect';
import { MenuItem } from '@material-ui/core';

export default {
  title: 'Micro Components/MaterialUI/Inputs',
  argTypes: {
    label: { control: 'text' },
    labelColorActive: { control: 'color' },
    labelColor: { control: 'color' },
    borderColorActive: { control: 'color' },
    InputWidth: { control: 'text' },
    size: {
      control: {
        type: 'radio',
        options: ['small', 'medium'],
      },
    },
  },
};

const country = [
  {
    value: 'AJE',
    label: 'Azerbaijão',
  },
  {
    value: 'AR',
    label: 'Argentina',
  },
  {
    value: 'BR',
    label: 'Brasil',
  },
];

const validation = yup.object().shape({
  country: yup.string().required('selecione'),
});

const InitialValue = {
  country: '',
};

export const Select = ({
  label = 'País',
  size,
  labelColorActive,
  labelColor,
  borderColorActive,
  InputWidth,
}: SelectProps) => {
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
            <OutlinedSelect
              name="country"
              size={size}
              label={label}
              value={values.country}
              onChange={handleChange}
              error={touched.country && Boolean(errors.country)}
              fullWidth
              labelColorActive={labelColorActive}
              labelColor={labelColor}
              borderColorActive={borderColorActive}
              InputWidth={InputWidth}
            >
              {country.map(item => (
                <MenuItem key={item.value} value={item.value}>
                  {item.label}
                </MenuItem>
              ))}
            </OutlinedSelect>

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
