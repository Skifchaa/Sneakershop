import React from 'react'
import classes from './Accessories.module.css'
import { AccessoriesCard } from './AccessoriesCard/AccessoriesCard'
import { NavLink } from 'react-router-dom'







const Accessories = (props) => {

let accessoriesData = [
    {id:1, title:'Anta', subtitle:'Рюкзак Anta BAG', img:'https://superstep.ru/upload/resize_cache/iblock/5c4/bftsrk7cds7kxsodubaspafziqzbxm13/2160_2160_1/AN8925181532.webp'},
    {id:2, title:'Lacoste', subtitle:'Кепка CAP LACOSTE', img:'https://superstep.ru/upload/resize_cache/iblock/1a9/v1hwle7krzlxpe2su1n6ge5a8ev94yl2/2160_2160_1/RK0440166.webp'},
    {id:3, title:'Anta', subtitle:'Шапка Anta CAMPUS Beanie', img:'https://superstep.ru/upload/resize_cache/iblock/810/ut3eesnwnr3f1y692ocfq8hd1m53ug3r/2160_2160_1/AN8924485333.webp'}
]


let accessoriesElements = accessoriesData.map(accessories => <NavLink to={"/accessories/"+accessories.id}><AccessoriesCard title={accessories.title} subtitle={accessories.subtitle} img={accessories.img} /></NavLink>);



    return (
       <div className={classes.mens}>
            <ul className={classes.products}>
                {accessoriesElements}
            </ul>
        </div>
    )
}

export default Accessories;