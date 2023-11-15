import React from "react";
import "./footer.css";
import { TiShoppingCart } from "react-icons/ti";

function Footer() {
  return (
    <div class="footer">
      <div class="footer-container">
        <div class="footer-section">
          <h3>O nama</h3>
          <p>
            Mi smo online prodavnica posvećena pružanju vrhunskih proizvoda i
            iskustava kupovine koje će vas oduševiti.
          </p>
        </div>
        <div class="footer-section">
          <h3>Linkovi</h3>
          <ul>
            <li>
              <a href="#">Početna</a>
            </li>
            <li>
              <a href="#">Proizvodi</a>
            </li>
            <li>
              <a href="#">Kontakt</a>
            </li>
          </ul>
        </div>
        <div class="footer-section">
          <h3>Kontakt informacije</h3>
          <p>Email: info@vasshop.com</p>
          <p>Telefon: 123-456-789</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
