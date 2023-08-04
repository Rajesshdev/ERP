import React, { useState } from 'react';
import { useForm, Controller, Control } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import TextField from '../../Components/Textfield/Textfeild';
import {
  Alert,
  Button,
  Container,
  Breadcrumbs,
  Grid,
  MenuItem,
  Stack,
  Typography,
  TextareaAutosize,
  Snackbar,
  Divider,
} from '@mui/material';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Radio from '@mui/material/Radio';
import Tooltip from '@mui/material/Tooltip';
import Help from '@mui/icons-material/HelpOutline';
import { Legend, Tooltips } from '../../Components/Styled/Style';
import { productschema } from '../../Components/Validation/Validation';
import { Link } from 'react-router-dom';
import Checkbox from '@mui/material/Checkbox';
import Paper from '@mui/material/Paper';
import IconButton from '@mui/material/IconButton';
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import InputAdornment from '@mui/material/InputAdornment';
import { useNavigate } from 'react-router-dom';
import '../../App.css';
interface FormData {
  type: string;
  Productname: string;
  Brand: string;
  Unit: string;
  Category: string;
  SKU: string;
  Barcodetype: number;
  Alretquanity: string;
  productimage: string;
  description: string;
  Managestock: boolean;
}

export default function MyForm() {
  const navigate = useNavigate();
  const [Open, setOpen] = React.useState(true);
  const [success, setSuccess] = useState('');
  const [failure, setFailure] = useState('');
  const myObject = {
    defaultValues: {
      type: 'Goods',
    },
  };
  const {
    register,
    handleSubmit,
    control,
    watch,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(productschema),
  });
  const Type = watch('type');

  const onSubmit = (data: any) => {
    console.log(data);
    setSuccess('Data Added Successfully!');
    setOpen(true);
    setTimeout(() => {
      setSuccess('');
      setOpen(false);
      navigate('/productlist');
    }, 2000);
  };

  return (
    <div style={{ padding: '20px 10px' }}>
      {/* {Object.keys(errors).map((err, index) => <p key={""+index}>{err}</p>)} */}
      <form onSubmit={handleSubmit(onSubmit)}>
        <Breadcrumbs aria-label='breadcrumb' style={{ marginLeft: '2%' }}>
          <Link
            to='/catalog/products'
            style={{ textDecoration: 'none', color: '#606060' }}
          >
            <h1>Products</h1>
          </Link>
          <h1>Add new product </h1>
        </Breadcrumbs>
        <br />
        <div className='Container'>
          {/* First Column */}
          <div className='row'>
            <div className='row_main'>
              <div className='Col'>
                <div className='Col_main'>
                  <Legend>Type</Legend>
                  <Tooltip title='Add' placement='right' arrow>
                    <Help style={Tooltips} />
                  </Tooltip>
                </div>
                <div style={{ marginTop: '-8px' }}>
                  <FormControl component='fieldset'>
                    <Controller
                      rules={{ required: true }}
                      control={control}
                      name='type'
                      render={({ field }) => (
                        <RadioGroup {...field} row>
                          <FormControlLabel
                            value='Goods'
                            control={<Radio />}
                            label='Goods'
                          />
                          <FormControlLabel
                            value='Service'
                            control={<Radio />}
                            label='Service'
                          />
                        </RadioGroup>
                      )}
                    />
                  </FormControl>
                </div>
              </div>
              <br />
              <div className='Col'>
                <div className='Col_main'>
                  <Legend>Name</Legend>
                </div>
                <div>
                  <TextField name='Productname' control={control} />
                </div>
              </div>
              <br />
              <div className='Col'>
                <div className='Col_main'>
                  <Legend>SKU</Legend>
                  <Tooltip title='Add' placement='right' arrow>
                    <Help style={Tooltips} />
                  </Tooltip>
                </div>
                <div>
                  <TextField name='Productname' control={control} />
                </div>
              </div>
              <br />
              <div className='Col'>
                <div className='Col_main'>
                  <Legend
                    required={Boolean(Type !== 'Service' && Type !== undefined)}
                  >
                    Unit
                  </Legend>
                  <Tooltip title='Add' placement='right' arrow>
                    <Help style={Tooltips} />
                  </Tooltip>
                </div>
                <div>
                  <TextField name='Productname' control={control} />
                </div>
              </div>
              <br />
              <div className='Col'>
                <div className='Col_main'>
                  <Legend>Category</Legend>
                </div>
                <div>
                  <TextField name='Productname' control={control} />
                </div>
              </div>
              <br />
              <div className='Col'>
                <div className='Col_main'></div>
                <div style={{ display: 'flex' }}>
                  <Controller
                    name='Managestock'
                    control={control}
                    render={({ field }) => (
                      <Checkbox
                        style={{ marginTop: '-10px' }}
                        id='Managestock'
                        {...field}
                        inputProps={{ 'aria-label': 'controlled' }}
                      />
                    )}
                  />{' '}
                  Returnable Item &nbsp;
                  <div style={{ marginTop: '-1px' }}>
                    <Tooltip title='Add' placement='right' arrow>
                      <Help style={Tooltips} />
                    </Tooltip>
                  </div>
                </div>
              </div>
            </div>
            <div className='Img'>Image</div>
          </div>
          <br />
          {/* Second column */}
          <div className='row'>
            <div className='row_main'>
              <div className='Col'>
                <div className='Col_main'>
                  <Legend>Name</Legend>
                </div>
                <div>
                  <TextField name='Productname' control={control} />
                </div>
              </div>
              <br />
              <div className='Col'>
                <div className='Col_main'>
                  <Legend>SKU</Legend>
                  <Tooltip title='Add' placement='right' arrow>
                    <Help style={Tooltips} />
                  </Tooltip>
                </div>
                <div>
                  <TextField name='Productname' control={control} />
                </div>
              </div>
            </div>
            <div className='Col_flex'>
              <div className='Col'>
                <div className='Col_main'>
                  <Legend
                    required={Boolean(Type !== 'Service' && Type !== undefined)}
                  >
                    Unit
                  </Legend>
                  <Tooltip title='Add' placement='right' arrow>
                    <Help style={Tooltips} />
                  </Tooltip>
                </div>
                <div>
                  <TextField name='Productname' control={control} />
                </div>
                <br />

              </div>
              <br />

              <div className='Col'>
                <div className='Col_main'>
                  <Legend>Category</Legend>
                </div>
                <div>
                  <TextField name='Productname' control={control} />
                </div>
              </div>
            </div>
          </div>
          <br/>
          <Divider/>
          <br/>
          <div style={{display:"grid",gridTemplateColumns:"46.5% 40%",padding:"0  20px"}}>
          <div style={{ display: 'flex'}}>
                  <Controller
                    name='Managestock'
                    control={control}
                    render={({ field }) => (
                      <Checkbox
                        style={{ marginTop: '-10px' }}
                        id='Managestock'
                        {...field}
                        inputProps={{ 'aria-label': 'controlled' }}
                      />
                    )}
                  />
                  Sales Information &nbsp;
          </div>
          <div style={{ display: 'flex'}}>
                  <Controller
                    name='Managestock'
                    control={control}
                    render={({ field }) => (
                      <Checkbox
                        style={{ marginTop: '-10px' }}
                        id='Managestock'
                        {...field}
                        inputProps={{ 'aria-label': 'controlled' }}
                      />
                    )}
                  />
                  Purchase Information &nbsp;
          </div>
          </div>
        
          <br/>
          <div className='row'>
            <div className='row_main'>
      
              <div className='Col'>
                <div className='Col_main'>
                  <Legend>Name</Legend>
                </div>
                <div>
                  <TextField name='Productname' control={control} />
                </div>
              </div>
              <br />
              <div className='Col'>
                <div className='Col_main'>
                  <Legend>SKU</Legend>
                  <Tooltip title='Add' placement='right' arrow>
                    <Help style={Tooltips} />
                  </Tooltip>
                </div>
                <div>
                  <TextField name='Productname' control={control} />
                </div>
              </div>
            </div>
            <div className='Col_flex'>
              <div className='Col'>
                
                <div className='Col_main'>
                  <Legend
                    required={Boolean(Type !== 'Service' && Type !== undefined)}
                  >
                    Unit
                  </Legend>
                  <Tooltip title='Add' placement='right' arrow>
                    <Help style={Tooltips} />
                  </Tooltip>
                </div>
                <div>
                  <TextField name='Productname' control={control} />
                </div>
                <br />

              </div>
              <br />

              <div className='Col'>
                <div className='Col_main'>
                  <Legend>Category</Legend>
                </div>
                <div>
                  <TextField name='Productname' control={control} />
                </div>
              </div>
            </div>
          </div>
        </div>
        <Grid item xs={12} style={{ marginTop: 10 }}>
          <Stack direction='row' justifyContent='center' spacing={4}>
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
              id='close'
              onClick={() => navigate('/catalog/products')}
              style={{ backgroundColor: '#FAEAEB', color: 'red' }}
            >
              Close
            </Button>
          </Stack>
          {failure && (
            <Snackbar open={Open}>
              <Alert severity='error'>{failure}</Alert>
            </Snackbar>
          )}
          {success && (
            <Snackbar open={Open}>
              <Alert severity='success'>{success}</Alert>
            </Snackbar>
          )}
        </Grid>
      </form>
    </div>
  );
}
