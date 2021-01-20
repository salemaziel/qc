import React from 'react'
import LSidebar from './LSidebar'
import ContactForm from './contactForm'



const SectionOne = () => (
<section id="main" className="wrapper sidebar right">
  <div className="inner">
    <header className="major">
      <h2>Get In Touch</h2>
    </header>
    {/* Content */}
    <div className="content">
      {/*<h3>Dolore Amet Consequat</h3>*/}
      <p>Contact me to schedule your free 60 minute discovery call.</p>

    <br />
      <ContactForm />
    </div>
        <LSidebar />
  </div>
</section>

)

export default SectionOne