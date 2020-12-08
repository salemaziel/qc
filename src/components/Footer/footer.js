import React from "react";
import { FaEnvelope, FaInstagram, FaFacebook, FaMeetup } from 'react-icons/fa'


import footerStyles from "./footer.module.css";

const Footer = () => (

      <footer id="footer" className={footerStyles.Footer}>
        <div className={footerStyles.content}>
          <div className={footerStyles.inner}>
            <section className={footerStyles.about}>
              <h3>Button to specific link</h3>
              <p>
               A link to something specific that someone may be looking for on your website.
              </p>
              <ul className={footerStyles.actions}>
                <li>
                  <a href="#" className={footerStyles.button}>
                    Link to thing
                  </a>
                </li>
              </ul>
             
            </section>
            <div className={footerStyles.contact}>
            <ul className={footerStyles.iconBulleted}>
              <h3>Get In Touch</h3>
              <li className={footerStyles.Social}>
                <a href="mailto:yourfriendnate@gmail.com"><FaEnvelope /></a>
              <a href="https://meetup.com"><FaMeetup /></a>
                  <a href="https://instagram.com"><FaInstagram /></a>
                  <a href="https://facebook.com"><FaFacebook /></a> 

              </li>
            </ul>
            </div>
          </div>
        </div>
        <p className={footerStyles.copyright}>
          Created by SalemAziel © All Rights Reserved
          </p>

      </footer>
    );
;
export default Footer;
