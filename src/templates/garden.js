import React from "react"
import Layout from "../components/layout"
import Base from "../components/base"
import StyleHelmet from "../components/styleHelmet"

export default ({data}) => {
    const garden = data.allFile.edges[0].node.publicURL
    console.log("garden:", garden)
    return (
        <Base>
            <StyleHelmet styleUrl={garden} />
        </Base>
    )
}

export const query = graphql`  
    query($garden: String!) {  
        allFile(filter: { 
            extension: { eq: "css" }, 
            name:{ eq: $garden}}) {
          edges {
            node {
              publicURL
            }
          }
        }
    }
`