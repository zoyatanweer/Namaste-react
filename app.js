// ReactElemet(Object) => HTML(Browser understands)

// const parent = React.createElement(
//   "div",
//   { id: "parent" },
//   React.createElement("div", { id: "child" }, [
//     React.createElement("h1", { id: "heading" }, "I am h1 tag!"),
//     React.createElement("h2", { id: "heading" }, "I am h2 tag!"), //sibling
//   ])
// );
// console.log(parent);

const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child1" }, [
    React.createElement("h1", { id: "heading1" }, "I am h1 tag"),
    React.createElement("h2", { id: "heading2" }, "I am h2 tag"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", { id: "heading1" }, "I am h1 tag"),
    React.createElement("h2", { id: "heading2" }, "I am h2 tag"),
  ]),
]);
console.log(parent);
// const heading = React.createElement(
//   "h1",
//   { id: "heading", xyz: "abc" },
//   "Hello world from React!"
// );
// console.log(heading);
const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);
root.render(parent);
