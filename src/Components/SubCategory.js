import React from 'react'
import classes from './cateGorys.module.css';
import Grid from '@material-ui/core/Grid';
const SubCategory = (props) => {
    return (
        <div>
            <Grid item  xs={6} >
                <div className={classes.categoyList}>
                    <div className={classes.category}>
                        <h>Hi</h>
                    </div>
                </div>     
            </Grid> 
        </div>
    )
}

export default SubCategory
