import "./testimonials.scss"

export default function Testimonials() {
  return (
    <div className="testimonials" id="testimonials">
      <h1>Testimonials</h1>
      <div className="container">
      <div className="card">
        <div className="top">
          <img src="assets/arrow.png" className="left" alt="" />
          <img src="assets/victor.png" className="userPicture" alt="" />
          <img src="assets/linkedin.png" className="socialMedia" alt="" />
        </div>
        <div className="center">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Eveniet vel magni maxime provident cum.
            Quo similique eius beatae, consectetur iure in maxime doloremque nulla,
            ipsum dolorum mollitia omnis, quidem possimus?</p>
        </div>
        <div className="bottom">
          <h3>Victor Villemin</h3>
          <h3>CEO of Art Gallery</h3>
        </div>
      </div>
      </div>
    </div>
  )
}
