import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import { Control, useController } from 'react-hook-form';

interface TextInputProps {
  control: Control<any>;
  name: string;
}

const TextInput: React.FC<TextInputProps> = ({ control, name }) => {
  const {
    field,
    fieldState: { invalid, isTouched, isDirty, error },
    formState: { touchedFields, dirtyFields },
  } = useController({
    name,
    control,
    rules: { required: true },
  });

  return (
    <TextField
      fullWidth
      size='small'
      error={invalid}
      helperText={error?.message}
      onChange={field.onChange} // send value to hook form
      onBlur={field.onBlur} // notify when input is touched/blur
      value={field.value} // input value
      name={field.name} // send down the input name
      inputRef={field.ref} // send input ref, so we can focus on input when error appear
    />
  );
};

export default TextInput;
