import axios from "axios";
import React from "react";

import { useEffect, useState } from "react";
import UserData from "../components/UserData";

const API = "https://jsonplaceholder.typicode.com/users";

const Contact = () => {
  const [users, setUsers] = useState([]);
  const fetchUsers = async () => {
    try {
      const res = await axios.get(API);
      setUsers(res.data);
    } catch (e) {
      console.log(e);
    }
  };

  /* const fetchUsers = async (url) => {
    try {
      const res = await fetch(url);
      const data = await res.json();
      if (data.length > 0) {
        setUsers(data);
      }
      console.log(data);
    } catch (e) {
      console.error(e);
    }
  }; */

  useEffect(() => {
    fetchUsers(API);
  }, []);
  return (
    <>
      <address className="contact">You Can Contact Us.</address>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Address</th>
          </tr>
        </thead>
        <tbody>
          <UserData users={users} />
        </tbody>
      </table>
    </>
  );
};

export default Contact;
