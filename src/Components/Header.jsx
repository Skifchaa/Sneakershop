import React from 'react'

const Header = () => {
    return (
        <div className='header'>
          <div className='menu'>  
             <img  className='logo' src='https://www.nicepng.com/png/detail/66-667889_newbalance-comments-new-balance-shoe-icon.png'></img>
              <ul className='nav-list'>      
                <li><a className='nav-link'>Новинки</a></li>
                <li><a className='nav-link'>Бренды</a></li>
                <li><a className='nav-link'>Мужское</a></li>
                <li><a className='nav-link'>Женское</a></li>
                <li><a className='nav-link'>Аксессуары</a></li>
                </ul>
            </div>
            
        </div>)
}

export default Header;