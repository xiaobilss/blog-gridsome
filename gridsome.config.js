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
        apiURL: process.env.GRIDSOME_API_URL,
        queryLimit: 100, // Defaults to 100
        contentTypes: ['post', 'tag'],
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
