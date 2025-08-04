import React from 'react'
import classes from './Header.module.css';
import { NavLink } from 'react-router-dom';

export const Header = () => {
    return (
        <div className='header'>
          <div className={classes.menu}>  
             <img  className={classes.logo} alt='картинка' src='https://www.nicepng.com/png/detail/66-667889_newbalance-comments-new-balance-shoe-icon.png'/>
              <ul className={classes.navlist}>      
                <li><NavLink to='/newproducts' className={classes.navlink}>Новинки</NavLink></li>
                <li><NavLink to='/brands' className={classes.navlink}>Бренды</NavLink></li>
                <li><NavLink to='/mens' className={classes.navlink}>Мужское</NavLink></li>
                <li><NavLink to='/womens' className={classes.navlink}>Женское</NavLink></li>
                <li><NavLink to='/accessories' className={classes.navlink}>Аксессуары</NavLink></li>
                </ul>
            </div>
            
        </div>)
}

