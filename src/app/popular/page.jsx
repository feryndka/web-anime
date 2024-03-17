"use client"

import ListAnime from "@/components/ListAnime";
import Header from "@/components/Popular/Header";
import Pagination from "@/components/Popular/Pagination";
import React, { useEffect, useState } from "react";

const Popular = () => {
  const [page, setPage] = useState(1)
  const [anime, setAnime] = useState([])

  const fetchData = async() => {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/top/anime?page=${page}`)
    const data = await response.json()
    setAnime(data)
  }

  useEffect(() => {
    fetchData()
  }, [page])

  return (
    <>
      <Header title={`ANIME TERPOPULAR #${page}`} /> 
      <ListAnime api={anime} />
      <Pagination page={page} setPage={setPage} lastPage={anime?.pagination?.last_visible_page} />
    </>
  );
};

export default Popular;
