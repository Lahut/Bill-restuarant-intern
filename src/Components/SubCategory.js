import React, { useEffect } from 'react'
import classes from './cateGorys.module.css';
import Grid from '@material-ui/core/Grid';
import { useParams } from 'react-router-dom';
import Menu from './Menu';
import { Link } from 'react-router-dom';
//Redux
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const SubCategory = ({FoodCategorys}) => {
    const { category } = useParams();
    console.log(category)
    let subCategory_ = [];
    let color_ = '';

    
        for(var i=0; i<FoodCategorys.length ;i++){
            if(FoodCategorys[i].name === category){
                subCategory_ = FoodCategorys[i].subCategory;
                color_ = FoodCategorys[i].thumbnailColor;
            }   
        }



    

    
    return (
        
        <Grid  container spacing={3}>
            {
                subCategory_.map( (menu_,index) => {
                    return <Grid key={index} item style={{backgroundColor: `${color_}` }} item xs={12} sm={6} >
                    <div className={classes.categoyList}>
                        <div     className={classes.categoy}>
                            <Link
                                
                                style={{textDecoration:'none',color:'black',textTransform:'uppercase'}} 
                                to={
                                {
                                    pathname: `/subcategory/menu/${menu_.name}`,
                                    state:{
                                        allmenu: menu_.menu
                                    }

                                
                                }
                            }><h1>{menu_.name}</h1></Link>
                        </div>  
                    </div>     
                </Grid> 
                })
            }
        </Grid>
        
    
    )
}

SubCategory.propTypes ={
    FoodCategorys : PropTypes.array.isRequired
}

const mapStateToProps = (state) => ({
    FoodCategorys: state.Order.FoodCategorys
})

export default connect(mapStateToProps)(SubCategory)
