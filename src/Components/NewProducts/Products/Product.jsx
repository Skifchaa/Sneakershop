import React from 'react'
import classes from'./Product.module.css';

export const ProductItem = (props) => {
  return (
    <li className={classes.snkr}>
      <img className={classes.shoes} src={props.img} alt="кроссовок" />
    </li>
  )
}