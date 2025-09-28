import React from 'react'
import classes from './Accessories.module.css'
import { AccessoriesCard } from './AccessoriesCard/AccessoriesCard'
import { NavLink } from 'react-router-dom'







const Accessories = (props) => {




let accessoriesElements = props.state.accessoriesData.map(accessories => <NavLink to={"/accessories/"+accessories.id}><AccessoriesCard title={accessories.title} subtitle={accessories.subtitle} img={accessories.img} /></NavLink>);



    return (
       <div className={classes.mens}>
            <ul className={classes.products}>
                {accessoriesElements}
            </ul>
        </div>
    )
}

export default Accessories;