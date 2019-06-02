import React from 'react'
import { StaticQuery, graphql, Link } from "gatsby"
import GardenLinks from './gardenLinks'
import BaseHtml from '../templates/base.html'

const Base = ({children}) => (
    <StaticQuery
        query={graphql`
        {       
            gardens:allFile(filter: { extension: { eq: "css" }}) 
            {
                edges {
                    node {
                        fields {
                            slug
                        }
                        name
                    }
                }
            }
        }`}
        render={data => (
            <>
                <div dangerouslySetInnerHTML={{ __html: BaseHtml }} />
                <GardenLinks edges={data.gardens.edges} />
                {children}
            </>
        )}
    />
)

export default Base