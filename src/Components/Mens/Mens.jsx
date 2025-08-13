import React from 'react'
import classes from './Mens.module.css'
import { NavLink } from 'react-router-dom'
import { ItemCard } from './ItemCard/ItemCard'


const Mens = (props) => {
    return (
        <div className={classes.mens}>
            <ul className={classes.products}>
                <NavLink to="/mens/1"> <ItemCard img="https://superstep.ru/upload/resize_cache/iblock/f2d/y82r5rgjbazfz1bm3v2d0dnidw3q96gd/2160_2160_1/NBU9060ERA.webp" title="New Balance" subtitle="Кроссовки New Balance" /> </NavLink>
                <ItemCard img="https://superstep.ru/upload/resize_cache/iblock/f2d/y82r5rgjbazfz1bm3v2d0dnidw3q96gd/2160_2160_1/NBU9060ERA.webp" title="New Balance" subtitle="Кроссовки New Balance" />
                <ItemCard img="https://superstep.ru/upload/resize_cache/iblock/f2d/y82r5rgjbazfz1bm3v2d0dnidw3q96gd/2160_2160_1/NBU9060ERA.webp" title="New Balance" subtitle="Кроссовки New Balance" />
            </ul>
        </div>
    )
}

export default Mens;




