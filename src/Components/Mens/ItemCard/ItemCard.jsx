import React from 'react'
import classes from './ItemCard.module.css'


 export const ItemCard = (props) => {
    return (
        <li className={classes.product}>
            <img src={props.img} alt="кроссовок" />
            <h1>{props.title}</h1>
            <p>{props.subtitle}</p>
        </li>
    )
}

