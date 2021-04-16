# DOM

## How browser render the website

1. Parsing HTML code and convert to DOM tree
2. Parsing CSS code and convert to CSSOM Tree
3. DOM abd CSSOM will combine into the RenderTree
4. Reflow which means calculate the position and size of each visible node
5. Repaint which means browser will paint the render Tree on the screen

## What Causes the Reflows and Repaints

1. Reflow will happen when Adding, Removing, Updating the DOM nodes
   - width/height, float, position...
   - interact with user such as resize viewport
   - DOM, import CSS file...
2. Hiding DOM Element with display: none will cause both reflow and repaint
3. Hiding DOM Element with visibility: hidden will cause the only repaint, because no layout or position change
4. Moving, animating a DOM node will trigger reflow and repaint

## How to minimize repaint and reflow

1. Do not use <Table> element becasue it reflows frequently if we modify table cell.
2. Change classname directly or edit the cssText property rather than setting style one by one.

```javascript
var bodyStyle = document.body.style; // cache
bodyStyle.padding = "20px"; // reflow, repaint
bodyStyle.border = "10px solid red"; // reflow, repaint
bodyStyle.fontSize = "2em"; // reflow, repaint
// new DOM element - reflow, repaint
document.body.appendChild(document.createTextNode("Hello!"));

// better
el.className += " theclassname";

// or when top and left are calculated dynamically...

// better
el.style.cssText += "; left: " + left + "px; top: " + top + "px;";
```

3. Use a documentFragment to hold temp changes and avoid unneccesary reflow and repaint because it creates an imaginart node object with all properties of the Node object and after modifying the content, insert it back to document.
