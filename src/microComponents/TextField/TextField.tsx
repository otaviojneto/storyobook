import React from 'react';
import { IcEmail } from '../../Icons';

// import { Field, Input, InputTypesProps } from './styles';

interface OptionsProps {
  value?: string | number;
  label?: string;
}

export type InputProps = InputTypesProps & {
  name?: string;
  error?: string | undefined;
  type?: string;
  placeholder?: string;
  value?: string;
  options?: OptionsProps[];
};

const textField: React.FC<InputProps> = ({
  name,
  error,
  options,
  placeholder,
  type = 'text',
  value,
  width,
}) => {
  if (type === 'select') {
    return (
      <Input width={width} error={error}>
        <Field
          component="select"
          name={name}
          placeholder={placeholder}
          error={error}
        >
          {options.map(opt => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </Field>

        <label htmlFor={name}>
          <p>{placeholder}</p>

          {/* {value?.length > 1 && !!!error && (
            <img src={IcCheck} />
          )} */}
        </label>

        {error && <h6>{error}</h6>}
      </Input>
    );
  }

  return (
    <Input width={width} error={error}>
      <Field
        type={type || 'text'}
        name={name}
        placeholder={placeholder}
        error={error}
      />
      <label htmlFor={name}>
        <p>{placeholder}</p>

        {value?.length > 1 && !!!error && <img src={IcCheck} />}
      </label>

      {error && <h6>{error}</h6>}
    </Input>
  );
};

export default textField;
