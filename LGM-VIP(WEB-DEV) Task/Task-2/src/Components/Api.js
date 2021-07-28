import React, { useEffect, useState } from "react";
import "./Api.css";

const Api = () => {
  const [data, setData] = useState([]);

  const getApiData = async () => {
    try {
      const res = await fetch("https://reqres.in/api/users?page=1");
      const data = await res.json();
      console.log(data.data);
      setData(data.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getApiData();
  }, []);

  return (
    <div>
      <div className="all">
        {data.map((curElem, ind) => {
          return (
            <div className="each" key={ind}>
              <img src={curElem.avatar} alt="new" className="img" />
              <p>
                ID: {curElem.id} <br />
                <br />
                Name: {curElem.first_name} {curElem.last_name}
                <br />
                <br />
                Email: {curElem.email}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Api;
