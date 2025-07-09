import "./NavBar.css"
import CartWidget from "./CartWidget"

const NavBar = () => {
  return (
    <nav>
      <h2>VuelaLejos 🚀</h2>
      <div className="nav-links-cart">
        <div className="nav-links">
          <a href="#">Viajes</a>
          <a href="#">Hospedajes</a>
          <a href="#">Paquetes</a>
        </div>
        <CartWidget />
      </div>
    </nav>
  )
}

export default NavBar