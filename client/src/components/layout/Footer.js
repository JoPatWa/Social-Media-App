import React from "react";

//Functional Component its very simple and doesn't change so use this
export default () => {
  return (
    <footer className="bg-dark text-white-mt-5 p-4 text-center">
      Copyright &copy; {new Date().getFullYear()} DevConnector
    </footer>
  );
};
