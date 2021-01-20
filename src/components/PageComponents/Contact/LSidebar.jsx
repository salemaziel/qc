import React from 'react'



import {
FaFacebook,
FaMeetup,
FaInstagram
} from 'react-icons/fa'


const LSidebar = () => (
    <>
    <div className="sidebar">
      <section>
                  {/**<p className="mb-2">Phone</p>
                   <p className="mb-2"><a href="tel:#">760-555-5555</a></p>**/}
                  <h4 className="followus">Email</h4>
                  <p className="followus">
                    <a href="mailto:nathan@queerconscious.com">
                    nathan@queerconscious.com
                    </a>
                  </p>
                <h4 className="followus">Follow Us</h4>
                <div className="followus">
                  <a href="https://www.instagram.com/queerconscious/" rel="noreferrer nofollow" target="_blank">
                    <FaInstagram />
                  </a>
                  <a href="https://www.meetup.com/meetup-group-YYjFTSuM/" rel="noreferrer nofollow" target="_blank">
                    <FaMeetup />
                  </a>
                  <a href="http://facebook.com/queerconsciousSD" rel="noreferrer nofollow" target="_blank">
                    <FaFacebook />
                  </a>
                </div>
        <footer>

        </footer>
      </section>
      <hr />

    </div>
    </>
)

export default LSidebar