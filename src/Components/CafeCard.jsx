import "./CafeCard.css";

const CafeCard = ({ name, image }) => {
  return (
    <div className="cafe-card">
      <img src={image} alt={name} className="cafe-image" />
      <h2 className="cafe-name">{name}</h2>
    </div>
  );
};

export default CafeCard;
