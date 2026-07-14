import './App.css'
import Header from './Components/Header/Header'
import HeaderContact from './Components/HeaderContact/HeaderContact'
import ContactForm from './Components/ContactForm/ContactForm'
function App() {
  return (
    <div className='box'>
       <Header/>
      <main className='main-container'>
        <HeaderContact/>
        <ContactForm/>
      </main>
    </div>
  )
 }
 
 export default App
 