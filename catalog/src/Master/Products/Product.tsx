import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import SearchIcon from '@material-ui/icons/Search';
import CreateIcon from '@mui/icons-material/Create';
import DeleteIcon from '@mui/icons-material/Delete';
import { IconButton, Breadcrumbs,} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import Table from '../../Components/Table/Table';
const Product = (): any => {
  const navigate = useNavigate();
  const columns = [
    {
      field: 'productimage',
      headerName: 'Image',
      headerClassName: 'super-app-theme--header',
      filterable: true,
      sortable: true,
    },
    {
      field: 'Productname',
      headerName: 'Product',
      headerClassName: 'super-app-theme--header',
      filterable: true,
      sortable: true,
      width: 150,
    },
    {
      field: 'Brand',
      headerName: 'Product Type',
      headerClassName: 'super-app-theme--header',
      filterable: true,
      sortable: true,
      width: 150,
    },
    {
      field: 'Category',
      headerName: 'Category',
      headerClassName: 'super-app-theme--header',
      filterable: true,
      sortable: true,
      width: 150,
    },
    {
      field: 'SubCategory',
      headerName: 'Sub Category',
      headerClassName: 'super-app-theme--header',
      filterable: true,
      sortable: true,
    },
    {
      field: 'Unit',
      headerName: 'Unit',
      headerClassName: 'super-app-theme--header',
      filterable: true,
      sortable: true,
      width: 150,
    },
    {
      field: 'Brand',
      headerName: 'Brand',
      headerClassName: 'super-app-theme--header',
      filterable: true,
      sortable: true,
      width: 150,
    },
    {
      field: 'Tax',
      headerName: 'Tax',
      headerClassName: 'super-app-theme--header',
      filterable: true,
      sortable: true,
    },

    {
      field: 'SKU',
      headerName: 'SKU',
      headerClassName: 'super-app-theme--header',
      filterable: true,
      sortable: true,
      width: 150,
    },
    {
      field: 'POM',
      headerName: 'POM',
      headerClassName: 'super-app-theme--header',
      filterable: true,
      sortable: true,
    },
    {
      field: 'Actions',
      headerName: 'Actions',
      headerClassName: 'super-app-theme--header',
      filterable: true,
      sortable: true,
      width: 110,
      renderCell: (cellValues:any) => {
        return (
          <>
                <IconButton
              color="primary"
              aria-label="add an alarm"
            >
              <CreateIcon  />
            </IconButton>
            <IconButton
              color="primary"
              aria-label="add an alarm"
            >
              <DeleteIcon  />
            </IconButton>
          </>
        );
      },      filter: false,

    },
  ];
  let data1 = [];
  for (let i = 0; i < 100; i++) {
    data1.push({
      id: i,
      Productname: 'Watch' + i,
      Producttype: '',
      category: '',
      SubCategory: '',
      Unit: '',
      Brand: '',
      Tax: '',
      SKU: '',
      POM: '',
    });
  }
  return (
    <div style={{ margin: 30 }}>
      <div style={{ display: 'flex' }}>
      <Breadcrumbs aria-label='breadcrumb'>
          <h2 >Products</h2>
        </Breadcrumbs> 
        <div style={{ marginLeft: 'auto', marginRight: '0' }}>
          <Button
            variant='contained'
            style={{ backgroundColor: '#017AFF' }}
            startIcon={<AddCircleOutlineIcon />}
            onClick={() => navigate('/catalog/products/add')}
          >
            Add Product
          </Button>{' '}
        </div>
      </div>
      <br/>
        <Table
      data={data1}
      columns={columns}
      filename="Products"
      />
    </div>
  );
};

export default Product;
