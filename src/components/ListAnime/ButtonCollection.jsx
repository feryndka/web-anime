"use client";

import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ButtonCollection = ({ mal_id, user_email, image, title }) => {
  const [isCreate, setIsCreate] = useState(false);

  const handleCollection = async (e) => {
    e.preventDefault();

    const data = { mal_id, user_email, image, title };
    const res = await fetch("/api/v1/collection", {
      method: "POST",
      body: JSON.stringify(data),
    });
    const collection = await res.json();

    if (collection.isCreate) {
      setIsCreate(true);
      toast.success("Success!", {
        position: "bottom-left",
        autoClose: 3000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  };

  return (
    <div>
      {!isCreate && (
        <button
          onClick={handleCollection}
          className="px-2 py-1 bg-color-accent text-color-dark hover:bg-color-primary"
        >
          Add Collection
        </button>
      )}
      <ToastContainer
        position="bottom-left"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </div>
  );
};

export default ButtonCollection;
