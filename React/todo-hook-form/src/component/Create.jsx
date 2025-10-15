import React from "react";
import { nanoid } from "nanoid";
import { useForm } from "react-hook-form";

const Create = (props) => {
  const todos = props.todos;
  const setTodos = props.setTodos;

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const submithandler = (data) => {
    data.isCompleted = false;
    data.id = nanoid();
    console.log("data", data);
    const copytodos = [...todos];
    copytodos.push(data);
    setTodos(copytodos);

    reset();
  };

  return (
    <div className="w-[60%] p-10">
      <h1 className="mb-10 text-5xl font-thin">
        Set <span className="text-red-500">Reminders</span>
      </h1>
      <form onSubmit={handleSubmit(submithandler)}>
        <input
          {...register("title", { required: "title can not be empty" })}
          className="border-b w-full font-thin text-2xl p-2 outline-0"
          type="text"
          id="title"
          placeholder="Enter your task ..."
        />
        <small className="text-orange-500">{errors?.title?.message}</small>
        <br />
        <button
          className="text-xl px-10 py-2 mt-8 border rounded"
          type="submit"
        >
          Add task
        </button>
      </form>
    </div>
  );
};

export default Create;
