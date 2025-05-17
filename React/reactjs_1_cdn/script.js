// react work as bellow:

//1 : virtual dom (work in div that id is root)
//2: process (make a process in that div)
//3: render


// virtual dom
const root=ReactDOM.createRoot(document.getElementById("root"));

// process
const msg =React.createElement("h1", null, "React app"); // or in easy way like bellow with babel libarary in html
//const msg = <h1>Hello from JSX!</h1>;

// render
root.render(msg);