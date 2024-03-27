"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const InputComment = ({ mal_id, user_email, user_name, title }) => {
  const [comment, setComment] = useState("");
  const [isCreate, setIsCreate] = useState(false);
  const router = useRouter();

  const handleInput = (e) => {
    setComment(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = { mal_id, user_email, user_name, comment, title };
    const res = await fetch("/api/v1/comment", {
      method: "POST",
      body: JSON.stringify(data),
    });
    const postComment = await res.json();

    if (postComment.isCreate) {
      setIsCreate(true);
      setComment("");
      router.refresh();
      toast.success("Success!", {
        position: "top-right",
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
      <textarea
        onChange={handleInput}
        value={comment}
        className="w-full h-32 my-2 p-2 text-color-dark"
        placeholder="Comment here...."
      />
      <button
        onClick={handleSubmit}
        className="transition-all px-4 py-2 hover:bg-color-primary bg-color-accent text-color-secondary"
      >
        Send Comment
      </button>
    </div>
  );
};

export default InputComment;
