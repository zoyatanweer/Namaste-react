import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    console.log(props);

    this.state = {
      count: 0,
      count2: 2,
    };
  }

  render() {
    const { name } = this.props;
    const { count, count2 } = this.state;
    console.log(count2);

    return (
      <div className="user-card">
        <p>Count = {count}</p>
        <p>Count2 = {count2}</p>
        <h1>Name: {name}</h1>
        <h3>Location: Bengaluru</h3>
      </div>
    );
  }
}

export default UserClass;
