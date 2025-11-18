import { z } from "zod";

import type {
	Image,
	PersistentImage,
	PersistentScene,
	PersistentStory,
} from "../index.js";

export const ImageNameModel = z
	.string()
	.min(3)
	.regex(/\d+-\d+/);

export type ImageName = z.infer<typeof ImageNameModel>;

export function isImageName(name: string): name is ImageName {
	return ImageNameModel.safeParse(name).success;
}

export function imageName(
	storyId: PersistentStory["id"],
	sceneId: PersistentScene["id"],
): ImageName {
	return `${storyId}-${sceneId}`;
}

export function isPersistentImage(
	image: Image | null | undefined,
): image is PersistentImage {
	return image?.id !== null && image?.id !== undefined;
}
