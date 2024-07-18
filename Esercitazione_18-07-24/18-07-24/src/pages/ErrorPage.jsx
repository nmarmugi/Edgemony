import { useRouteError } from "react-router-dom"

function ErrorPage() {
	const error = useRouteError();
	console.error(error);
	return (
		<div>
			<h1>OPS!</h1>
			<p>Errore!</p>
			<p>{error.statusText || error.message}</p>
		</div>
	)
}

export default ErrorPage