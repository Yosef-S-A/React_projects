// The REACTDOM variable is a global variable from the React DOM CDN
// It has render method. Accepts two parameters: HTML element and DOM selector
// (i.e. What and where to add)
// e.g. ReactDOM.render(<h1>Hello, everyone!</h1>, document.getquerySelector("#root"));
ReactDOM.render(<h1>Hello, everyone!</h1>, document.getElementById("root"));
