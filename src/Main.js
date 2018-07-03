import React from 'react'
import Avatar from './Avatar'
import Section from './Section'
import Aside from './Aside'
import Comment from './Comment'
import Share from './Share'
import Otherarticle from './Otherarticle'
//import CommentArea from './CommentArea'


const Main =() =>{
  let toggleStyle={display: 'none'};
  
  function handleSubmit(e){
    e.preventDefault()
    e.target.style.display = "block";
    let Allcomment = document.querySelector('.inputfield').value;
   
    return(
      <p innerHTML= {Allcomment} />
    )
  }
    return(
         <main className="expanded row">
          <div className="large-8 medium-12 columns article">
            <h2 className="article-title">Gold Madness - Fact or Fiction?</h2>
            
            <Avatar />
            
            <Section />
            
            <div className="article-links">
              <Comment />
              
              <Share />
              <br />
              <br />
              
              <form id="comment1" 
                style={toggleStyle}
                onSubmit={handleSubmit}
                >
                <input type="text" className="inputfield"   />
                <br />
                <input type="submit" className="article-link buttontext"
                value="submit comment" />
              </form>

              <div id="com1" style={toggleStyle} >
              
                
              </div>
            </div>
          </div>
          
          <Aside />
          
          <Otherarticle />

        </main>
    );
}


export default Main