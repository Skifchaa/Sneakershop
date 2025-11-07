import React from 'react'
import classes from './NewProducts.module.css';
import Comment from './Comments/Comment';
import { ProductItem } from './Products/Product';


export const NewProducts = (props) => {
  

  
 
  let newProductsElements = props.state.newProductsData.map(product => <ProductItem img={product.img} /> ) ;
 
  let commentElements = props.state.commentData.map(comment => <Comment message={comment.message} likesCount={comment.likesCount} /> ) ;
  
  let addComment = () => {
    debugger;
    let text = newCommentElement.current.value;
    props.addComment (text) ;
  }
  
  let newCommentElement = React.createRef();

  return (
    <div>
      <section className='content'>
        <ul className={classes.snkrslist}>
         {newProductsElements}
        </ul>
      </section>
      <div>
        <textarea ref={newCommentElement}></textarea>
        <button onClick={ addComment }>Add comment</button>
        <button>Remove</button>
      </div>
      <div className={classes.comment}>
        {commentElements}
      </div>



    </div>
  )
}



/* 

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