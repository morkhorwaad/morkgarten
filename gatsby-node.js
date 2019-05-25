const path = require(`path`)

exports.createPages = ({ graphql, actions }) => {
    const { createPage } = actions  
    return graphql(`
      {
        allMarkdownRemark {
          edges {
            node {
              frontmatter {
                path 
                garden
              }
            }
          }
        }
      }
    `).then(result => {
      console.log(result)
      result.data.allMarkdownRemark.edges.forEach(
          ({ node }) => {      
              console.log("Making a page at ", node.frontmatter.slug)
              console.log("the garden is ", node.frontmatter.garden)
              createPage({        
                  path: node.frontmatter.path,        
                  component: path.resolve(`./src/templates/garden.js`),        
                  context: {                   
                      garden: node.frontmatter.garden    
                    },      
                })    
            })  
        })
  }