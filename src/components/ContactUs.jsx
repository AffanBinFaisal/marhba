import { useState, React } from "react";
import db from "./db";
import { doc, getDoc } from "firebase/firestore";

function ContactUs() {
  
  const [links, setLinks] = useState({});
  
  async function getLinks() {
    const data = await getDoc(doc(db, "contacts", "Kj8OhaeL0X7NJq3psnw3"));
    setLinks(data.data());
  }
  getLinks();
  return (
    <div className="contact">
      <h2>Contact Us</h2>
      <div className="card">
        <img src={links.img} className="card-img-top" alt="..." />
          <div class="links">
          <a href={links.contact}><i class="bi bi-telephone"></i></a>
          <a href={links.whatsapp}><i class="bi bi-whatsapp"></i></a>
          <a href={links.fb}><i class="bi bi-facebook"></i></a>
          <a href={links.insta}><i class="bi bi-instagram"></i></a>
          <a href={links.youtube}><i class="bi bi-youtube"></i></a>
          </div>
      </div>
    </div>
  );
}

export default ContactUs;
