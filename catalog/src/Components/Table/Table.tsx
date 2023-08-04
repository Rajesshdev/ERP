import React, { useState } from 'react';
import Box from '@mui/material/Box';
import {
    DataGrid,
    gridPageCountSelector,
    gridPageSelector,
    useGridApiContext,
    useGridSelector,
    GridToolbarQuickFilter,
    GridToolbarExport 
  } from '@mui/x-data-grid';
  import Pagination from '@mui/material/Pagination';
  import TextField from '@mui/material/TextField';
  import MenuItem from '@mui/material/MenuItem';

 
  function CustomPagination() {
    const apiRef = useGridApiContext();
    const page = useGridSelector(apiRef, gridPageSelector);
    const pageCount = useGridSelector(apiRef, gridPageCountSelector);
  
    return (
      <Pagination
        color='primary'
        count={pageCount}
        page={page + 1}
        onChange={(event, value) => apiRef.current.setPage(value - 1)}
      />
    );
  }

  const Table=(props:any)=>{
    function QuickSearchToolbar() {
      return (
        <div
        style={{padding:"10px",display:"flex"}}
        >
          <GridToolbarQuickFilter />
          <div style={{ marginLeft: 'auto', marginRight: '30px' }}>
          <GridToolbarExport 
          csvOptions={{
            fileName: props.filename,
            delimiter: ';',
            utf8WithBom: true,
          }}
      
          />
          </div>
        </div>
      );
    }
    const [pageSize, setPageSize] = useState(5);
    return(
        <Box
        sx={{
          height: 530,
          width: '100%',
          backgroundColor: 'white',
          '& .super-app-theme--header': {
            backgroundColor: '#017AFF',
            color: 'white',
            textAlign: 'center',
          },
        }}
      >
        <DataGrid
          rows={props.data}
          columns={props.columns}
          disableSelectionOnClick
          getRowId={row => row.id}
          disableColumnFilter
          disableColumnSelector
          disableDensitySelector
          pageSize={pageSize}
          onPageSizeChange={newPageSize => setPageSize(newPageSize)}
          rowsPerPageOptions={[5, 10, 20]}
          components={{ Pagination: CustomPagination,Toolbar:QuickSearchToolbar}}
          componentsProps={{
            // toolbar: GridToolbar,
            toolbar: {
              showQuickFilter: true,
              quickFilterProps: { debounceMs: 500 },
              
            },
          }}
        />
        <div style={{ marginTop: '-3.2%', marginLeft: '1%' }}>
          <TextField
            size='small'
            sx={{ width: 70 }}
            select
            value={pageSize}
            onChange={(e: any) => setPageSize(e.target.value)}
          >
            <MenuItem value={5}>5</MenuItem>
            <MenuItem value={10}>10</MenuItem>
            <MenuItem value={20}>20</MenuItem>
          </TextField>
        </div>
      </Box>
    )
  }

  export default Table