import { Grid } from '@mui/material'
import React from 'react'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Item from './Item';
import EmptyFavorite from './EmptyFavorite';


function ItemViewer({favoritesList}) {

  return (
    <>
    {favoritesList.length >0 && favoritesList.map((item)=>(
      <Grid key={item.id} item xs={12} sm={6} md={4} lg={3} sx={{p:3}}> 
     <Item item={item} />
   </Grid>
    ))}
    {favoritesList.length ===0 && <EmptyFavorite />}
    </>
  )
}
export default ItemViewer
