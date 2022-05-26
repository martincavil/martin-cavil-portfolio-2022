import "./testimonials.scss"

export default function Testimonials() {

  const data = [
    {
      id: "1",
      name: "Victor Villemin",
      title: "CEO of Art Gallery",
      img: "https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870",
      icon: "assets/linkedin.png",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem voluptatum id natus ad necessitatibus, cum omnis aliquid sint culpa qui voluptates ipsum eius tenetur adipisci non rerum sunt exercitationem nisi!"
    },
    {
      id: "2",
      name: "@JohnDoe",
      title: "CEO of JD Corps.",
      img: "https://images.unsplash.com/photo-1583136809091-ba7c0e8c6f75?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870",
      icon: "assets/twitter.png",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem voluptatum id natus ad necessitatibus, cum omnis aliquid sint culpa qui voluptates ipsum eius tenetur adipisci non rerum sunt exercitationem nisi!",
      featured: true
    },
    {
      id: "3",
      name: "Emma P.",
      title: "UI Designer",
      img: "https://images.unsplash.com/photo-1542981533-e288c4fda66d?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=874",
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
