// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: '宝',
  siteDescription:"雨泣",
  plugins: [
    {
      use: '@gridsome/source-filesystem',
      options: {
        typeName: 'BlogPost',
        path: './content/blog/**/*.md',
      }
    },
    {
      use: '@gridsome/source-strapi',
      options: {
        // apiURL: process.env.GRIDSOME_API_URL,
        // apiURL: "http://localhost:1337",
        apiURL: "http://106.75.218.238:1337",
        queryLimit: 100, // Defaults to 100
        contentTypes: ['post','tag'],
        singleTypes: ['general', 'about'],
        loginData: {
          identifier: 'panjunyu10@163.com',
          password: 'a123456'
        }
      }
    }
  ],
  templates: {
    StrapiPost: [
      {
        path: "/post/:id",
        component: "./src/templates/Post.vue"
      }
    ],
    StrapiTag: [
      {
        path: "/tag/:id",
        component: "./src/templates/Tag.vue"
      }
    ],
  
  }
  
}
