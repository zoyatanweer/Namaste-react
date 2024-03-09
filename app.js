import React from "react";
import ReactDOM from "react-dom/client";

//React Element
const heading = <h1>Namaste React from JSX</h1>;
// console.log(heading);

//React Functional Component using arrow function
const Title = () => <h1>Namaste React using JSX</h1>;

//If not using arrow function, then use normal function like this:
// const Title = function () {
//   return <h1>Namaste React Title 2</h1>;
// };

const number = 100;

//React Functional Component
const HeadingComponent = () => (
  <div class="container">
    <h2>{100 + 200}</h2>
    <h2>{number}</h2>
    <h2>{console.log("hi i am from console")}</h2>
    {heading}

    {Title()}
    <Title />
    <Title></Title>
    <h1>Namaste React Functional Component</h1>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent />);
