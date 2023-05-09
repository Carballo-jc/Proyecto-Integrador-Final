import "./Card.css";

const Card = (orador) => {
  return (
    <div className="card">
        <img src={orador.image} alt={orador.title} className="image"/>
            <h3>{orador.title}</h3>
            <p className="card_description">{orador.description}</p>
    </div>
  );
};

export default Card;
