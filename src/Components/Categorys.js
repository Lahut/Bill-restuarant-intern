import React, { useState } from 'react'
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Category from './Category';
import classes from './cateGorys.module.css';
//Redux
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
const Categorys = ({FoodCategorys}) => {

    

    

    return (
        <Grid container spacing={3}> 
            {
                FoodCategorys.map( (category,index) => {
                    return <Category 
                                key={index}
                                nameCategory={category.name}
                                thumbnailColor={category.thumbnailColor}/>
                })
            }
        </Grid>
    )
}

Category.propTypes = {
    FoodCategorys : PropTypes.array.isRequired
}

const mapStateToProps = (state) => ({
    FoodCategorys: state.Order.FoodCategorys
})

export default connect(mapStateToProps)(Categorys)
