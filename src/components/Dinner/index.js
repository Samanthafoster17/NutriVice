import React from "react";

const Dinner = ({title, calories, image, url}) => {
    return(
        <>

<div className="card" style={{width: "18rem"}}>
  <img src={image} className="card-img-top" alt={title} />
  <div className="card-body">
    <h5 className="card-title">{title}</h5>
    <p className="card-text">Calories: {calories}</p>
    <a href={url} className="btn btn-primary">View Recipe</a>
  </div>
</div>
        </>
    )
}

export default Dinner;