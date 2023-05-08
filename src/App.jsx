import Header from './components/Header'

import './App.css'
import SuperHero from './components/SuperHero/SuperHero'
import Card from './components/Card/Card'
import { useContext } from 'react';
import { Context } from './components/context';

function App() {
  const { state } = useContext(Context);
const datos = state.data?.oradores;
if(!datos) return;
  return (
   <>
    <Header />
    <SuperHero />
<div className='cardContainer'>
{datos.map(orador => {
    return (
      <Card key={orador.id} {...orador}/>
    )
   })}
</div>
   </>
  )
}

export default App
