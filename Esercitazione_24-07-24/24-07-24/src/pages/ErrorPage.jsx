import ErrorComponent from "../components/ErrorComponent";
import { useRouteError } from "react-router-dom";
import { Link } from "react-router-dom";

function ErrorPage() {
  const error = useRouteError();
  return (
    <div>
      <ErrorComponent message={error.statusText || error.message}>
        <Link className="bg-green-300" to="/">
          Go back Home
        </Link>
      </ErrorComponent>
    </div>
  );
}

export default ErrorPage;
