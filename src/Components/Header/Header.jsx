import React from 'react'
import classes from './Header.module.css';
import { NavLink } from 'react-router-dom';

export const Header = () => {
    return (
        <div className='header'>
          <div className={classes.menu}>  
             <img  className={classes.logo} alt='картинка' src='https://www.nicepng.com/png/detail/66-667889_newbalance-comments-new-balance-shoe-icon.png'/>
              <ul className={classes.navlist}>      
                <li><NavLink to='/newproducts' activeClassName={classes.navlink}>Новинки</NavLink></li>
                <li><NavLink to='/brands'  activeClassName={classes.navlink}>Бренды</NavLink></li>
                <li><NavLink to='/mens'  activeClassName={classes.navlink}>Мужское</NavLink></li>
                <li><NavLink to='/womens'  activeClassName={classes.navlink}>Женское</NavLink></li>
                <li><NavLink to='/accessories'  activeClassName={classes.navlink}>Аксессуары</NavLink></li>
                </ul>
            </div>
            
        </div>)
}

