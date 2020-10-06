import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import GridList from '@material-ui/core/GridList';
import classes from './cateGorys.module.css';
import { Redirect } from 'react-router-dom';
import { Link } from 'react-router-dom';
const Category = ({nameCategory,subCategory,thumbnailColor}) => {


   
    





    return (
            <Grid item style={{backgroundColor: `${thumbnailColor}` }} xs={6} >
                <div className={classes.categoyList}>
                    <div     className={classes.categoy}>
                        <Link
                            style={{textDecoration:'none'}} 
                            to={
                            {
                                pathname: `/subcategory/${nameCategory}`
                            }
                        }><h1>{nameCategory}</h1></Link>
                    </div>  
                </div>     
            </Grid> 
    )
}

export default Category
