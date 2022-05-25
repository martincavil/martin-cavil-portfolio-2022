import { useEffect, useState } from 'react';
import './portfolio.scss';
import PortfolioList from "../portfolioList/PortfolioList";
import { webPortfolioList, mobilePortfolioList, contentPortolfioList, contentPortfolioList } from '../../data';

export default function Portfolio() {

  const [selected, setSelected] = useState("web");
  const[data, setData] = useState([]);
  const list = [
    {
      id: "web",
      title: "Web App"
    },
    {
      id: "mobile",
      title: "Mobile App"
    },
    {
      id: "content",
      title: "Content"
    }
  ];

  useEffect(()=> {
    switch(selected) {
      case "web":
      setData(webPortfolioList);
      break;
      case "mobile":
      setData(mobilePortfolioList);
      break;
      case "content":
      setData(contentPortfolioList);
      break;
      default:
        setData(webPortfolioList)
    }
  },[selected])

  return (
    <div className='portfolio' id="portfolio">
      <h1>Portfolio</h1>
      <ul>
        {list.map((item)=> (
          <PortfolioList
          title={item.title}
          active={selected === item.id}
          setSelected={setSelected}
          id={item.id}
          />
        ))}
      </ul>
      <div className="container">
        {data.map((d) => (
           <div className="item">
           <img src={d.img} alt="" />
           <h3>{d.title}</h3>
         </div>
        ))}
      </div>
    </div>
  )
}
