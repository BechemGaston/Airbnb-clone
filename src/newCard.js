
function NewCard(props){
    return(
        <div className="card">
          <img src={props.pic} className="card-image" alt="pic" />
              <div className="card-stats" >
                    <i class="fa-solid fa-star icons"></i>
                    <span className="rating" >{props.rating}</span>
                    <span className="rating" >({props.review})</span>
                    <span className="rating" > .{props.location}</span>
             </div>
             <div className="title-div" >
                  <p className="card-title" >{props.title}</p>
                  <p><span className="amt" >$ {props.price}</span> / person</p>
             </div>
        </div>
    )
}

export default NewCard;