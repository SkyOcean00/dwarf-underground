import React, { Component }  from 'react'
import Avatar from './Avatar'
import Section from './Section'
import Aside from './Aside'
import Comment from './Comment'
import Share from './Share'
import Otherarticle from './Otherarticle'
import CommentArea from './CommentArea'


const toggleStyle = { display: 'none' };

class Main extends Component  {
  constructor(){
    super()
    this.state = {
      comments: [],
    }
  }


  handleSubmit = (e)=> {
    e.preventDefault()
    this.addComment(document.querySelector('.inputfield').value)
    // return (document.querySelector('.inputfield').value
    //   <p innerHTML={Allcomment} />
    // )
  }

  addComment = (comment) => {
    
    const comss = [...this.state.comments]
    comss.push(comment)
    this.setState({comments: comss} )
    // debugger;
  }

  render(){
    return (
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
            onSubmit={this.handleSubmit}
          >
            <input type="text" className="inputfield" />
            <br />
            <input type="submit" className="article-link buttontext"
              value="submit comment" />
          </form>

          <CommentArea id="com1" 
            style={toggleStyle} 
            comments={this.state.comments} />

         
        </div>
      </div>

      <Aside />

      <Otherarticle />

    </main>
  );
}
}


export default Main