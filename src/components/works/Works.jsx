import { useState } from 'react';
import './works.scss'

export default function Works() {

  const [currentSlide, setCurrentSlide] = useState([]);

  const data = [
    {
      id: "1",
      icon: "./assets/web.png",
      title: "Jalanin Portfolio",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam, dolorum suscipit?",
      img: "assets/jalanin1.png"
    },
    {
      id: "2",
      icon: "./assets/mobile.png",
      title: "Music App",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam, dolorum suscipit?",
      img: "https://cdn.dribbble.com/users/7072315/screenshots/17219469/media/72056d544193b540fff659db44c8eda5.png?compress=1&resize=1000x750&vertical=top"
    },
    {
      id: "3",
      icon: "./assets/web.png",
      title: "Sneakers Project",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam, dolorum suscipit?",
      img: "https://cdn.dribbble.com/users/2064121/screenshots/15595531/media/0aa6f100d6dc369e5524f4aa14b7dcec.png?compress=1&resize=1200x900&vertical=top"
    }
  ];

  const handleClick = (way) => {
    way === "left"
      ? setCurrentSlide(currentSlide > 0 ? currentSlide-1 : 2)
      : setCurrentSlide(currentSlide<data.length -1 ?currentSlide + 1 : 0) ;
  }

  return (
    <div className='works' id="works">
      <div className="slider" style={{transform: `translateX(-${currentSlide * 100}vw)`}}>
        {data.map(d => (

          <div className="container">
          <div className="item">
            <div className="left">
              <div className="leftContainer">
                <div className="imgContainer">
                  <img src={d.icon} alt="" />
                </div>
                <h2>{d.title}</h2>
                <p>{d.desc}</p>
                <span>Projects</span>
              </div>
            </div>
            <div className="right">
              <img src={d.img} alt="" />
            </div>
          </div>
        </div>
      ))}
      </div>
      <img src="assets/arrow.svg" className="arrow left" alt="" onClick={() => handleClick("left")}/>
      <img src="assets/arrow.svg" className="arrow right" alt="" onClick={() => handleClick("right")} />
    </div>
  )
}
