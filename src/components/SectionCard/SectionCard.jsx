import { useContext } from 'react';
import { Context } from '../context';
import Card from '../Card/Card';
import './Section.css';

export const SectionCard = () => {
  const { state } = useContext(Context);
  const datos = state.data?.oradores;
if(!datos) return;

  return (
    <div className='section'>  <h3>ORADORES</h3>
    <div className='cardContainer'>
    {datos.map(orador => {
        return (
          <Card key={orador.id} {...orador}/>
        )
       })}
    </div></div>
  )
}
