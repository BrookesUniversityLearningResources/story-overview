import type { NonEmptyArray } from "../../../../util/nonEmptyArray.js";
import type { Page, PublishedScene } from "../types.js";

export default function sortPages(
	pages: PublishedScene["pages"],
): NonEmptyArray<Page> {
	// the explicit cast is fine 'cos' we know there is at least one page
	const sortedPages = [...Object.values(pages)] as NonEmptyArray<Page>;
	sortedPages.sort(inAscendingOrderOfPageNumber) as NonEmptyArray<Page>;
	return sortedPages;
}

function inAscendingOrderOfPageNumber(a: Page, b: Page): number {
	return a.number - b.number;
}
