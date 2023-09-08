interface IStory {
  content_elements: Array<{
    type: string;
    subtype?: string;
    embed: { id: string };
  }>;
  website_url?: string;
  display_date: string;
  headlines: {
    basic: string;
  };
  first_publish_date: string;
  additional_properties: {
    topic_description?: string;
    topic_publication_date?: string;
  };
  canonical_url: string;
  slug: string;
  publish_date: string;
  _id: string;
  taxonomy: {
    primary_section: {
      name: string;
    };
  };
}

interface IStories {
  type: string;
  version: string;
  content_elements: Array<IStory>;
  additional_properties: {
    took: number;
    time_out: number;
  };
  count: number;
}

export type { IStories, IStory };
