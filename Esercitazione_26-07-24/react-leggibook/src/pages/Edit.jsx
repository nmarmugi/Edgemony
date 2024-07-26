import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { getBookDetail, editBook } from "../api/bookClient";
import BookForm from "../components/BookForm";
import { toast } from "react-toastify";

function Edit() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [book, setBook] = useState(null);
  const [isError, setIsError] = useState({ message: "", isError: false });
  const [isLoading, setIsLoading] = useState(true);

  const getBook = async (id) => {
    try {
      const data = await getBookDetail(id);
      setBook(data);
    } catch (error) {
      console.log(error);
      setIsError((prevState) => {
        return { ...prevState, message: error.message, isError: true };
      });
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getBook(id);
  }, []);

  const handleEdit = async (body) => {
    try {
      const res = await editBook({ id, ...body });
      toast.success(`Libro ${body.title} modificato con successo!`, {
        position: "top-right",
      });
      navigate(`/books/${id}`, { replace: true });
    } catch (error) {
      toast.error(`${error}!`, {
        position: "top-right",
      });
      setIsError((prevState) => {
        return { ...prevState, message: error.message, isError: true };
      });
    }
  };

  if (isLoading) return <p>is loading...</p>;

  return (
    <div>
      <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-lg">
          <h1 className="text-center text-2xl font-bold text-indigo-600 sm:text-3xl">
            Edit the book here
          </h1>

          <p className="mx-auto mt-4 max-w-md text-center text-gray-500">
            Inserisci title, author, genre, isbn, description
          </p>
          <BookForm value={book} onSubmit={handleEdit} />
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

export default Edit;
