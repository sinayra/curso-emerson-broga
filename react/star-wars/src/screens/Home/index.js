import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import { get, getIdFromUrl } from "../../helper/api";

const Home = () => {
  const [people, setPeople] = useState([]);

  useEffect(() => {
    get("people").then((response) => setPeople(response.results));
  }, []);

  if (!people || !people.length) {
    return <h1>Loading...</h1>;
  }

  const peopleList = people.map((p) => {
    const id = getIdFromUrl(p.url);
    return <li key={id}><Link to={`/detail/${id}`}>{p.name}</Link></li>;
  });

  return (
    <>
      <h1>Characters</h1>
      <ul>
        {peopleList}
      </ul>
    </>
  );
};

export default Home;
