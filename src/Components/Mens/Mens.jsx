import React from 'react'
import classes from './Mens.module.css'
import { NavLink } from 'react-router-dom'
import { ItemCard } from './ItemCard/ItemCard'


const Mens = (props) => {

    let mensData = [
        { id: 1, title: 'New Balance', subtitle: 'Кроссовки New Balance', img: 'https://superstep.ru/upload/resize_cache/iblock/f2d/y82r5rgjbazfz1bm3v2d0dnidw3q96gd/2160_2160_1/NBU9060ERA.webp' },
        { id: 2, title: 'Nike', subtitle: 'Кроссовки Nike', img: 'https://superstep.ru/upload/resize_cache/iblock/11d/skmajh3dxqqmq8wingkjqen7p6xo6fxk/2160_2160_1/NKDV0833111.webp' },
        { id: 3, title: 'Adidas', subtitle: 'Кроссовки Adidas', img: 'https://superstep.ru/upload/resize_cache/iblock/7ef/utdap6y4n10hz7weemw7d9k8ejelupfc/2160_2160_1/ADB75806R00.webp' }
    ]

    let mensElements = [
        <NavLink to={"/Mens/" + mensData[0].id}><ItemCard title={mensData[0].title} subtitle={mensData[0].subtitle} img={mensData[0].img} id={mensData[0].id} /></NavLink>,
        <NavLink to={"/Mens/" + mensData[1].id}><ItemCard title={mensData[1].title} subtitle={mensData[1].subtitle} img={mensData[1].img} id={mensData[1].id} /></NavLink>,
        <NavLink to={"/Mens/" + mensData[2].id}><ItemCard title={mensData[2].title} subtitle={mensData[2].subtitle} img={mensData[2].img} id={mensData[2].id} /></NavLink>

    ]


    return (
        <div className={classes.mens}>
            <ul className={classes.products}>
                {mensElements}
            </ul>
        </div>
    )
}

export default Mens;




/* <NavLink to="/Mens/1"><ItemCard img="https://superstep.ru/upload/resize_cache/iblock/f2d/y82r5rgjbazfz1bm3v2d0dnidw3q96gd/2160_2160_1/NBU9060ERA.webp" title="New Balance" subtitle="Кроссовки New Balance" /></NavLink> 

              <NavLink to={"/Mens/" + mensData[0].id}><ItemCard title={mensData[0].title} subtitle={mensData[0].subtitle} img={mensData[0].img} id={mensData[0].id} /></NavLink> 
              <NavLink to={"/Mens/" + mensData[1].id}><ItemCard title={mensData[1].title} subtitle={mensData[1].subtitle} img={mensData[1].img} id={mensData[1].id}/></NavLink> 
              <NavLink to={"/Mens/" + mensData[2].id}><ItemCard title={mensData[2].title} subtitle={mensData[2].subtitle} img={mensData[2].img} id={mensData[2].id} /></NavLink> 



*/