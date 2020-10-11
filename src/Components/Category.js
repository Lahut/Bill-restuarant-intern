import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import GridList from '@material-ui/core/GridList';
import classes from './cateGorys.module.css';
import { Redirect } from 'react-router-dom';
import { Link } from 'react-router-dom';
const Category = ({nameCategory,thumbnailColor}) => {

    return (
        
            <Grid item style={{backgroundColor: `${thumbnailColor}` }} item xs={12} sm={6} >
                        <Link
                            style={{textDecoration:'none',color:'black',textTransform:'uppercase'}} 
                            to={
                            {
                                pathname: `/subcategory/${nameCategory}`
                            }
                        }><h1>{nameCategory}</h1></Link>
            </Grid>
        
    )
}

export default Category
