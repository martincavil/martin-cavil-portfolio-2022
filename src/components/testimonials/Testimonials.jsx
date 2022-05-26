import "./testimonials.scss"

export default function Testimonials() {

  const data = [
    {
      id: "1",
      name: "Victor Villemin",
      title: "CEO of Art Gallery",
      img: "assets/victor.png",
      icon: "assets/linkedin.png",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem voluptatum id natus ad necessitatibus, cum omnis aliquid sint culpa qui voluptates ipsum eius tenetur adipisci non rerum sunt exercitationem nisi!"
    },
    {
      id: "2",
      name: "Victor Villemin",
      title: "CEO of Art Gallery",
      img: "assets/victor.png",
      icon: "assets/linkedin.png",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem voluptatum id natus ad necessitatibus, cum omnis aliquid sint culpa qui voluptates ipsum eius tenetur adipisci non rerum sunt exercitationem nisi!",
      featured: true
    },
    {
      id: "3",
      name: "Victor Villemin",
      title: "CEO of Art Gallery",
      img: "assets/victor.png",
      icon: "assets/linkedin.png",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem voluptatum id natus ad necessitatibus, cum omnis aliquid sint culpa qui voluptates ipsum eius tenetur adipisci non rerum sunt exercitationem nisi!"
    },
  ]


  return (
    <div className="testimonials" id="testimonials">
      <h1>Testimonials</h1>
      <div className="container">
        {data.map(d=>(
      <div className={d.featured ? "card featured" : "card"}>
        <div className="top">
          <img src="assets/arrow2.png" className="left" alt="" />
          <img src={d.img} className="userPicture" alt="" />
          <img src={d.icon} className="socialMedia" alt="" />
        </div>
        <div className="center">
          <p>{d.desc}</p>
        </div>
        <div className="bottom">
          <h3>{d.name}</h3>
          <h4>{d.title}</h4>
        </div>
      </div>
            ))}
      </div>
    </div>
  )
}
