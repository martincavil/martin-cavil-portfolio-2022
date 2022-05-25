import "./intro.scss"


export default function Intro() {

  return (
    <div className="intro" id="intro">
      <div className="left">
        <div className="imgContainer">
          <img src="assets/martin.png" alt="martin" />
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <h2>Hi, I'm</h2>
          <h1>Martin Cavil</h1>
          <h3>Front-End <span>Developer</span></h3>
        </div>
        <a href="#portfolio">
          <img src="assets/down.png" alt="" />
        </a>
      </div>
    </div>
  )
}
