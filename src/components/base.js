import React from 'react'

const Base = ({data}) => {
    
}

export const query = graphql`
{
    allFile(filter: { extension: { eq: "css" }}) 
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
}`