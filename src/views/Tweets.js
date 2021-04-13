import React, { useState, useEffect } from "react";
import axios from "axios";
import {getTweets} from "../action/tweets";
import {useParams} from "react-router-dom"

const Article = () => {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [isFetching, setIsFetching] = useState(false);
  const params=useParams()
  const [maxId,setMaxId]=useState(1381326182155714600)

  const loadData = () =>{
      
    
    getTweets(maxId,params.name).then(res => {
      setData(res);
      setMaxId(res[res?.length-1]?.id)
    });
  }
  const moreData = () => {
   
    getTweets(maxId,params.name).then(res => {
      setData([...data, ...res]);
      setPage(page+1)
      setIsFetching(false)
      setMaxId(res[res?.length-1]?.id)
    });
  }
  const isScrolling =()=>{
    if(window.innerHeight + document.documentElement.scrollTop!==document.documentElement.offsetHeight){
      return;
    }
    setIsFetching(true)
  }
  
  useEffect(()=>{
    loadData()
    window.addEventListener("scroll", isScrolling);
    return () => window.removeEventListener("scroll", isScrolling);
  }, [params.name])

  useEffect(() => {
    if (isFetching){
      moreData();
    }
  }, [isFetching]);

  if (data?.length==0) {
    return <h1>Loading...</h1>;
  }

  return (
    <div className="tweet-container">
      <ul className="list-group-ul">
        {data?.map((article, key) => (
          <li className="list-group-li" key={key}>
           <div className="tweet">
               {article.full_text}
           </div>
           
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Article;