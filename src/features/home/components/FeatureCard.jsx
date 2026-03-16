import React from "react";
import { ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

export const FeatureCard = ({ feature, index }) => {
  const Icon = feature.icon;
  const isClickable = feature.link !== "#";

  const card = (
    <div
      className="hp-feature-card"
      style={{
        animationDelay: `${index * 80}ms`,
        "--glow": feature.glowColor,
      }}
    >
      {/* Gradient top bar */}
      <div className={`hp-card-bar bg-gradient-${index}`} />

      {/* Icon */}
      <div className={`hp-card-icon bg-gradient-${index}`}>
        <Icon size={22} color="white" />
      </div>

      {/* Category pill */}
      <span className="hp-category-pill">{feature.category}</span>

      {/* Content */}
      <h3 className="hp-card-title">{feature.title}</h3>
      <p className="hp-card-desc">{feature.description}</p>

      {/* Footer */}
      <div className="hp-card-footer">
        <span className={`hp-badge ${feature.statusClass}`}>{feature.status}</span>
        {isClickable && (
          <span className="hp-card-cta">
            Explore <ChevronRight size={14} />
          </span>
        )}
      </div>
    </div>
  );

  return isClickable ? (
    <Link to={feature.link} className="hp-card-link">
      {card}
    </Link>
  ) : (
    <div className="hp-card-link hp-card-disabled">{card}</div>
  );
};
