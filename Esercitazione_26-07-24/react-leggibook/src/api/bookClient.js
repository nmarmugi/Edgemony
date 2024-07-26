export const getBookList = async () => {
	try {
		const res = await fetch("http://localhost:3000/books");
		return res.json()
	} catch (error) {
		throw Error(error)
	}
};


export const getBookDetail = async (id) => {
	try {
		const res = await fetch(`http://localhost:3000/books-detail/${id}`);
		return res.json()
	} catch (error) {
		throw Error(error)
	}
};

export const addBook = async (body) => {

	const id = self.crypto.randomUUID();
	const bookNoDetail = { id, title: body.title, author: body.author, isbn: body.isbn, genre: body.genre }

	try {

		await fetch("http://localhost:3000/books", {
			method: "POST",
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify(bookNoDetail)
		})


		const res = await fetch("http://localhost:3000/books-detail", {
			method: "POST",
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify({ id, ...body, "cover": "https://blog-cdn.reedsy.com/directories/admin/attachments/large_guerin-cover-7156b8.jpg", })
		})
		return res.json()
	} catch (error) {
		throw Error(error)
	}
}

export const editBook = (body) => {
	return new Promise((resolve) => {
		setTimeout(() => {
			resolve(
				{
					...body,
				}
			)
		}, 3000)
	})
}

export const deleteBook = async (id) => {
	try {

		await fetch(`http://localhost:3000/books/${id}`, {
			method: "DELETE"
		});

		const res = await fetch(`http://localhost:3000/books-detail/${id}`, {
			method: "DELETE"
		});

		return res.json()
	} catch (error) {
		throw Error(error)
	}
}
