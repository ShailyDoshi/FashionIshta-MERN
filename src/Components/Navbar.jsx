import { IoMdDisc, IoMdPerson, IoMdShirt } from "react-icons/io"
import { MdBoy, MdCategory, MdGirl, MdHomeFilled, MdPentagon, MdShop2, MdStyle } from "react-icons/md"
import { NavLink } from "react-router-dom"

const Navbar = ({containerStyle}) => {
  return (
    <div>
      <nav className={`${containerStyle}`}>
    
    <NavLink to={"/"} className={({isActive})=> isActive ? "active_link" : ""}><div className="flexCenter gap-x-1"><MdHomeFilled/> Home</div></NavLink>
    <NavLink to={"/Mens"} className={({isActive})=> isActive ? "active_link" : ""}><div className="flexCenter gap-x-1"><IoMdShirt/> Men's</div></NavLink>
    <NavLink to={"/Womens"} className={({isActive})=> isActive ? "active_link" : ""}><div className="flexCenter gap-x-1"><MdShop2/> Women's</div>
    </NavLink>
  </nav>
    </div>
  )
}

export default Navbar
