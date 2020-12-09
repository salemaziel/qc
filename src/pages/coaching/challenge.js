import React from 'react'
import Layout from "../../components/layout";
import SEO from "../../components/seo";
import ChallengePage from '../../components/PageComponents/Coaching/Challenge/ChallengePage'


const Challenge = (props) => {
    return(
        <Layout>
            <SEO title="Challenge" />
            <ChallengePage />

        </Layout>
    )
}

export default Challenge