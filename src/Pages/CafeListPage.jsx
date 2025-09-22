import { cafes } from "../Data";
import CafeCard from "../Components/CafeCard";
import "./CafeListPage.css";

const CafeListPage = () => {
  return (
    <section className="cafe-list-page">
      <h1 className="cafe-list-title">Our Cafes</h1>
      <div className="cafes-grid">
        {cafes.map((cafe) => (
          <CafeCard key={cafe.id} name={cafe.name} image={cafe.image} />
        ))}
      </div>
    </section>
  );
};

export default CafeListPage;
