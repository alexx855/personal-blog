export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-blog'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5da5b34704b5b37a4b2e0b5a',
                  title: 'Sanity Studio',
                  name: 'personal-blog-studio',
                  apiId: 'a7dc8c20-b87d-45f2-8606-df081199f782'
                },
                {
                  buildHookId: '5da5b347fa245e25064a5b3d',
                  title: 'Blog Website',
                  name: 'personal-blog-web',
                  apiId: 'b7143e4b-a7da-4378-8283-2149a76c8f79'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/alexx855/personal-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://personal-blog-web.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
