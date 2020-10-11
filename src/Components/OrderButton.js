
import React, { useState } from 'react'
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
//Redux
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const OrderButton = ({Order}) => {

    return (
        <Grid item xs ={12}>
            <Button 
                style={{marginTop:'-100px',fontSize:'20px'}} 
                variant="contained" 
                color="secondary">ORDER({Order.OrderCount})
            </Button>
        </Grid>
    )
}

OrderButton.propTypes = {
    Order: PropTypes.object.isRequired,
}

const mapStateToProps = (state) => ({
    Order: state.Order
})

export default connect(mapStateToProps)(OrderButton)
