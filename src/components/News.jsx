import React from 'react'

const News = ({title, description, url, image }) => {
  return (
    <div class="card" style={{width: '20rem'}}>
      <img src={image} class="card-img-top" alt="..." />
        <div class="card-body">
          <h5 class="card-title"> <a href={url} target='_blank'>{title.slice(0, 50)}</a></h5>
          <p class="card-text">{description}</p>
            {/* Some quick example text to build on the card title and make up the bulk of the card's content. */}
          <a href="#" class="btn btn-primary">See More</a>
        </div>
    </div>
  )
}

export default News