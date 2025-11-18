type WithId = { id?: number };

type Persistent<T extends WithId> = Omit<T, "id"> & { id: number };

export type Author = {
	id: number;
	name: string;
	email: string;
};

export type Audio = WithId & {
	url: string;
};

export type PersistentAudio = Persistent<Audio>;

export type Image = WithId & {
	url: string;
	thumbnailUrl: string;
};

export type PersistentImage = Persistent<Image>;

export type Scene = WithId & {
	title: string;
	content: string;
	isOpeningScene: boolean;
	image?: Image | null;
	audio?: Audio | null;
};

export type Story = WithId & {
	title: string;
	scenes: Scene[];
	author: Omit<Author, "email">;
};

export type PersistentScene = Persistent<Scene>;

export type PersistentStory = Omit<Persistent<Story>, "scenes"> & {
	scenes: PersistentScene[];
	publishedOn: Date | null;
};
