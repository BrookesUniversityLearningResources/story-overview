import type { PublishedStory } from "../domain/story/publish/types";

/**
 * A multi-scene, multi-page story where the last scene links back to the first.
 */
const loopingStory: PublishedStory = {
	id: 1001,
	title: "My story",
	author: {
		id: 1001,
		name: "Ashley",
	},
	scenes: [
		{
			id: 1001,
			title: "marston meadows bridge",
			image: {
				id: 1012,
				url: "https://res.cloudinary.com/hsrhivlhs/image/upload/c_scale,w_2500/v1757504789/1001-1001.jpg",
				thumbnailUrl:
					"https://res.cloudinary.com/hsrhivlhs/image/upload/w_288,h_192/v1757504789/1001-1001.jpg",
			},
			link: "marston-meadows-bridge",
			isOpeningScene: true,
			audio: {
				id: 1002,
				url: "https://res.cloudinary.com/hsrhivlhs/video/upload/v1761243248/1001-1001.mp3",
			},
			pages: {
				"marston-meadows-rivers-before-the-pitt-rivers": {
					number: 0,
					link: "marston-meadows-rivers-before-the-pitt-rivers",
					withinScene: 1001,
					content: [
						{
							kind: "blockHeading",
							link: "marston-meadows-rivers-before-the-pitt-rivers",
							text: "Marston Meadows' rivers before the Pitt Rivers...",
						},
						{
							kind: "blockPlaintext",
							text: "Dinosaurs? Where in the world....?",
						},
						{
							kind: "blockLink",
							text: "stomp",
							link: "stomp",
						},
					],
				},
			},
		},
		{
			id: 1002,
			title: "Stomp",
			image: {
				id: 1013,
				url: "https://res.cloudinary.com/hsrhivlhs/image/upload/c_scale,w_2500/v1757593293/1001-1002.jpg",
				thumbnailUrl:
					"https://res.cloudinary.com/hsrhivlhs/image/upload/w_288,h_192/v1757593293/1001-1002.jpg",
			},
			link: "stomp",
			isOpeningScene: false,
			audio: {
				id: 1003,
				url: "https://res.cloudinary.com/hsrhivlhs/video/upload/v1761243311/1001-1002.mp3",
			},
			pages: {
				"stomping-in-the-pitt-rivers": {
					number: 0,
					link: "stomping-in-the-pitt-rivers",
					withinScene: 1002,
					content: [
						{
							kind: "blockHeading",
							link: "stomping-in-the-pitt-rivers",
							text: "stomping in the Pitt Rivers!",
						},
						{
							kind: "blockPlaintext",
							text: "Grandad inspects Darwin's work...",
						},
						{
							kind: "blockLink",
							text: "Look out behind you!",
							link: "dinotastic",
						},
					],
				},
			},
		},
		{
			id: 1003,
			title: "Dinotastic",
			image: {
				id: 1014,
				url: "https://res.cloudinary.com/hsrhivlhs/image/upload/c_scale,w_2500/v1757593303/1001-1003.jpg",
				thumbnailUrl:
					"https://res.cloudinary.com/hsrhivlhs/image/upload/w_288,h_192/v1757593303/1001-1003.jpg",
			},
			link: "dinotastic",
			isOpeningScene: false,
			audio: {
				id: 1004,
				url: "https://res.cloudinary.com/hsrhivlhs/video/upload/v1761246015/1001-1003.mp3",
			},
			pages: {
				"dinosaur-sighting": {
					number: 0,
					link: "dinosaur-sighting",
					withinScene: 1003,
					content: [
						{
							kind: "blockHeading",
							link: "dinosaur-sighting",
							text: "Dinosaur Sighting!",
						},
						{
							kind: "blockPlaintext",
							text: "Be careful! A T-Rex might eat you!",
						},
						{
							kind: "blockLink",
							text: "Check out the mammoth",
							link: "hungry-mammoth",
						},
						{
							kind: "blockLink",
							text: "Then again....",
							link: "hidden-edmontosaurus",
						},
					],
				},
				"hidden-edmontosaurus": {
					number: 1,
					link: "hidden-edmontosaurus",
					withinScene: 1003,
					content: [
						{
							kind: "blockHeading",
							link: "hidden-edmontosaurus",
							text: "Hidden Edmontosaurus",
						},
						{
							kind: "blockPlaintext",
							text: "The Edmontosaurus is also hiding behind the text box. Use the arrow keys on your keyboard to move the text box and check him out if you're in 2D mode!",
						},
						{
							kind: "blockLink",
							text: "Back",
							link: "dinotastic",
						},
					],
				},
			},
		},
		{
			id: 1004,
			title: "hungry mammoth",
			image: {
				id: 1015,
				url: "https://res.cloudinary.com/hsrhivlhs/image/upload/c_scale,w_2500/v1757593315/1001-1004.jpg",
				thumbnailUrl:
					"https://res.cloudinary.com/hsrhivlhs/image/upload/w_288,h_192/v1757593315/1001-1004.jpg",
			},
			link: "hungry-mammoth",
			isOpeningScene: false,
			pages: {
				"the-mammoth-is-hungry": {
					number: 0,
					link: "the-mammoth-is-hungry",
					withinScene: 1004,
					content: [
						{
							kind: "blockHeading",
							link: "the-mammoth-is-hungry",
							text: "The Mammoth is hungry...",
						},
						{
							kind: "blockPlaintext",
							text: "Mammoths were vegetarians. Darwin is less than impressed....",
						},
						{
							kind: "blockLink",
							text: "The anthropology hall",
							link: "anthropology",
						},
					],
				},
			},
		},
		{
			id: 1005,
			title: "castle hill",
			image: {
				id: 1016,
				url: "https://res.cloudinary.com/hsrhivlhs/image/upload/c_scale,w_2500/v1757593323/1001-1005.jpg",
				thumbnailUrl:
					"https://res.cloudinary.com/hsrhivlhs/image/upload/w_288,h_192/v1757593323/1001-1005.jpg",
			},
			link: "castle-hill",
			isOpeningScene: false,
			pages: {
				"antimonarchists-of-the-hill": {
					number: 0,
					link: "antimonarchists-of-the-hill",
					withinScene: 1005,
					content: [
						{
							kind: "blockHeading",
							link: "antimonarchists-of-the-hill",
							text: "Anti-monarchists of the Hill!",
						},
						{
							kind: "blockPlaintext",
							text: "At the summit of Oxford...",
						},
						{
							kind: "blockLink",
							text: "A bit of history...",
							link: "well",
						},
					],
				},
			},
		},
		{
			id: 1006,
			title: "well",
			image: {
				id: 1017,
				url: "https://res.cloudinary.com/hsrhivlhs/image/upload/c_scale,w_2500/v1757593332/1001-1006.jpg",
				thumbnailUrl:
					"https://res.cloudinary.com/hsrhivlhs/image/upload/w_288,h_192/v1757593332/1001-1006.jpg",
			},
			link: "well",
			isOpeningScene: false,
			pages: {
				"well-well": {
					number: 0,
					link: "well-well",
					withinScene: 1006,
					content: [
						{
							kind: "blockHeading",
							link: "well-well",
							text: "Well well....",
						},
						{
							kind: "blockPlaintext",
							text: "13th Century Well-ness?",
						},
						{
							kind: "blockLink",
							text: "To the castle prison",
							link: "prison",
						},
					],
				},
			},
		},
		{
			id: 1007,
			title: "prison",
			image: {
				id: 1018,
				url: "https://res.cloudinary.com/hsrhivlhs/image/upload/c_scale,w_2500/v1757593340/1001-1007.jpg",
				thumbnailUrl:
					"https://res.cloudinary.com/hsrhivlhs/image/upload/w_288,h_192/v1757593340/1001-1007.jpg",
			},
			link: "prison",
			isOpeningScene: false,
			pages: {
				"castle-prison": {
					number: 0,
					link: "castle-prison",
					withinScene: 1007,
					content: [
						{
							kind: "blockHeading",
							link: "castle-prison",
							text: "Castle Prison",
						},
						{
							kind: "blockPlaintext",
							text: "Is it a castle? Not for a long time! Prison-turned-museum-and-hotel now!",
						},
						{
							kind: "blockLink",
							text: "Back home",
							link: "marston-meadows-bridge",
						},
					],
				},
			},
		},
		{
			id: 1008,
			title: "anthropology",
			image: {
				id: 1019,
				url: "https://res.cloudinary.com/hsrhivlhs/image/upload/c_scale,w_2500/v1757593349/1001-1008.jpg",
				thumbnailUrl:
					"https://res.cloudinary.com/hsrhivlhs/image/upload/w_288,h_192/v1757593349/1001-1008.jpg",
			},
			link: "anthropology",
			isOpeningScene: false,
			pages: {
				"the-loot": {
					number: 0,
					link: "the-loot",
					withinScene: 1008,
					content: [
						{
							kind: "blockHeading",
							link: "the-loot",
							text: "The loot...",
						},
						{
							kind: "blockPlaintext",
							text: "The second Pitt Rivers hall/haul....",
						},
						{
							kind: "blockLink",
							text: "Off to Castle Hill",
							link: "castle-hill",
						},
					],
				},
			},
		},
	],
	createdAt: new Date(),
	imageUrl:
		"https://res.cloudinary.com/hsrhivlhs/image/upload/w_288,h_192/v1757504789/1001-1001.jpg",
};

export default loopingStory;
