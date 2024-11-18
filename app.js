const heading = React.createElement("h1",{id:"heading"},"hello world");
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading)


//nested html div inside div and inside child div h1 tag

const parent=React.createElement("div",{id:"parent"},
    React.createElement("div",{id:"child"},
        React.createElement("h1",{},"i am nested h1 in divs")
    )
)
console.log(parent)
root.render(parent)


//for siblings

const parent1=React.createElement("div",{id:"parent"},
    [
        React.createElement("div",{id:"child1"},
            [React.createElement("h1",{},"i am nested h1 in divs"),
            React.createElement("h1",{},"i am second  nested h1 in divs")]),
        React.createElement("div",{id:"child2"},
            [React.createElement("h1",{},"i am nested h2 in divs"),
            React.createElement("h1",{},"i am second  nested h2 in divs")])
    ]);
console.log(parent1)
root.render(parent1) 