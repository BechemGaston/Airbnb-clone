// import catImg from '../images/cat1.jfif'

function Contact(props) {
    return(
        <div className="contacts">
            <div className="contact-card">
                <img src={props.img} alt="catImg1" />
                <h3>{props.name}</h3>
                    <div className="info-group">
                        <p><i class="fa-solid fa-phone"></i> {props.phone}</p>
                    </div>
                    <div className="info-group">
                        <p><i class="fa-solid fa-envelope"></i> {props.email}</p>
                    </div>
            </div>
        </div>
    )
}

export default Contact;

