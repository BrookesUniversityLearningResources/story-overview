import type { PublishedStory } from "../domain/story/publish/types";

/**
 * A 3-scene story where scenes link to scenes that don't exist (yet).
 *
 * The intent here is to use this story to harden the story overview component
 * and make it resilient when given stories that don't link up.
 */
const bustedStory: PublishedStory = {
	author: {
		id: 0,
		name: "Rich",
	},
	id: 1,
	createdAt: new Date(),
	imageUrl: null,
	title: "Busted Story",
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
							text: "Does not exist (yet)",
							link: "room-001", // ⬅️ points to non-existent target
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
				zorbash: {
					number: 0,
					withinScene: 1,
					link: "zorbash",
					content: [
						{
							kind: "blockHeading",
							text: "Zorbash",
							link: "zorbash",
						},
						{
							kind: "blockPlaintext",
							text: "This is the Zorbash scene.",
						},
						{
							kind: "blockLink",
							text: "Still does not exist (yet)",
							link: "room-234", // ⬅️ points to non-existent target
						},
					],
				},
			},
		},
		{
			id: 2,
			image: null,
			isOpeningScene: false,
			title: "Chank",
			link: "chank",
			pages: {
				chank: {
					number: 0,
					withinScene: 2,
					link: "chank",
					content: [
						{
							kind: "blockHeading",
							text: "End",
							link: "end",
						},
						{
							kind: "blockPlaintext",
							text: "This is the Chank scene.",
						},
					],
				},
			},
		},
	],
};

export default bustedStory;
