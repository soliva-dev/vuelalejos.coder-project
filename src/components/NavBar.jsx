import CartWidget from "./CartWidget";

const NavBar = () => {
  return (
    <nav>
      <h2>VuelaLejos</h2>
      <div className="nav-links-cart">
        <div className="nav-links">
          <a>Viajes</a>
          <a>Hospedajes</a>
          <a>Paquetes</a>
        </div>
        <CartWidget />
      </div>
    </nav>
  )
}

export default NavBar