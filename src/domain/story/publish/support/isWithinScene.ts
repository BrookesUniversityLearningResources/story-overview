import type { Page, PublishedScene } from "../types.js";

export default function isWithinScene(
	scene: PublishedScene,
	page: Page,
): boolean {
	return scene.id === page.withinScene;
}
