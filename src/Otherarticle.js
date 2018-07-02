import React from 'react'
import Article1 from './Article1'
import Article2 from './Article2'
import Article3 from './Article3'
import Article4 from './Article4'

const Otherarticle =() =>{
    return(
        <div className="small-12 columns other-articles">
            <h2>From around the Realm</h2>
            <Article1 />

            <Article2 />
           
            <Article3 />

            <Article4 /> 
            
        </div>
    );
}

export default Otherarticle