import { useContext } from 'react'
import { Context } from './components/context'
import Header from './components/Header'
import SuperHero from './components/SuperHero/SuperHero'
import { SectionCard } from './components/SectionCard/SectionCard'
import { Aside } from './components/Aside/Aside'
import './App.css'


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
   </>
  )
}

export default App
