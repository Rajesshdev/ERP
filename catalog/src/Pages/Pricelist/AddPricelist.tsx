import React, { useState } from 'react';
import {
  Button,
  Dialog,
  DialogActions,
  DialogTitle,
  Stack,
  Snackbar,
  Alert
} from '@mui/material';
import TextField from '../../Components/Textfield/Textfeild';
import { useForm, Controller, Control } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { pricelistschema } from '../../Components/Validation/Validation';
import FormControl from '@mui/material/FormControl';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
interface FormData {
  Name: string;
  pricelisttype: string;
  description: string;
  Percentage: Number;
  type: String;
}
const Pricelistpopup = (props: any) => {
  const [Open, setOpen] = useState(true);
  const [success, setSuccess] = useState('');
  const [failure, setFailure] = useState('');
  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(pricelistschema),
  });

  const onSubmit = (data: any) => {
    console.log(data);
    setSuccess('Data Added Successfully!');
    setOpen(true);
    setTimeout(() => {
      setSuccess('');
      setOpen(false);
      props.close();
      reset();
    }, 2000);
  };

  return (
    <div>
      <Dialog
        open={props.open}
        aria-labelledby='alert-dialog-title'
        aria-describedby='alert-dialog-description'
      >
        <DialogTitle id='alert-dialog-title'>Pricelist</DialogTitle>
        {/* {Object.keys(errors).map((err, index) => <p key={""+index}>{err}</p>)} */}

        <DialogActions>
          <div style={{ margin: '3vh' }}>
            <form onSubmit={handleSubmit(onSubmit)}>
              <TextField name='Name' control={control} />
              &nbsp; &nbsp;
              <TextField name='Description' control={control} />
              &nbsp; &nbsp;
              <div style={{ display: 'flex' }}>
                 <FormControl fullWidth variant="outlined" >
                 <Controller
          render={({ field }) => (
            <Select
              value={field.value}
              onChange={field.onChange}
              onBlur={field.onBlur}
            >
      <MenuItem value='Markup'>Markup</MenuItem>
                      <MenuItem value='Markdown'>Markdown</MenuItem>
            </Select>
          )}
          control={control}
          name="pricelisttype"
          defaultValue='Markup'
          rules={{ required: 'This field is required' }}
        />
      </FormControl>
                <TextField name='Percentage' control={control} />
              </div>
              <br />
              <Stack direction='row' justifyContent='right' spacing={3}>
                <Button
                  variant='contained'
                  id='submit'
                  type='submit'
                  style={{ backgroundColor: '#3BB877' }}
                >
                  Add
                </Button>
                <Button
                  variant='contained'
                  style={{ backgroundColor: '#FAEAEB', color: 'red' }}
                  onClick={() => {
                    props.close();
                    reset();
                  }}
                >
                  Cancel
                </Button>
              </Stack>
            </form>
          </div>
          {failure && (
      <Snackbar open={Open} >
      <Alert severity="error">{failure}</Alert>
      </Snackbar>
            )}
            {success && (
                <Snackbar open={Open} >
                <Alert severity="success">{success}</Alert>
                </Snackbar>
            )} 
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default Pricelistpopup;
