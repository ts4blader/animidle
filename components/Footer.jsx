import React from "react";

const footerData = [
  ["FAQ", "investor relations", "privacy", "speed test"],
  ["help center", "jobs", "cookie preferences", "legal notices"],
  ["account", "ways to watch", "corporate infomation", "only on animidle"],
  ["media center", "terms of use", "contact us"],
];

const Pillar = ({ content }) => {
  return (
    <ul className="pillar">
      {content.map((item, index) => (
        <li key={index}>
          <a href="#">{item}</a>
        </li>
      ))}
    </ul>
  );
};

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__head">
        <a href="#">
          <p className="text">Questions? Contact us.</p>
        </a>
      </div>
      <div className="footer__body">
        {footerData.map((item, index) => (
          <Pillar key={index} content={item} />
        ))}
      </div>
      <div className="footer__foot">
        <p className="text">copyright 2021 @animidle</p>
      </div>
    </footer>
  );
}
