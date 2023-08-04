import React, { useState } from 'react';
import Table from '../../Components/Table/Table';
import InputAdornment from '@material-ui/core/InputAdornment';
import SearchIcon from '@material-ui/icons/Search';
import CreateIcon from '@mui/icons-material/Create';
import DeleteIcon from '@mui/icons-material/Delete';
import { IconButton, Breadcrumbs } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import Pricelistpopup from '../../Pages/Pricelist/AddPricelist';
const Pricelist = () => {
  const navigate = useNavigate();
  const [open1, setOpen1] = useState(false);
  const handleClose4 = () => {
    setOpen1(false);
  };
  const handleOpen = () => {
    setOpen1(true);
  };
  const columns = [
    {
      field: 'name',
      headerName: 'Name and Description',
      headerClassName: 'super-app-theme--header',
      filterable: true,
      sortable: true,
      width: 450,
    },
    {
      field: 'currency',
      headerName: 'Currency',
      headerClassName: 'super-app-theme--header',
      filterable: true,
      sortable: true,
      width: 200,
    },
    {
      field: 'details',
      headerName: 'Details',
      headerClassName: 'super-app-theme--header',
      filterable: true,
      sortable: true,
      width: 250,
    },
    {
      field: 'Pricing',
      headerName: 'Pricing Scheme',
      headerClassName: 'super-app-theme--header',
      filterable: true,
      sortable: true,
      width: 160,
    },
    {
      field: 'round',
      headerName: 'Round off Prefer',
      headerClassName: 'super-app-theme--header',
      filterable: true,
      sortable: true,
      width: 200,
    },

    {
      field: 'Actions',
      headerName: 'Actions',
      headerClassName: 'super-app-theme--header',
      filterable: true,
      sortable: true,
      width: 150,
      renderCell: (cellValues: any) => {
        return (
          <>
            <IconButton color='primary' aria-label='add an alarm'>
              <CreateIcon />
            </IconButton>
            <IconButton color='primary' aria-label='add an alarm'>
              <DeleteIcon />
            </IconButton>
          </>
        );
      },
      filter: false,
    },
  ];
  let data1 = [];
  for (let i = 0; i < 100; i++) {
    data1.push({
      id: i,
      name: 'Curr' + i,
      currency: '',
      details: '',
      Pricing: '',
      round: '',
    });
  }
  return (
    <div style={{ margin: 30 }}>
      <div style={{ display: 'flex' }}>
        <Breadcrumbs aria-label='breadcrumb'>
          <h2>PriceList</h2>
        </Breadcrumbs>
        <div style={{ marginLeft: 'auto', marginRight: '0' }}>
         
          <Button
            variant='contained'
            style={{ backgroundColor: '#017AFF' }}
            startIcon={<AddCircleOutlineIcon />}
            onClick={handleOpen}
          >
            New Price List
          </Button>{' '}
        </div>
      </div>
      <br />
      <Table data={data1} columns={columns}       filename="Pricelist"/>
      <Pricelistpopup open={open1} close={handleClose4} />
    </div>
  );
};

export default Pricelist;
