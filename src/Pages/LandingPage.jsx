// import { Link } from "react-router-dom";
// import { services, cafes } from "../Data";
// import "./LandingPage.css";

// const LandingPage = () => {
//   return (
//     <div className="landing-page">
//       {/* Hero Section */}
//       <section className="hero-section">
//         <div className="hero-content">
//           <span className="safety-badge">🔒 Safe & Secure Delivery</span>
//           <h1 className="hero-title">
//             Delicious Food, <span className="highlight">Delivered Safe</span>
//           </h1>
//           <p className="hero-description">
//             Order from the best local cafes in Houston. Fresh, fast, and always
//             safe delivery to your doorstep.
//           </p>
//           <div className="hero-actions">
//             <Link to="/services" className="btn btn-primary">
//               Order Now
//             </Link>
//             <Link to="/cafes" className="btn btn-secondary">
//               Learn More
//             </Link>
//           </div>
//           <div className="hero-features">
//             <span>⏱️ 30-45 min delivery</span>
//             <span>✅ 100% Safe</span>
//           </div>
//         </div>
//         <div className="hero-image">
//           <img
//             src="../../public/hero.jpg"
//             alt="Food Delivery"
//           />
//         </div>
//       </section>

//       {/* Categories Section */}
//       <section className="categories-section">
//         <h2 className="section-title">What are you craving?</h2>
//         <p className="section-subtitle">Choose from our delicious categories</p>
//         <div className="categories-grid">
//           {services.map((service) => (
//             <div key={service.id} className="category-card">
//               <img
//                 src={service.image}
//                 alt={service.name}
//                 className="category-icon"
//               />
//               <p className="category-name">{service.name}</p>
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* Featured Cafes */}
//       <section className="featured-cafes">
//         <h2 className="section-title">Featured Cafes</h2>
//         <p className="section-subtitle">Top-rated local favorites</p>
//         <div className="cafes-grid">
//           {cafes.map((cafe) => (
//             <div key={cafe.id} className="cafe-card">
//               <div className="cafe-header">
//                 <h3 className="cafe-name">{cafe.name}</h3>
//                 <span className="cafe-rating">⭐ {cafe.rating}</span>
//               </div>
//               <p className="cafe-description">{cafe.description}</p>
//               <div className="cafe-delivery-time">
//                 <span>⏱️ {cafe.deliveryTime}</span>
//               </div>
//               <div className="cafe-tags">
//                 {cafe.tags.map((tag, idx) => (
//                   <span key={idx} className="tag">
//                     {tag}
//                   </span>
//                 ))}
//               </div>
//             </div>
//           ))}
//         </div>
//         <div className="view-all-container">
//           <Link to="/cafes" className="btn btn-dark">
//             View All Cafes →
//           </Link>
//         </div>
//       </section>

//       {/* Why Choose Us */}
//       <section className="why-choose-us">
//         <h2 className="section-title">Why Choose Safe Delivery?</h2>
//         <p className="section-subtitle">
//           We prioritize your safety and satisfaction
//         </p>
//         <div className="features-grid">
//           <div className="feature">
//             <span className="feature-icon">🛡️</span>
//             <h3 className="feature-title">100% Safe</h3>
//             <p className="feature-description">
//               Contactless delivery with verified drivers and sanitized packaging
//             </p>
//           </div>
//           <div className="feature">
//             <span className="feature-icon">⏱️</span>
//             <h3 className="feature-title">Fast Delivery</h3>
//             <p className="feature-description">
//               Average delivery time of 30-45 minutes with real-time tracking
//             </p>
//           </div>
//           <div className="feature">
//             <span className="feature-icon">🍽️</span>
//             <h3 className="feature-title">Quality Food</h3>
//             <p className="feature-description">
//               Partnered with the best local cafes for fresh, delicious meals
//             </p>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default LandingPage;
import React from "react";
import "./LandingPage.css";

