import React from 'react'
import classes from './Comment.module.css';

const Comment = (props) => {
  return (

    <div className={classes.comment}>
      <img src='https://sneg.top/uploads/posts/2023-06/1687524854_sneg-top-p-logotip-avatarka-krasivo-47.jpg' />
      {props.message}
      <div>
        <span>{props.count}</span>
      </div>
    </div>

  )
}

export default Comment;