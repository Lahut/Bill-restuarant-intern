import React from 'react'
import Grid from '@material-ui/core/Grid';
import classes from './Menu.module.css';
import { Link, useLocation } from 'react-router-dom';
//Redux
import PropTypes from 'prop-types';
const Menu = (props) => {
    
    let data = useLocation();
    const allmenu = data.state.allmenu;
    console.log(allmenu)
    
    return (
        <div>
            <Grid container spacing={3}>
            {
                allmenu.map((menu) => {
                    return (
                        <Grid key={menu.id} item xs={12} sm={6}>
                            <div className={classes.imageMenu}>
                                <img src={menu.pic}/>
                                
                            </div>
                            <h1>{`${menu.name}(${menu.price})`}</h1>
                        </Grid>
                    )
                })
            }
            </Grid>
        </div>
    )
}

Menu.propTypes = {
    allmenu: PropTypes.array.isRequired

}

export default Menu
