
import { useContext } from "react";
import "./SuperHero.css";
import { Context } from "../context";

const SuperHero = () => {
  const { state } = useContext(Context);
  const hero = state.data?.hero;
if(!hero) return;
  return (
    <div className="hero"
    style={{"backgroundImage": `url(${hero.image})`}}
    >
     <section className="hero_section">
     <h2>{hero.title}</h2>
      <p>{hero.description}</p>
     </section>
    </div>
  )
}

export default SuperHero