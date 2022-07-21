import React, { useState, useEffect } from "react";
import { S_suggest } from "./Header_CSS";
const Input_suggest = ({
  setShowSuggest,
  apiFetch,
  setnameLocal,
  nameLocal,
}) => {
  const locals = localStorage.getItem("locations")
    ? JSON.parse(localStorage.getItem("locations"))
    : [];
  // const display= Array.from(new Set(locals))
  const handleClick = (e) => {
    console.log(e.target.innerHTML, "key của nó đây nha");
    setnameLocal(e.target.innerHTML);
    setShowSuggest(false);
    console.log("khi click thi nameLocal = ", nameLocal);
    nameLocal && apiFetch();
    document.querySelector(".InputSearch").blur();
    // setnameLocal('')
  };

  return (
    <S_suggest
      className="suggest_list"
      onMouseDown={(e) => {
        e.preventDefault();
      }}
    >
      {locals.reverse().map((iteam, index) => (
        <li
          onClick={(e) => {
            handleClick(e);
          }}
          key={index}
          //   onMouseDown={(e) => {
          //     e.preventDefault();
          //     console.log("first")
          //   }}
        >
          {iteam}
        </li>
      ))}
    </S_suggest>
  );
};

export default Input_suggest;
