import React from 'react'
import classes from './NewProducts.module.css';
import Comment from './Comments/Comment';
import { ProductItem } from './Products/Product';

export const NewProducts = (props) => {
  
  let newProductsData = [
    {img:'https://superstep.ru/upload/resize_cache/iblock/9d3/iq70235n21xg7qja88zfj41ncwibmwhm/2160_2160_1/NKHJ4497400.webp'},
    {img:'https://superstep.ru/upload/resize_cache/iblock/e73/kl7lkrah49y0iolkkqmeztrqnbmda0y8/2160_2160_1/AN8125177194.webp'},
    {img:'https://superstep.ru/upload/resize_cache/iblock/d29/j4w2uddggv3xmjb32v26mqy0f4swya2h/2160_2160_1/NBU1906RCB.webp'},
    {img:'https://superstep.ru/upload/resize_cache/iblock/ec2/41fx71o654q98vfilmt0ks4aech705ce/2160_2160_1/NBU9060AAB.webp'},
    {img:'https://superstep.ru/upload/resize_cache/iblock/9a7/w219j30k5eoyp31303q4u8j8ocfbi5h4/2160_2160_1/NKHQ3818001.webp'},
    {img:'https://superstep.ru/upload/resize_cache/iblock/31d/cqglmf8wdf96n54i1sa2timget976xzz/2160_2160_1/AS1201A789750.webp'},
    {img:'https://superstep.ru/upload/resize_cache/iblock/386/gqlj2kiwr4328ng09uk93oeb1kbioueu/2160_2160_1/PTSTE06642.webp'},
    {img:'https://superstep.ru/upload/resize_cache/iblock/c98/nt6llh0jhf3qa60nqwj046ll6uk1a1ru/2160_2160_1/NBU9060BLK.webp'},
    {img:'https://superstep.ru/upload/resize_cache/iblock/035/fbyk827z386kq8ohes4au0scdi3ohq5t/2160_2160_1/PM40174404.webp'}

  ]
  
  let commentData = [
    {message:'Суперски', likesCount:'10' },
    {message:'Здоровски', likesCount:'15' },
    {message:'Топчик', likesCount:'20'}

  ]
  
 
  let newProductsElements = newProductsData.map(Product => <ProductItem img={Product.img} /> ) ;
 
  let commentElements = commentData.map(comment => <Comment message={comment.message} likesCount={comment.likesCount} /> ) ;
  
  
  return (
    <div>
      <section className='content'>
        <ul className={classes.snkrslist}>
         {newProductsElements}
        </ul>
      </section>
      <div>
        <textarea></textarea>
        <button>Add comment</button>
        <button>Remove</button>
      </div>
      <div className={classes.comment}>
        {commentElements}
      </div>



    </div>
  )
}



/* <li className={classes.snkr}><img className={classes.shoes} src='https://superstep.ru/upload/resize_cache/iblock/9d3/iq70235n21xg7qja88zfj41ncwibmwhm/2160_2160_1/NKHJ4497400.webp'></img></li>
<li className={classes.snkr}><img className={classes.shoes} src='https://superstep.ru/upload/resize_cache/iblock/e73/kl7lkrah49y0iolkkqmeztrqnbmda0y8/2160_2160_1/AN8125177194.webp'></img></li>
          <li className={classes.snkr}><img className={classes.shoes} src='https://superstep.ru/upload/resize_cache/iblock/d29/j4w2uddggv3xmjb32v26mqy0f4swya2h/2160_2160_1/NBU1906RCB.webp'></img></li>
          <li className={classes.snkr}><img className={classes.shoes} src='https://superstep.ru/upload/resize_cache/iblock/ec2/41fx71o654q98vfilmt0ks4aech705ce/2160_2160_1/NBU9060AAB.webp'></img></li>
          <li className={classes.snkr}><img className={classes.shoes} src='https://superstep.ru/upload/resize_cache/iblock/9a7/w219j30k5eoyp31303q4u8j8ocfbi5h4/2160_2160_1/NKHQ3818001.webp'></img></li>
          <li className={classes.snkr}><img className={classes.shoes} src='https://superstep.ru/upload/resize_cache/iblock/31d/cqglmf8wdf96n54i1sa2timget976xzz/2160_2160_1/AS1201A789750.webp'></img></li>
          <li className={classes.snkr}><img className={classes.shoes} src='https://superstep.ru/upload/resize_cache/iblock/386/gqlj2kiwr4328ng09uk93oeb1kbioueu/2160_2160_1/PTSTE06642.webp'></img></li>
          <li className={classes.snkr}><img className={classes.shoes} src='https://superstep.ru/upload/resize_cache/iblock/c98/nt6llh0jhf3qa60nqwj046ll6uk1a1ru/2160_2160_1/NBU9060BLK.webp'></img></li>
          <li className={classes.snkr}><img className={classes.shoes} src='https://superstep.ru/upload/resize_cache/iblock/035/fbyk827z386kq8ohes4au0scdi3ohq5t/2160_2160_1/PM40174404.webp'></img></li> 

        <Comment message={commentData[0].message} likesCount={commentData[0].likesCount} />
        <Comment message={commentData[1].message} likesCount={commentData[1].likesCount} />
        <Comment message={commentData[2].message} likesCount={commentData[2].likesCount} />


          <ProductItem img={newProductsData[0].img} />
          <ProductItem img={newProductsData[1].img} />
          <ProductItem img={newProductsData[2].img} />
          <ProductItem img={newProductsData[3].img}/>
          <ProductItem img={newProductsData[4].img} />
          <ProductItem img={newProductsData[5].img} />
          <ProductItem img={newProductsData[6].img} />
          <ProductItem img={newProductsData[7].img} />
          <ProductItem img={newProductsData[8].img} />






*/