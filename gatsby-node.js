const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.onCreateWebpackConfig = ({
  actions,
}) => {
  actions.setWebpackConfig({
    module: {
      rules: [
        {
          test: /\.html$/,
          loader: 'html-loader',
          options: {
            minimize: false,
          },
        },
      ],
    },
  })
}

exports.onCreateNode = ({ node, getNode, actions }) => {  
  const { createNodeField } = actions  
  if (node.sourceInstanceName === `gardens` && node.internal.type === `File`) {
    const slug = createFilePath({ node, getNode, basePath: `pages` }) 
    createNodeField({      
      node,      
      name: `slug`,      
      value: slug,    
    })  
  }
}

exports.createPages = ({ graphql, actions }) => {
    const { createPage } = actions  
    return graphql(`
      {
        allFile(filter: { extension: { eq: "css" }}) {
          edges {
            node {
              fields {
                slug
              }
              name
            }
          }
        }
      }
    `).then(result => {
      console.log(result)
      result.data.allFile.edges.forEach(
          ({ node }) => {      
            const slug = node.name === `index` ? `/` : node.fields.slug
              createPage({        
                  path: slug,        
                  component: path.resolve(`./src/templates/garden.js`),        
                  context: {                   
                      garden: node.name  
                    },      
                })    
            })  
        })
  }