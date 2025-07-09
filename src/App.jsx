import "./App.css"
import NavBar from "./components/NavBar"
import ItemListContainer from "./components/ItemListContainer"

function App() {
  return (
    <>
      <NavBar />
      <ItemListContainer saludo='Bienvenidos a VuelaLejos'/>
    </>
  )
}

export default App