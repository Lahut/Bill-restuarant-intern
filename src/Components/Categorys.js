import React, { useState } from 'react'
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Category from './Category';
import classes from './cateGorys.module.css';

const Categorys = () => {

    const categorysCollection = [
        {
            name: 'ของคาว',
            thumbnailColor: '#e8505b',
            subCategory: [
                {
                    name: 'คั้วกลิ้ง',
                    menu: [
                        {
                            name : 'คั่วกลิ้งผักสด',
                            price : 180,
                            pic : 'https://i.ibb.co/XpThmVV/101.jpg'
                        },
                        {
                            name : 'คั่วกลิ้งผักสดไก่สับ',
                            price : 180,
                            pic : 'https://i.ibb.co/XYTLn34/104.jpg'
                        }
                    ]
                }
            ]
        },
        {
            name: 'เครื่องดื่ม',
            thumbnailColor: '#f9d56e',
            subCategory: [
                {
                    name: 'ชาและกาแฟ',
                    menu: [
                        {
                            name : 'ชามะนาว',
                            price : 100,
                            pic : 'https://i.ibb.co/fDcBdF3/243.jpg'
                        },
                        {
                            name : 'ชานมเย็น',
                            price : 100,
                            pic : 'https://i.ibb.co/DkVnj68/244.jpg'
                        }
                    ]
                }
            ]
        },
        {
            name: 'ของหวาน',
            thumbnailColor: '#f3ecc2',
            subCategory: [
                {
                    name: 'ของหวาน',
                    menu: [
                        {
                            name : 'เฉาก๊วยน้ำลำไย',
                            price : 80,
                            pic : 'https://i.ibb.co/sqV2T3z/257.jpg'
                        },
                        {
                            name : 'ลูกตาลลอยแก้ว',
                            price : 80,
                            pic : 'https://i.ibb.co/TYxm2Dv/258.jpg'
                        }
                    ]
                }
            ]
        },
        {
            name: 'โปรโมชัน',
            thumbnailColor: '#14b1ab',
            subCategory: [
                {
                    name: 'คั้วกลิ้ง',
                    menu: [
                        {
                            name : 'คั่วกลิ้งผักสด',
                            price : 180,
                            pic : 'https://i.ibb.co/XpThmVV/101.jpg'
                        },
                        {
                            name : 'คั่วกลิ้งผักสดไก่สับ',
                            price : 180,
                            pic : 'https://i.ibb.co/XYTLn34/104.jpg'
                        }
                    ]
                }
            ]
        }
    ]

    

    return (
    <div className={classes.root}>
        <Grid  container spacing={3}>
            
            {
                categorysCollection.map( (category,index) => {
                    return <Category 
                                key={index}
                                nameCategory={category.name}
                                subCategory={category.subCategory}
                                thumbnailColor={category.thumbnailColor}/>
                })
            }
            
        </Grid>
    </div>
    )
}

export default Categorys
