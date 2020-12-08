import React from "react";
import AboutPage from '../components/PageComponents/About/AboutPage'
import Layout from "../components/layout";
import SEO from "../components/seo";

const About = () => (
  <Layout>
    <SEO title="About" />
    <AboutPage />

  </Layout>
);

export default About;
