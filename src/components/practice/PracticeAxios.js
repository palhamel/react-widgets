import React, { useState, useEffect } from "react";
import axios from "axios";

const URL = "https://jsonplaceholder.typicode.com/users";

// Add code here to fetch some users with axios and the URL variable
// then update the 'users' piece of state

const AxiosFetchWithAsync = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get(URL);
      setUsers(result.data);
    };
    fetchData();
  }, []);

  // check API data in state:
  console.log("users from API:", users);

  // render text:
  const renderedUsers = users.map((user) => {
    return <li key={user.id}>{user.name}</li>;
  });

  return <ul>{renderedUsers}</ul>;
};

export default AxiosFetchWithAsync;

// Or a even more optimized solution:

/*


  useEffect(() => {
      const fetchData = async () => {
        const { data } = await axios.get(URL);
        setUsers(data);
      };
      fetchData();
    }, []);


*/
