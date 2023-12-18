import React from "react";
import { useRouteError } from "react-router-dom";

const Error = () => {
  let err = useRouteError();

  return (
    <div>
      <h1>this is error page </h1>
      <h2>MOYE MOYE</h2>
      <h1>{err.status}</h1>
    </div>
  );
};

export default Error;
