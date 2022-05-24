import './navbar.scss'


export default function Navbar({menuOpen, setMenuOpen}) {
  return (
    <div className={"navbar " + (menuOpen && "active")} id="navbar">
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className='logo'>Martin Cavil</a>
          <div className="itemContainer">
            <div className="phoneNumber">
              {/* Add a material icon */}
              <span>+33 6 32 80 05 89</span>
            </div>
            <div className="mail">
              {/* Add a material icon */}
              <span>martin.cavil98@gmail.com</span>
            </div>
          </div>
        </div>
        <div className="right">
          <div className="burgerMenu" onClick={()=>setMenuOpen(!menuOpen)}>
            <span className='line1'></span>
            <span className='line2'></span>
            <span className='line3'></span>
          </div>
        </div>
      </div>
    </div>
  )
}
