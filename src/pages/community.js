import React from 'react'
import Layout from "../components/layout";
import SEO from "../components/seo";
import CommunityPage from '../components/PageComponents/Community/CommunityPage'


const Community = (props) => {
    return(
        <Layout>
            <SEO title="Community" />
            <CommunityPage />

        </Layout>
    )
}

export default Community