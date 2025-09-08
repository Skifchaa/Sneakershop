import React from 'react'
import classes from './Header.module.css';
import { NavLink } from 'react-router-dom';

export const Header = () => {
    return (
        <div className='header'>
          <div className={classes.menu}>  
             <img  className={classes.logo} alt='картинка' src='https://www.nicepng.com/png/detail/66-667889_newbalance-comments-new-balance-shoe-icon.png'/>
              <ul className={classes.navlist}>      
                <li><NavLink to='/newproducts' className={({isActive}) => isActive ? classes.activeLink : classes.link}>Новинки</NavLink></li>
                <li><NavLink to='/brands'className={({isActive}) => isActive ? classes.activeLink : classes.link}>Бренды</NavLink></li>
                <li><NavLink to='/mens' className={({isActive}) => isActive ? classes.activeLink : classes.link}>Мужское</NavLink></li>
                <li><NavLink to='/womens'className={({isActive}) => isActive ? classes.activeLink : classes.link}>Женское</NavLink></li>
                <li><NavLink to='/accessories' className={({isActive}) => isActive ? classes.activeLink : classes.link}>Аксессуары</NavLink></li>
                </ul>
            </div>
            
        </div>)
}

