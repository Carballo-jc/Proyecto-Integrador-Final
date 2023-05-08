import "./Card.css";

const Card = (orador) => {
    console.log(orador);
  return (
    <div className="card">
        <img src={orador.image} alt={orador.title} className="image"/>
            <h3>{orador.title}</h3>
            <p>{orador.description}</p>
    </div>
  );
};

export default Card;
