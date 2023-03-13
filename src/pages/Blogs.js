import { useState, useEffect } from "react";
import "../../src/App.css";
import axios from "axios";


const Blogs = () => {
  const [myData, setMyData] = useState([]);

  /* // using Promises
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((response) => setMyData(response.data));
  }, []);*/

  //using async-await

  const getApiData = async () => {
    const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
    setMyData(res.data);
  };

  useEffect(() => {
    getApiData();
  }, []);

  return (
    <>
      <h1 className="">Axios Tutorial</h1>

      <div className="grid">
        {myData.slice(0, 12).map((post) => {
          const { body, id, title } = post;
          return (
            <div key={id} className="card">
              <h2>{title.slice(0, 15).toUpperCase()}</h2>
              <p>{body.slice(0, 100)}</p>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Blogs;
