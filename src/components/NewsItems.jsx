import React, { useEffect, useState } from 'react'
import News from './News'

export const NewsItems = () => {
  const [news, setNews] = useState([])
  const search = localStorage.getItem('search')

  console.log(news)

  useEffect(() => {
    const url = `https://newsapi.org/v2/everything?q=${search}&apiKey=2ce816d866084f398b733442a0fd7a3e`
    fetch(url).then(response => response.json()).then(data =>
      setNews(data.articles)
    )
  }, [])

  return (
    <div className='style'>
      {news?.map((currentNews) => (
         <News title={currentNews.title} description={currentNews.description}
           url={currentNews.url} image={currentNews.urlToImage} />
       ))} 
    </div>
  )
}