const LandingPage = () => {
  // Sample data - in a real app, this would come from props or API
  const services = [
    { id: 1, name: "Coffee", icon: "☕" },
    { id: 2, name: "Bakery", icon: "🥐" },
    { id: 3, name: "Breakfast", icon: "🍳" },
    { id: 4, name: "Lunch", icon: "🥗" },
    { id: 5, name: "Desserts", icon: "🍰" },
  ];

  const cafes = [
    {
      id: 1,
      name: "Morning Brew",
      rating: 4.8,
      description:
        "Artisan coffee and fresh pastries made daily with locally sourced ingredients.",
      deliveryTime: "25-35 min",
      tags: ["Coffee", "Pastries", "Breakfast"],
    },
    {
      id: 2,
      name: "Urban Grind",
      rating: 4.7,
      description:
        "Modern cafe with specialty coffees, healthy bowls, and gourmet sandwiches.",
      deliveryTime: "30-40 min",
      tags: ["Lunch", "Healthy", "Coffee"],
    },
    {
      id: 3,
      name: "Sweet Tooth Bakery",
      rating: 4.9,
      description:
        "Decadent desserts, cakes, and pastries that will satisfy any sweet craving.",
      deliveryTime: "20-30 min",
      tags: ["Desserts", "Bakery", "Vegetarian"],
    },
  ];

  return (
    <div className="landing-page">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="container">
          <div className="hero-content">
            <span className="safety-badge">
              <i className="fas fa-lock"></i> Safe & Secure Delivery
            </span>
            <h1 className="hero-title">
              Delicious Food, <span className="highlight">Delivered Safe</span>
            </h1>
            <p className="hero-description">
              Order from the best local cafes in Houston. Fresh, fast, and
              always safe delivery to your doorstep.
            </p>
            <div className="hero-actions">
              <a href="#" className="btn btn-primary">
                Order Now →
              </a>
              <a href="#" className="btn btn-secondary">
                Learn More
              </a>
            </div>
            <div className="hero-features">
              <span>
                <i className="fas fa-clock"></i> 30-45 min delivery
              </span>
              <span>
                <i className="fas fa-check-circle"></i> 100% Safe
              </span>
            </div>
          </div>
          <div className="hero-image">
            <img
              src="https://plus.unsplash.com/premium_photo-1664392115681-28de35ca10a7?q=80&w=773&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Delicious food delivery"
            />
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="categories-section">
        <div className="text-container">
          <h2 className="section-title">What are you craving?</h2> 
          <p className="section-subtitle">
            Choose from our delicious categories
          </p>
        </div>
        <div className="categories-grid">
          {services.map((service) => (
            <div key={service.id} className="category-card">
              <div className="category-icon">{service.icon}</div>
              <p className="category-name">{service.name}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Cafes */}
      <section className="featured-cafes">
        <div className="Text-container">
          <h2 className="section-title">Featured Cafes</h2> <br />
          <p className="section-subtitle">Top-rated local favorites</p>
        </div>
        <div className="cafes-grid">
          {cafes.map((cafe) => (
            <div key={cafe.id} className="cafe-card">
              <div className="cafe-header">
                <h3 className="cafe-name">{cafe.name}</h3>
                <span className="cafe-rating">⭐ {cafe.rating}</span>
              </div>
              <p className="cafe-description">{cafe.description}</p>
              <div className="cafe-delivery-time">
                <i className="fas fa-clock"></i>{" "}
                <span>{cafe.deliveryTime}</span>
              </div>
              <div className="cafe-tags">
                {cafe.tags.map((tag, idx) => (
                  <span key={idx} className="tag">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div>
          <div className="view-all-container">
            <a href="#" className="btn btn-dark">
              View All Cafes →
            </a>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="why-choose-us">
        <div className="Text-container">
          <h2 className="section-title">Why Choose Safe Delivery?</h2>
          <p className="section-subtitle">
            We prioritize your safety and satisfaction
          </p>
          <div className="features-grid">
            <div className="feature">
              <div className="feature-icon">🛡️</div>
              <h3 className="feature-title">100% Safe</h3>
              <p className="feature-description">
                Contactless delivery with verified drivers and sanitized
                packaging
              </p>
            </div>
            <div className="feature">
              <div className="feature-icon">⏱️</div>
              <h3 className="feature-title">Fast Delivery</h3>
              <p className="feature-description">
                Average delivery time of 30-45 minutes with real-time tracking
              </p>
            </div>
            <div className="feature">
              <div className="feature-icon">🍽️</div>
              <h3 className="feature-title">Quality Food</h3>
              <p className="feature-description">
                Partnered with the best local cafes for fresh, delicious meals
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;