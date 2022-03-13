import newPhoto from '../images/log3.jpeg'

function MainPic() {
    return(
        <section>
        <img src={newPhoto} className="mainImage"   alt="mainImage"  />
        <div className="text-div">
        <h1 className="image-header" >Online Experience</h1>
        <h4 className="image-text" >Join unique interactive activities led by one-of-a-kind host-all without leaving home.</h4>
        </div>
       
        </section>
    )
}

export default MainPic;