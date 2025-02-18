import { defineCollection, z } from "astro:content";

export const collections = {
  works: defineCollection({
    type: "content",
    schema: z.object({
      title: z.string(),
      dateEntry: z.coerce.date(),
      date: z.string(),
      description: z.string(),
      position: z.string(),
      usedTools: z.array(z.string()),
      color: z.string(),
      companyLink: z.string(),
    }),
  }),
  projects: defineCollection({
    type: "content",
    schema: ({ image }) =>
      z.object({
        order: z.number(),
        title: z.string(),
        type: z.string(),
        description: z.string(),
        usedTools: z.array(z.string()),
        logo: image(),
        detailsPage: z.object({
          sections: z.array(
            z.object({
              title: z.string(),
              content: z.string(),
              images: z.array(
                z.object({
                  src: z.string(),
                  alt: z.string(),
                  width: z.number(),
                  height: z.number(),
                })
              ),
            })
          ),
          usedTools: z.array(z.string()),
          palette: z.array(z.string()),
        }),
      }),
  }),
  achievements: defineCollection({
    type: "content",
    schema: () =>
      z.object({
        title: z.string(),
        type: z.string(),
        description: z.string(),
        date: z.date(),
        imageUrl: z.string(),
        url: z.string(),
        order: z.number(),
        buttonText: z.string(),
      }),
  }),
};
