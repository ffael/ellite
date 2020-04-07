const path = require('path')

module.exports.createPages = async ({graphql, actions}) => {
  const { createPage } = actions
  const projectTemplate = path.resolve(`${__dirname}/src/templates/Project/project.js`)

  const response = await graphql(`
    query{
      projects: allContentfulProject{
        edges{
          node{
            slug
            name
          }
        }
      }
    }
  `)

  response.data.projects.edges.forEach((edge)=>{
    createPage({
      path: `/projects/${edge.node.slug}`,
      component: projectTemplate,
      context: {
        slug: edge.node.slug,
        name: edge.node.name
      }
    })
  })
}