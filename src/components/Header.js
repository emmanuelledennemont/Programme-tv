import m6 from "../images/m6-tv.png"

const Header =({title =""}) => {
    return (
      <header>
      <div className="container">
        <div className="logo">
      <img className="m6-logo" src={m6} alt="logo m6" />
        <h1>{title}</h1>
        </div>
      </div> 
      </header>
    );
  };
  
  export default Header;
  