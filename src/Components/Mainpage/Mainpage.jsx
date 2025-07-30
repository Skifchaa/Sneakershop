import React from 'react'
import classes from './Mainpage.module.css';
import Comment from './Comments/Comment';

const Mainpage = () => {
  return (
    <div>
      <section className='content'>
        <ul className={classes.snkrslist}>
          <li className={classes.snkr}><img className={classes.shoes} src='https://superstep.ru/upload/resize_cache/iblock/9d3/iq70235n21xg7qja88zfj41ncwibmwhm/2160_2160_1/NKHJ4497400.webp'></img></li>
          <li className={classes.snkr}><img className={classes.shoes} src='https://superstep.ru/upload/resize_cache/iblock/e73/kl7lkrah49y0iolkkqmeztrqnbmda0y8/2160_2160_1/AN8125177194.webp'></img></li>
          <li className={classes.snkr}><img className={classes.shoes} src='https://superstep.ru/upload/resize_cache/iblock/d29/j4w2uddggv3xmjb32v26mqy0f4swya2h/2160_2160_1/NBU1906RCB.webp'></img></li>
          <li className={classes.snkr}><img className={classes.shoes} src='https://superstep.ru/upload/resize_cache/iblock/ec2/41fx71o654q98vfilmt0ks4aech705ce/2160_2160_1/NBU9060AAB.webp'></img></li>
          <li className={classes.snkr}><img className={classes.shoes} src='https://superstep.ru/upload/resize_cache/iblock/9a7/w219j30k5eoyp31303q4u8j8ocfbi5h4/2160_2160_1/NKHQ3818001.webp'></img></li>
          <li className={classes.snkr}><img className={classes.shoes} src='https://superstep.ru/upload/resize_cache/iblock/31d/cqglmf8wdf96n54i1sa2timget976xzz/2160_2160_1/AS1201A789750.webp'></img></li>
          <li className={classes.snkr}><img className={classes.shoes} src='https://superstep.ru/upload/resize_cache/iblock/386/gqlj2kiwr4328ng09uk93oeb1kbioueu/2160_2160_1/PTSTE06642.webp'></img></li>
          <li className={classes.snkr}><img className={classes.shoes} src='https://superstep.ru/upload/resize_cache/iblock/c98/nt6llh0jhf3qa60nqwj046ll6uk1a1ru/2160_2160_1/NBU9060BLK.webp'></img></li>
          <li className={classes.snkr}><img className={classes.shoes} src='https://superstep.ru/upload/resize_cache/iblock/035/fbyk827z386kq8ohes4au0scdi3ohq5t/2160_2160_1/PM40174404.webp'></img></li>
        </ul>
      </section>
      <div>
        <textarea></textarea>
        <button>Add comment</button>
        <button>Remove</button>
      </div>
      <div className={classes.comment}>
        <Comment message='Суперски' count='10'/>
        <Comment message='Здоровски' count='15'/>
        <Comment message='Топчик' count='20'/>
      </div>



    </div>
  )
}

export default Mainpage;