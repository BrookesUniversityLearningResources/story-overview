import type { PublishedStory } from "../domain/story/publish/types";

/**
 * A linear, 3-scene story where each scene has exactly one page.
 */
const linearStory: PublishedStory = {
	author: {
		id: 0,
		name: "Rich",
	},
	id: 0,
	createdAt: new Date(),
	imageUrl: null,
	title: "Linear Story",
	scenes: [
		{
			id: 0,
			image: null,
			isOpeningScene: true,
			title: "Introduction",
			link: "introduction",
			pages: {
				introduction: {
					number: 0,
					withinScene: 0,
					link: "introduction",
					content: [
						{
							kind: "blockHeading",
							text: "Introduction",
							link: "introduction",
						},
						{
							kind: "blockPlaintext",
							text: "This is the opening scene.",
						},
						{
							kind: "blockLink",
							text: "Middle",
							link: "middle",
						},
					],
				},
			},
		},
		{
			id: 1,
			image: null,
			isOpeningScene: false,
			title: "Middle",
			link: "middle",
			pages: {
				introduction: {
					number: 0,
					withinScene: 1,
					link: "middle",
					content: [
						{
							kind: "blockHeading",
							text: "Middle",
							link: "middle",
						},
						{
							kind: "blockPlaintext",
							text: "This is the middle scene.",
						},
						{
							kind: "blockLink",
							text: "Last",
							link: "last",
						},
					],
				},
			},
		},
		{
			id: 2,
			image: null,
			isOpeningScene: false,
			title: "End",
			link: "end",
			pages: {
				introduction: {
					number: 0,
					withinScene: 2,
					link: "middle",
					content: [
						{
							kind: "blockHeading",
							text: "End",
							link: "end",
						},
						{
							kind: "blockPlaintext",
							text: "This is the last scene.",
						},
					],
				},
			},
		},
	],
};

export default linearStory;
