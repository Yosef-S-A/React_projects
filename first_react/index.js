// The REACTDOM variable is a global variable from the React DOM CDN
// It has render method. Accepts two parameters: HTML element and DOM selector
// (i.e. What and where to add)
// e.g. ReactDOM.render(<h1>Hello, everyone!</h1>, document.getquerySelector("#root"));
const element = <h1 className="header">Hello, everyone!</h1>
console.log(element);
ReactDOM.render(element, document.getElementById("root"));

const page = (
    <div>
        <h1 className="header">This is JSX</h1>
        <p>This is a paragraph</p>
    </div>
);

ReactDOM.render(page, document.getElementById("page"));

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
);

// Challenge - recreate ReactDOM.render(<h1>Hello, React!</h1>, document.getElementById("root"))
// in vanilla JS by creating and appending an h1 to our div#root

/*
- Create a new h1 element
- Give it some textContent
- Give it a class name of "header"
- append it as a child of the div#root
*/

// const h1 = document.createElement("h1");
// h1.textContent = "This is an imperative way to program";
// h1.className = "header"
// document.getElementById("imperative").append(h1);

/* 
Challenge: 

Create a navbar in JSX:
    - Use the semantic `nav` element as the parent wrapper
    - Have an h1 element with the brand name of your "website"
    - Insert an unordered list for the other nav elements
        - Inside the `ul`, have three `li`s for "Pricing",
        "About", and "Contact"
    - Don't worry about styling yet - it'll just be plain-looking HTML for now
*/

const navbar = (
    <nav>
        <h1>Patristix</h1>
        <ul>
            <li>Pricing</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
    </nav>
);

ReactDOM.render(navbar, document.getElementById("nav"));