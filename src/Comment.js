import React from 'react'

function handleclick(e) {
  let x = document.getElementById("comment1")
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }

}
const Comment = () => {

  return (

    <a className="article-link" onClick={handleclick}>
      <i className="fa fa-comments-o"></i>
      <button className="article-link-text">Comments</button>
    </a>
  );
}

export default Comment