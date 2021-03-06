import React from 'react'
import Links from './Links'

const Article1 =() =>{
    
   
   const articles = [
    {   src:"https://www.enclavepublishing.com/wp-content/uploads/2015/11/tumblr_inline_mtvwr6T4qH1r8eb4v.gif",
        alt:"orc",
        href:"#",
        p:"Single Orcs in Indianapolis"},
    {   src:"https://images.fineartamerica.com/images-medium-large-5/rocky-mountain-landscape-meadow-in-spring-western-panorama-with-wildflowers-square-format-walt-curlee.jpg",
         alt:"mountain",
         href:"#",
        p:"You won't believe what's under this mountain"
    },
    {   src:"http://orig01.deviantart.net/a278/f/2010/357/9/7/seamless___gold_coins_by_bartalon-d35iydr.jpg",
        alt:"gold",
        href:"#",
        p:"Mine 20% more gold with One Weird Trick"
    },
    {   src:"http://cdn23.us1.fansshare.com/photos/thehobbit/the-hobbit-square-characters-833282558.jpg",
        alt:"hobbit",
        href:"#",
        p:"Surprise for Indiana Hobbits born before 1999"}
   ]
   
   
   return(
       <div>
            {articles.map(article =><Links article={article} key={article.id} />)}
      </div>
    );
}

export default Article1