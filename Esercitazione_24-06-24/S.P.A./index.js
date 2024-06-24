import { createHeader } from "./header.js";
import { createSection } from "./main.js";
import { createFooter } from "./footer.js";

window.addEventListener("DOMContentLoaded", async () => {
	const appEl = document.querySelector("#app");
	if (appEl) {
		await renderPage(appEl);
	}
});

async function renderPage(appEl) {
	const header = createHeader();
	const main = await createSection();
	const footer = createFooter();
	const html = header + main + footer;
	appEl.innerHTML = html;
}