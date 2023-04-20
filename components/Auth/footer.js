import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Footer() {
  const [country, setCountry] = useState("");

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(async (position) => {
      const { latitude, longitude } = position.coords;
      const response = await fetch(
        `https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=<YOUR_API_KEY>`
      );
      const data = await response.json();
      const country = data.results[0].address_components.find(
        (component) => component.types.includes("country")
      ).long_name;
      setCountry(country);
    });
  }, []);

  return (
    <footer style={{ position: "fixed", bottom: 0, width: "100%", height: "50px", backgroundColor: "#f2f2f2", display: "flex",  alignItems: "center", padding: "0 20px" }}>
      <div>
        <span>©2023MyApp. All rights reserved.</span>
      </div>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "10px" }}>
        <div>
          <Link to="/about">About </Link>
        </div>
        <div>
          <Link to="/contact">Contact </Link>
        </div>
        <div>
          <Link to="/faq">FAQ</Link>
        </div>
        <div>
          <Link to="/privacy-policy">Privacy Policy</Link>
        </div>
        <div>
          <Link to="/terms-of-service">Terms of Service</Link>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
