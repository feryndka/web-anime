"use client";
import { useRouter } from "next/navigation";
import { useRef } from "react";
import { IoSearch } from "react-icons/io5";

const InputSearch = () => {
  const searchRef = useRef();
  const router = useRouter();

  const handleSearch = (event) => {
    if (event.key === "Enter" || event.type === "click") {
      event.preventDefault();
      const keyword = searchRef.current.value;
      router.push(`/search/${keyword}`);
    }
  };

  return (
    <div className="relative">
      <input
        type="text"
        placeholder="Search anime"
        className="w-full p-1 rounded hover:shadow-lg"
        ref={searchRef}
        onKeyDown={handleSearch}
      />
      <button className="absolute top-1.5 end-2" onClick={handleSearch}>
        <IoSearch size={20} />
      </button>
    </div>
  );
};

export default InputSearch;
