// const heading = document.createElement("h1");
// heading.innerHTML = "Not rendered written using js";

// const root = document.getElementById("root");

// root.appendChild(heading);   
import React from "react";
import ReactDOM from "react-dom/client";


const reactdivElement = React.createElement(
    "div",
    { id: "bg-container" },
    React.createElement("div", { id: "inner-container" }, [
        React.createElement("h1", { id: "heading1" }, "This is h1 heading"),
        React.createElement("h2", { id: "heading2" }, "This is h2 heading"),
        React.createElement("h3", { id: "heading2" }, "This is h3 heading")
    ])
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(reactdivElement);


// Bundler concept
// npm==>npm init
// while enter the command npm init and terminal will ask some basic details and enter the details, then you will get a package.json file in your project.
// next type the npm install -D parcel,to get the parcel  package into our project beacuse with parcel we can do a lot of things.....now we got node modules,package-lock.json file in our project.
//next type npx parcel index.html ..here parcel is basically cretaes a server and now our app is hosted on local host:1234. 
// and also now we got dist and parcel-cache in our project
//features of parcel
//while pushing to git,create gitignore folder and add these dist,parcel-cache and node modules.dont push regenerate files to github repository
//here only i removed cdn links and inject react from npm ...so npm install react and npm install react-dom in termianal to  get react into our project
//for production build,type npx parcel build index.html]
//for execute our project,run npm parcel index.html in our terminal.because we didnt put "start":parcel index.html in scripts in package.json file.
