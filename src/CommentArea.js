import React from 'react'



const CommentArea = (props) => {
  return (
    <ul >
      {props.comments.map(msg => (
        <li>{msg}</li>
      ))}
    </ul>
  )
}

export default CommentArea