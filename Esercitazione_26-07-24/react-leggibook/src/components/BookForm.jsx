import { useState } from "react";

function BookForm({ value, onSubmit }) {
  const initialState = {
    title: value?.title || "",
    author: value?.author || "",
    genre: value?.genre || "",
    description: value?.description || "",
    isbn: value?.isbn || "",
  };

  const [form, setForm] = useState(initialState);
  const [isLoading, setIsLoading] = useState(false);

  const titleValidation = !form.title.length;
  const authorValidation = !form.author.length;
  const genreValidation = !form.genre.length;
  const descriptionValidation = !form.description.length;
  const isbnValidation = !form.isbn.length;

  const formValidation =
    titleValidation ||
    authorValidation ||
    genreValidation ||
    descriptionValidation ||
    isbnValidation;

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setForm((prevState) => {
      return { ...prevState, [name]: value };
    });
  };

  return (
    <div>
      <form
        onSubmit={async (e) => {
          e.preventDefault();
          setIsLoading(true);
          await onSubmit(form);
          setIsLoading(false);
        }}
        action="#"
        className="mb-0 mt-6 space-y-4 rounded-lg p-4 shadow-lg sm:p-6 lg:p-8"
      >
        <div>
          <label className="sr-only">Title</label>

          <div className="relative">
            <input
              name="title"
              onChange={handleChange}
              type="text"
              value={form.title}
              className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
              placeholder="Enter title"
            />
          </div>
        </div>

        <div>
          <label className="sr-only">Author</label>

          <div className="relative">
            <input
              name="author"
              onChange={handleChange}
              type="text"
              value={form.author}
              className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
              placeholder="Enter author"
            />
          </div>
        </div>

        <div>
          <label className="sr-only">ISBN</label>

          <div className="relative">
            <input
              name="isbn"
              onChange={handleChange}
              type="text"
              value={form.isbn}
              className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
              placeholder="Enter isbn"
            />
          </div>
        </div>

        <div>
          <label className="sr-only">Genre</label>

          <div className="relative">
            <input
              name="genre"
              onChange={handleChange}
              type="text"
              value={form.genre}
              className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
              placeholder="Enter genre"
            />
          </div>
        </div>
        <div>
          <label className="sr-only">Description</label>

          <div className="relative">
            <input
              name="description"
              onChange={handleChange}
              type="text"
              value={form.description}
              className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
              placeholder="Enter description"
            />
          </div>
        </div>

        {!isLoading ? (
          <button
            disabled={formValidation}
            type="submit"
            className={`block w-full rounded-lg bg-indigo-600 ${
              formValidation ? "bg-slate-400" : ""
            } px-5 py-3 text-sm font-medium text-white`}
          >
            Submit
          </button>
        ) : (
          <button disabled>Is Loading...</button>
        )}
      </form>
    </div>
  );
}

export default BookForm;
