import { services } from "../Data";
import ServiceCard from "../Components/ServiceCard";
import "./ServicePage.css";

const ServicePage = () => {
  return (
    <section className="service-page">
      <h1 className="service-page-title">Our Services</h1>
      <div className="services-grid">
        {services.map((service) => (
          <ServiceCard
            key={service.id}
            name={service.name}
            image={service.image}
          />
        ))}
      </div>
    </section>
  );
};

export default ServicePage;
