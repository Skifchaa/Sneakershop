import React from 'react'
import classes from './AccessoriesCard.module.css'


 export const AccessoriesCard = (props) => {
    return (
        <li className={classes.product}>
            <img src={props.img} alt="кроссовок" />
            <h1>{props.title}</h1>
            <p>{props.subtitle}</p>
        </li>
    )
}