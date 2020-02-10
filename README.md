## React
## Some React programms
- 1) Change the color of one particular "li" that was selected (Pro_1.js)
- 2) Fragments:
  - Components that return multiple elements. (Pro_2.js)
  - Conditionally rendering elements. They make rendering groups of elements a lot easier without adding extra markup. (Pro_3.js)
  - Arrays. Fragments can also help us when rendering arrays, because fragments can have key props! Let’s say you have an array of user objects and you want to render all users from the array. You need to set key prop for every user so you would need to use element like div to wrap the user info. But because fragments can have key prop, you can instead use fragments and give the key prop for them and thus you don’t need to introduce any extra markup. (Pro_4.js)
- 3) Refs:
  - Refs provide a way to access DOM nodes or React elements created in the render method.
  - Creating Refs. Refs are created using React.createRef() and attached to React elements via the ref attribute. Refs are commonly assigned to an instance property when a component is constructed so they can be referenced throughout the component.
  - Accessing Refs: When a ref is passed to an element in render, a reference to the node becomes accessible at the current attribute of the ref. (Pro_5.js)
  - Inpuuts when pressed enter the focus goes to next input. (Pro_6.js)
