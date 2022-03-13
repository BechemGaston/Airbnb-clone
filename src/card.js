
function Card(props){
    return(
        <div>
        <img src={props.photo} alt="pic" />
            <h1>{props.text}</h1>
            <h2>{props.review.rating}</h2>
            <h2>{props.review.rateCount}</h2>
            <h2>{props.country}</h2>
            <h2>{props.price}</h2>
        </div>
    )
}

export default Card;