export const getBookList = () => {
	return new Promise((resolve) => {
		setTimeout(() => {
			resolve(() => {
				return [
					{
						id: "1",
						isbn: "0-8783-3579-X",
						title: "Paperino alla scoperta del mondo",
						genre: "fantascienza",
						author: "Pippo e pluto",
					},
				];
			});
		}, 2000);
	});
};


/* export const getBookList = async () => {
	try {

		const res = await fetch("https://jsonplaceholde.typicode.com/users");
		return res.json()

	} catch (error) {
		throw new Error("Error:", error)

	}
};  */