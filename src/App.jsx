import { useContext } from 'react'
import { Context } from './components/context'
import Header from './components/Header/Header'
import SuperHero from './components/SuperHero/SuperHero'
import { SectionCard } from './components/SectionCard/SectionCard'
import Register from './components/Register/Register'
import { Aside } from './components/Aside/Aside'
import './App.css'
import Footer from './components/Footer/Footer'


function App() {
  const { state } = useContext(Context);
  const aside = state.data?.section;
  if (!aside) return;
  return (
   <>
    <Header />
    <SuperHero />
    <SectionCard />
    <Aside {...aside}/>
    <Register />
    <Footer />
   </>
  )
}

export default App
