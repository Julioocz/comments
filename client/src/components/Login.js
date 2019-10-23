import React from "react";
import PropTypes from "prop-types";
import { useUser } from "../user-context";
import Button from "./Button";
import { useInput } from "../lib/hooks";

const Login = props => {
  const [name, handleNameChange] = useInput("");
  const { setUser } = useUser();

  const handleSubmit = event => {
    event.preventDefault();
    name.length > 3
      ? setUser(name)
      : alert("User name must have more than 3 characters");
  };

  return (
    <div className="mt-10 w-full">
      <form onSubmit={handleSubmit} className="bg-white rounded p-4">
        <p className="mb-4 text-xl">Input your name to get started</p>
        <div className="flex w-10/12">
          <input
            className="focus:outline-none bg-gray-200 py-1 px-2 w-1/2 flex-grow"
            placeholder="Your Name"
            value={name}
            onChange={handleNameChange}
          />
          <Button className="rounded-l-none">Save</Button>
        </div>
      </form>
    </div>
  );
};

Login.propTypes = {};

export default Login;
