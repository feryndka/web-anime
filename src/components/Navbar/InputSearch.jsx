"use client";
import { useRouter } from "next/navigation";
import { useRef } from "react";
import { IoSearch } from "react-icons/io5";

const InputSearch = () => {
  const searchRef = useRef();
  const router = useRouter();

  const handleSearch = (event) => {
    // event.key saat keyboard menekan enter
    // event.type saat button onclick

    const keyword = searchRef.current.value;

    if ((event.key === "Enter" || event.type === "click") && keyword.length !== 0) {
      event.preventDefault();
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
        // untuk keyboard menekan enter
      />
      <button className="absolute top-1.5 end-2" onClick={handleSearch}>
        <IoSearch size={20} />
      </button>
    </div>
  );
};

export default InputSearch;
