import { useFormik } from "formik";
import React from "react";
import { v4 as uuidv4 } from "uuid";

const NewTodo = ({ storeTodos }) => {
  const formik = useFormik({
    initialValues: {
      title: "",
      description: "",
    },
    onSubmit: (values) => {
      storeTodos({ id: uuidv4(), ...values });
      formik.resetForm();
    },
  });

  return (
    <div className="flex justify-center mb-6">
      <div className="md:w-1/4  flex-col justify-center">
        <h1 className="mb-3 text-center text-3xl font-bold">
          Create your New Todo
        </h1>
        <form className="bg-[#2c2c2c] p-4" onSubmit={formik.handleSubmit}>
          <div className="mb-3">
            <label className="text-2xl font-bold" htmlFor="title">
              Title
            </label>
            <br />
            <input
              className="w-full text-black px-3 py-1 rounded"
              type="text"
              name="title"
              id="title"
              onChange={formik.handleChange}
              required
              value={formik.values.title}
            />
          </div>
          <div className="mb-3">
            <label className="text-2xl font-bold" htmlFor="description">
              Description
            </label>
            <br />
            <input
              className="w-full text-black px-3 py-1 rounded"
              type="text"
              name="description"
              id="description"
              onChange={formik.handleChange}
              required
              value={formik.values.description}
            />
          </div>
          <div className="flex justify-center">
            <button
              className="bg-blue-600 px-3 py-4 rounded-md font-bold align-middle text-center"
              type="submit"
            >
              Create New Todo
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default NewTodo;
