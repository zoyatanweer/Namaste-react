import { useState } from "react";

const User = ({ name }) => {
  const [count] = useState(0);
  const [count2] = useState(2);
  return (
    <div className="user-card">
      <p>Count = {count}</p>
      <p>Count2 = {count2}</p>
      <h1>Name: {name}</h1>
      <h3>Location: Bengaluru</h3>
    </div>
  );
};
export default User;
