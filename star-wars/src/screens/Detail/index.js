import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { get } from "../../helper/api";

const Detail = () => {
  const [person, setPerson] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    get(`people/${id}`).then((response) => setPerson(response));
  }, [id]);

  if(!person){
    return <h1>Loading...</h1>
  }

  return <h1>{person.name}</h1>;
};

export default Detail;
