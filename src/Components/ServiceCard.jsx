import "./ServiceCard.css";

const ServiceCard = ({ name, image }) => {
  return (
    <div className="service-card">
      <img src={image} alt={name} className="service-image" />
      <h2 className="service-name">{name}</h2>
    </div>
  );
};

export default ServiceCard;
