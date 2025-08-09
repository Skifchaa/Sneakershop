import React from 'react'
import classes from './Mens.module.css'
import { NavLink } from 'react-router-dom'


const Mens = (props) => {
    return (
        <div className={classes.mens}>
            <ul>
                <li><NavLink to='/mens/1'>sneaker1</NavLink></li>
                <li><NavLink to='/mens/2'>sneaker2</NavLink></li>
                <li><NavLink to='/mens/3'>sneaker3</NavLink></li>
            </ul>
        </div>
    )
}

export default Mens;