import React, { useState } from "react";
import Input_suggest from "./Input_suggest";
import { suggest_list } from "./Header_CSS";
const Input_search = ({ setnameLocal, nameLocal, apiFetch, inforWeather }) => {
  const keyEnter = (key) => {
    if (key === "Enter") {
      apiFetch();
      setnameLocal("");
    }
  };
  const [showSuggest, setShowSuggest] = useState(false);
  const handleFocus = () => {
    setShowSuggest(true);
  };
  document.onkeydown = (e) => {
    if (e.key == "Enter" || e.keyCode == 27) setShowSuggest(false);
  };

  return (
    <div>
      <input
        onFocus={handleFocus}
        onChange={(e) => setnameLocal(e.target.value)}
        onKeyDown={(e) => keyEnter(e.key)}
        value={nameLocal}
        type="text"
        placeholder="Tỉnh thành phố "
      />
     {/* <Input_suggest
          apiFetch={apiFetch}
          nameLocal={nameLocal}
          setnameLocal={setnameLocal}
          setShowSuggest={setShowSuggest}
        /> */}
      {showSuggest ? (
        <Input_suggest
          apiFetch={apiFetch}
          nameLocal={nameLocal}
          setnameLocal={setnameLocal}
          setShowSuggest={setShowSuggest}
        />
      ) : (
        ""
      )}
    </div>
  );
};

export default Input_search;
