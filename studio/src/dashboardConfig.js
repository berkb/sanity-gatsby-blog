export default {
  widgets: [
    { name: "structure-menu" },
    {
      name: "project-info",
      options: {
        __experimental_before: [
          {
            name: "netlify",
            options: {
              description:
                "NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.",
              sites: [
                {
                  buildHookId:
                    "639837c9101e366df5794a60",
                  title: "Sanity Studio",
                  name: "sanity-gatsby-blog-studio-uwd6zbeq",
                  apiId: "5fe855df-14db-4084-98f2-6d94f6d39131",
                },
                {
                  buildHookId: "639837c9ba39bc693914bd57",
                  title: "Blog Website",
                  name: "sanity-gatsby-blog-web-bwg36ckm",
                  apiId: "1d0e526c-7503-4113-a0e1-478e255bf7d1",
                },
              ],
            },
          },
        ],
        data: [
          {
            title: "GitHub repo",
            value:
              "https://github.com/berkb/sanity-gatsby-blog",
            category: "Code",
          },
          {
            title: "Frontend",
            value: "https://sanity-gatsby-blog-web-bwg36ckm.netlify.app",
            category: "apps",
          },
        ],
      },
    },
    { name: "project-users", layout: { height: "auto" } },
    {
      name: "document-list",
      options: {
        title: "Recent blog posts",
        order: "_createdAt desc",
        types: ["post"],
      },
      layout: { width: "medium" },
    },
  ],
};
