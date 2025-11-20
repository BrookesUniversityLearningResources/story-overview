import type { FC } from "react";

import type { PublishedStory } from "../../domain/story/publish/types";

type StoryOverviewProps = {
	story: Readonly<PublishedStory>;
};

const StoryOverview: FC<StoryOverviewProps> = ({ story }) => {
	return <div>{story.title}</div>;
};

export default StoryOverview;
