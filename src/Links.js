import React from 'react'

const Links = (props) => {
    return (
       <div className="small-6 medium-3 columns other-article">
        <a href={props.article.href}>
        <img src={props.article.src} alt={props.article.alt}  />
        <p>{props.article.p}</p>
        </a>
    </div> 
 )
}

export default Links