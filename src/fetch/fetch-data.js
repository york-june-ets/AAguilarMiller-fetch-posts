export let posts = [];

async function getPosts() {
	const url = "https://jsonplaceholder.typicode.com/posts/";
	try {
		const response = await fetch(url);
		if (!response.ok) {
			throw new Error(`Response status: ${response.status}`);
		}

		const json = await response.json();
		posts.push(...json);
	} catch (error) {
		console.error(error.message);
	}
}

getPosts();
