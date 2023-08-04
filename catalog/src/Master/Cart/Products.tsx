import React, { useState, useRef } from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import Clear from '@mui/icons-material/DoNotDisturbAlt';
import Hold from '@mui/icons-material/PanToolOutlined';
import Price from '@mui/icons-material/MonetizationOnOutlined';
import Delivery from '@mui/icons-material/DeliveryDiningOutlined';
import Billing from './Billing';
import Divider from '@material-ui/core/Divider';
import ReactSearchBox from "react-search-box";
import {
  Button,
  Grid,
  IconButton,
  Stack,
  TextField,
  Typography,
} from '@mui/material';
const itemData = [
  {
    img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
    title: 'Breakfast',
    author: '@bkristastucchio',
  },
  {
    img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
    title: 'Burger',
    author: '@rollelflex_graphy726',
  },
  {
    img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
    title: 'Camera',
    author: '@helloimnik',
  },
  {
    img: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
    title: 'Coffee',
    author: '@nolanissac',
  },
  {
    img: 'https://images.unsplash.com/photo-1533827432537-70133748f5c8',
    title: 'Hats',
    author: '@hjrc33',
  },
  {
    img: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62',
    title: 'Honey',
    author: '@arwinneil',
  },
  {
    img: 'https://images.unsplash.com/photo-1516802273409-68526ee1bdd6',
    title: 'Basketball',
    author: '@tjdragotta',
  },
  {
    img: 'https://images.unsplash.com/photo-1518756131217-31eb79b20e8f',
    title: 'Fern',
    author: '@katie_wasserman',
  },
  {
    img: 'https://images.unsplash.com/photo-1597645587822-e99fa5d45d25',
    title: 'Mushrooms',
    author: '@silverdalex',
  },
  {
    img: 'https://images.unsplash.com/photo-1567306301408-9b74779a11af',
    title: 'Tomato basil',
    author: '@shelleypauls',
  },
  {
    img: 'https://images.unsplash.com/photo-1471357674240-e1a485acb3e1',
    title: 'Sea star',
    author: '@peterlaster',
  },
  {
    img: 'https://images.unsplash.com/photo-1589118949245-7d38baf380d6',
    title: 'Bike',
    author: '@southside_customs',
  },
];

export default function Products() {
  const [Data, setData] = useState<any[]>([]);
  const data = (e: any) => {
    const updatedData = [...Data, e];
    setData(updatedData);
  };
  return (
    <>
      <div style={{ display: 'flex', gap: '15px',height:"97.9vh" }}>
        <div>
          <div>
            <TextField label='Search' />
            &nbsp; &nbsp;
            <TextField label='Customer' />
          </div>
          <ImageList sx={{ width: 1000, height: 550 }} cols={5} gap={21}>
            {itemData.map(item => (
              <ImageListItem key={item.img}>
                <img
                  onClick={() => data(item)}
                  src={`${item.img}?w=248&fit=crop&auto=format`}
                  srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                  alt={item.title}
                  style={{
                    cursor: 'pointer',
                    borderRadius: '15px',
                    display: 'flex',
                  }}
                  loading='lazy'
                />
                <ImageListItemBar
                  style={{ textAlign: 'center', borderRadius: '10px' }}
                  title={item.title}
                />
              </ImageListItem>
            ))}
          </ImageList>
          <Grid
            container
            rowSpacing={5}
            columnSpacing={{ xs: 1, sm: 2, md: 3 }}
            style={{ padding: '0px 30px' }}
          >
            <Grid item xs={3}>
              <Button
                variant='contained'
                startIcon={<Clear />}
                style={{ background: '#d3d3d3', color: 'black', width: '100%' }}
                onClick={() => setData([])}
              >
                Clear Cart
              </Button>
            </Grid>
            <Grid item xs={3}>
              <Button
                variant='contained'
                startIcon={<Hold />}
                style={{ background: '#d3d3d3', color: 'black', width: '100%' }}
              >
                Hold Bill
              </Button>
            </Grid>
            <Grid item xs={3}>
              <Button
                variant='contained'
                startIcon={<Price />}
                style={{ background: '#d3d3d3', color: 'black', width: '100%' }}
              >
                Price List
              </Button>
            </Grid>
            <Grid item xs={3}>
              <Button
                variant='contained'
                startIcon={<Delivery />}
                style={{ background: '#d3d3d3', color: 'black', width: '100%' }}
              >
                Delivery Options
              </Button>

            </Grid>
          </Grid>
        </div>
        <Divider orientation="vertical" style={{width:"5px"}} flexItem />
                <Billing data={Data} />
      </div>
    </>
  );
}
