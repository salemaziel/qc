import React from 'react'
import Layout from "../components/layout";
import SEO from "../components/seo";
import CoachingPage from '../components/PageComponents/Coaching/CoachingPage'


const Coaching = (props) => {
    return(
        <Layout>
            <SEO title="Coaching" />
            <CoachingPage />

        </Layout>
    )
}

export default Coaching