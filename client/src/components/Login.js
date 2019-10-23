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
    <div className="w-1/2 m-auto">
      <form onSubmit={handleSubmit} className="bg-white rounded p-4">
        <p className="mb-4 text-xl">Input your name</p>
        <input
          className="focus:outline-none bg-gray-200 py-2 w-full px-2 w-1/2 mb-4"
          placeholder="Your Name"
          value={name}
          onChange={handleNameChange}
        />
        <Button className="w-full">Save</Button>
      </form>
    </div>
  );
};

Login.propTypes = {};

export default Login;
