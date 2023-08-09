import { useEffect, useState } from "react";
import { FiSearch } from "react-icons/fi";

const Searchbox = ({ setApi, theme, setInvalidUser }) => {
  const [inputVal, setInputVal] = useState("");
  const axios = require("axios").default;

  function fetchApi(params) {
    const urls = "https://api.github.com/users/" + params;
    axios
      .get(urls)
      .then((response) => {
        setApi(response.status === 200 && response.data);
      })
      .catch((error) => {
        setApi("Error");
        setInvalidUser(inputVal);
      });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchApi(inputVal);
  };

  const handleChange = (e) => {
    setInputVal(e.target.value);
  };

  useEffect(() => {
    fetchApi("0me9a");
  }, []);

  return (
    <div className="search column">
      <form onSubmit={(e) => handleSubmit(e)} className={theme}>
        <label htmlFor="search">
          <FiSearch className="icon" />
          <span className={`${theme}-txt`}></span>
        </label>
        <input
          type="search"
          name="search"
          id="search"
          value={inputVal}
          onChange={(e) => handleChange(e)}
          placeholder={"   Search Github username..."}
        />
        <button type="submit" title="search">
          search
        </button>
      </form>
    </div>
  );
};
export default Searchbox;
