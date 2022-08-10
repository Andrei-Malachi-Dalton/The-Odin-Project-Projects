//DOM - Document Object Model

/*The DOM (or Document Object Model) is a tree-like representation of the conecnts of a webpage - a tree of "nodes" with different relationships depending on how they're arranged.
    in the HTML document.*/

<div id="container">
  <div class="display"></div>
  <div class="controls"></div>
</div>

/*In the above example, the <div class="display"></div> is a "child" of <div id="container"></div> and a sibling to <div class="controls"></div>.
    Think of it like a family tree. <div id="container"></div> is a parent, with it's children on the next leve, each on their own "branch".*/

/*Targeting Nodes with Selectors*/

/*When working wiht the DOM, you use "selectors" to target the nodes you want to work with. You can use a combination of CSS-style selectors and relationship properties to target the nodes you want. 
- In the above example, you could use the following selectors to refer to <div class="display"></div>:
    * div.display
    * .display
    * #container > .display
    * div#container > div.display
You can also use relational selectors (i.e. firstElementChild or lastElementChild etc.) with special properties owned by the nodes. */

const container = document.querySelector('#container');
// selects the #container div (don't worry about the syntax, we'll get there)

console.dir(container.firstElementChild);                      
// selects the first child of #container => .display

const controls = document.querySelector('.controls');   
// selects the .controls div

console.dir(controls.previousElementSibling);                  
// selects the prior sibling => .display

/*DOM Methods
- When your HTML code is parsed by a web browser, it is concerted to the DOM. One of the primary differences is that these nodes are objects are objects that have many properties
and methods attached to them. These properties and methods are the primary tools we are going to use to manipulate our webpage with JavaScript. We'll start with the query
selectors - those that help you target nodes.*/

/* Query Selectors */
/* - element.querySelector(selector) returns a reference to the first match of selector
   - element.querySelectorAll(selectors) returns a "nodelist" containing references to all of the matches of the selectors.*/

/* Altering Elements */
/*
    - When you have a reference to an element, you can use that reference to alter the element's own properties. This allows you to do many useful alterations, 
    like adding/removing and altering attributes, changing classes, adding inline style information and more. */

const div = document.createElement('div');
//creates a new div referenced in the variable 'div'

/* Adding Inline Style */
div.style.color = 'blue';
//adds the indicated style rule

div.style.cssText = 'color: blue; background: white;';
//adds several style rules

div.setAttribute('style', 'color: blue; background: white;');
//adds several style rules

/* Events */
/* Events are actions that occur on your webpage such as mouse-clicks or keypresses.
    There are three primary ways to go about using Events, you can set the "on_event_" property on the DOM object in your JavaScript, or you can attach
    event listeners to the nodes in your JavaScript. Event listeners are the preferred method.*/

    //Using 3 methods to do the same thing
    //<button onclick="alert('Hello World')">Click Me</button>
    //This is less ideal because it clutters the HTML with JavaScript

    //Method 2
    // the HTML file:
    