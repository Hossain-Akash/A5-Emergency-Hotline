##1. difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?
Ans:
**getElementById** ==>It returns one element with the given id. The ID number must be unique
**getElementsByClassName** ==>It returns a live HTMLCollection of all elements with the same class name. It returns element like an array.
**querySelector** ==> It returns the first element that matches a CSS selector.
**querySelectorAll**==> returns a Node List of all elements matching the CSS selector.

##2. How do you create and insert a new element into the DOM?
Ans:at first use document.createElement("") to make a new child element in memory. Then Use append (parent.appendChild(child)) methods to place it inside another element

##3. What is Event Bubbling and how does it work?
Ans:Event bubbling means that when an event happens on an element the event first runs on that element, and then it bubbles up to its parent, then the parent’s parent, and so on until it reaches the root parent or final parent.
How it works:
When clicked on a child element, the event triggers the element handler first. Then the same event automatically moves up to the its parent. Then to it's parent and as it until document.
If needed to stop it use event.stopPropagation().

##4.What is Event Delegation in JavaScript? Why is it useful?
Ans:Event delegation in JavaScript is a technique for handling events on multiple children by doing a single event listener to their common parent .
How it works:
Events bubble up from child to parent. The parent can "catch" the event from any of its children. use conditions to respond only when a certain child was clicked.

##5.What is the difference between preventDefault() and stopPropagation() methods?
Ans:**event.preventDefault()**==> It stops the default browser behavior of an event. It does not stop the event from bubbling up to root parent.
**stopPropagation()**==>It stops the event from bubbling up to parent elements.
