import fetchFunction from "./fetchFunction";
import { IStories } from "../../types/InterfaceTypes";

const mockData = {
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
};

// MSW Docs for different responses: https://mswjs.io/docs/getting-started/mocks/rest-api
describe("fetchFunction()", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });
  afterAll(() => jest.restoreAllMocks());
  it("successfully gets a response", async () => {
    const data = await fetchFunction<IStories>(
      "https://localhost:3000/api/search",
      "8776666"
    );
    expect(data).toStrictEqual(mockData);
  });

  // TODO: Test for bad api response
});
