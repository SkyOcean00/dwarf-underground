import React from 'react'
import Avatar from './Avatar'
import Section from './Section'
import Aside from './Aside'
import Comment from './Comment'
import Share from './Share'
import Otherarticle from './Otherarticle'

const Main =() =>{
  let toggleStyle={display: 'none'};
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
              <form id="comment1" style={toggleStyle}>
                <input type="text" className="inputfield"   />
                <br />
                <button type="submit" className="article-link buttontext">submit comment</button>
              </form>
            </div>
          </div>
          
          <Aside />
          
          <Otherarticle />

        </main>
    );
}


export default Main