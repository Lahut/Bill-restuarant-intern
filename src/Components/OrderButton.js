
import React, { useState } from 'react'
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
const OrderButton = () => {

    const [OrderCount,setOrderCount] = useState(0)
    return (
        <Grid item xs ={12}>
            <Button style={{marginTop:'-100px',fontSize:'20px'}} variant="contained" color="secondary">ORDER({OrderCount})</Button>
        </Grid>
    )
}

export default OrderButton
