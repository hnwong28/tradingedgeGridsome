export default {
  widgets: [
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
                  buildHookId: '60dc5d2627782e00d758c6b8',
                  title: 'Sanity Studio',
                  name: 'tradingedge-studio',
                  apiId: '6825514a-c653-463a-8f1c-123bfd06486b'
                },
                {
                  buildHookId: '60dc5d261c568500b01c64d5',
                  title: 'Blog Website',
                  name: 'tradingedge',
                  apiId: '90623bc0-a944-4549-97fc-f7918601bcd2'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/hnwong28/tradingedge',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://tradingedge.netlify.app', category: 'apps'}
        ]
      }
    },
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    },
    {name: 'project-users', layout: {height: 'auto'}}
  ]
}
