// src/components/BuildCard.js
import { Link } from "react-router-dom";

const BuildCard = ({ title, price, description, specs }) => {
  return (
    <div className="build-card">
      <div className="build-header">
        <h3>{title}</h3>
        <span className="build-price">{price}</span>
      </div>
      <p className="build-description">{description}</p>
      <ul className="build-specs">
        {specs.map((spec, index) => (
          <li key={index}>{spec}</li>
        ))}
      </ul>
      <Link to="/build" className="custom-btn">
        Customize This Build
      </Link>
    </div>
  );
};

export default BuildCard;
