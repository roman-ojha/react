/*
    -> npm i react-toastify
    -> https://fkhadra.github.io/react-toastify/introduction
    -> https://www.npmjs.com/package/react-toastify
    -> https://github.com/fkhadra/react-toastify
*/

import React from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ReactToastify = () => {
  const notify = () =>
    toast("Wow so easy!", {
      position: "top-left",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });

  // With Promise
  const res = await toast.promise(
    fetch("/changeProfile/imgUrl", {
      method: "POST",
      body: {
        imageUrl,
      },
    }),
    {
      pending: "Pending",
      success: "Success",
      error: "Error",
    }
  );
  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          height: "100vh",
        }}
      >
        <button
          style={{
            width: "200px",
            height: "100px",
            fontSize: "40px",
            backgroundColor: "red",
            borderWidth: "0pxf,",
            cursor: "pointer",
          }}
          onClick={notify}
        >
          Notify!
        </button>
        <ToastContainer
          position="top-left"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
      </div>
    </div>
  );
};

export default ReactToastify;
