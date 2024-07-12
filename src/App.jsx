import Header from "./components/Header"
import Text from "./components/Text"
import Footer from "./components/Footer"
import "./App.css"

const footerText = {
  autor: "Paulo",
  direitos: "Todos os direitos reservados"
}

function App(){
  return( 
    <div>
    <Header/>
    <main className="main">
    <Text/>
    </main>
    <Footer footer = {footerText}/>
    </div>
  )
}

export default App