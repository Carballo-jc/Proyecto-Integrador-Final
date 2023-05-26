import { useContext } from 'react'
import { Context } from './components/context'
import SuperHero from './components/SuperHero/SuperHero'
import { SectionCard } from './components/SectionCard/SectionCard'
import Register from './components/Register/Register'
import { Aside } from './components/Aside/Aside'
import './App.css'


function App() {
  const { state } = useContext(Context);
  const aside = state.data?.section;
  if (!aside) return;
  return (
   <>
    <SuperHero />
    <SectionCard />
    <Aside {...aside}/>
    <Register />
   </>
  )
}

export default App
