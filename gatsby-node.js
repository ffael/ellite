const path = require('path')

module.exports.createPages = async ({graphql, actions}) => {
  const { createPage } = actions
  const projectTemplate = path.resolve(`${__dirname}/src/templates/Project/project.js`)
  const serviceTemplate = path.resolve(`${__dirname}/src/templates/Service/service.js`)

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
      services: allContentfulService{
        edges{
          node{
            slug
            title
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
  response.data.services.edges.forEach((edge)=>{
    createPage({
      path: `/services/${edge.node.slug}`,
      component: serviceTemplate,
      context:{
        slug: edge.node.slug,
        name: edge.node.title
      }
    })
  })
}