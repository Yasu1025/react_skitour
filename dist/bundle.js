"use strict";

// const {render} = ReactDOM;

ReactDOM.render(React.createElement(
	"h1",
	{ id: "title", className: "header", style: { backgroundColor: "orange",
			color: "white" } },
	"Hello World!"
), document.getElementById("react-container"));
