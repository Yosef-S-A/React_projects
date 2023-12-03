// The REACTDOM variable is a global variable from the React DOM CDN
// It has render method. Accepts two parameters: HTML element and DOM selector
// (i.e. What and where to add)
// e.g. ReactDOM.render(<h1>Hello, everyone!</h1>, document.getquerySelector("#root"));
ReactDOM.render(<h1>Hello, everyone!</h1>, document.getElementById("root"));

// Exercise
ReactDOM.render(
    <ul>
        <li>Item 1</li>
        <li>Item 2</li>
    </ul>, 
    document.getElementById("list")
);

function MainContent() {
    return <h1>I'm learning React!</h1>;
};

ReactDOM.render(
    <div>
        <MainContent />
    </div>,
    document.getElementById("components")
)