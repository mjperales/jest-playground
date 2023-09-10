import { rest } from "msw";
export const handlers = [
  rest.get("https://localhost:3000/api/search", (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        type: "test result data",
        version: "0.6.0",
        content_elements: [
          {
            content_elements: [
              { type: "video" },
              { type: "custom_embed", subtype: "datawrapper" },
            ],
            _id: "12345",
            publish_date: "April 20, 2023",
            display_date: "April 16, 2023",
            headlines: { basic: "Testing story" },
            first_publish_date: "April 1, 2023",
            canonical_url: "/testing/business/",
            additional_properties: {
              topic_description: "test",
              topic_publication_date: "April 15, 2023",
            },
          },
        ],
        additional_properties: {
          took: 1,
          time_out: 1,
        },
        count: 1,
      })
    );
  }),
];
