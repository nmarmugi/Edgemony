import { useState } from "react";
import { addBook } from "../api/bookClient";
import { useNavigate } from "react-router-dom";
import BookForm from "../components/BookForm";
import { labels } from "../data/labels";
import { toast } from "react-toastify";

function Create() {
  const navigate = useNavigate();

  const [isError, setIsError] = useState({
    message: "",
    isError: false,
  });

  const handleCreate = async (body) => {
    try {
      const res = await addBook(body);
      console.log(res);
      toast.success(`${body.title} added!`, {
        position: "top-right",
      });
      navigate("/");
    } catch (error) {
      toast.error(`${error}!`, {
        position: "top-right",
      });
      setIsError((prevState) => {
        return { ...prevState, message: error.message, isError: true };
      });
    }
  };

  return (
    <div>
      <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-lg">
          <h1 className="text-center text-2xl font-bold text-indigo-600 sm:text-3xl">
            {labels.createInsertBookHere}
          </h1>

          <p className="mx-auto mt-4 max-w-md text-center text-gray-500">
            Inserisci title, author, genre, isbn, description
          </p>

          <BookForm onSubmit={handleCreate} />
          {isError.isError && (
            <div
              role="alert"
              className="rounded border-s-4 border-red-500 bg-red-50 p-4"
            >
              <strong className="block font-medium text-red-800">
                {" "}
                Something went wrong{" "}
              </strong>

              <p className="mt-2 text-sm text-red-700">{isError.message}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Create;
