import React from 'react'
import classes from './Header.module.css';

export const Header = () => {
    return (
        <div className='header'>
          <div className={classes.menu}>  
             <img  className={classes.logo} alt='картинка' src='https://www.nicepng.com/png/detail/66-667889_newbalance-comments-new-balance-shoe-icon.png'/>
              <ul className={classes.navlist}>      
                <li><a href='/newproducts' className={classes.navlink}>Новинки</a></li>
                <li><a href='/brands' className={classes.navlink}>Бренды</a></li>
                <li><a href='/mens' className={classes.navlink}>Мужское</a></li>
                <li><a href='/womens' className={classes.navlink}>Женское</a></li>
                <li><a href='/accessories' className={classes.navlink}>Аксессуары</a></li>
                </ul>
            </div>
            
        </div>)
}

