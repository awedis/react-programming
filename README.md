## React
## Some React programms

- 1. Change the color of one particular "li" that was selected (Pro_1.js)

- 2. Fragments:
  - Components that return multiple elements. (Pro_2.js)
  - Conditionally rendering elements. They make rendering groups of elements a lot easier without adding extra markup. (Pro_3.js)
  - Arrays. Fragments can also help us when rendering arrays, because fragments can have key props! Let’s say you have an array of user objects and you want to render all users from the array. You need to set key prop for every user so you would need to use element like div to wrap the user info. But because fragments can have key prop, you can instead use fragments and give the key prop for them and thus you don’t need to introduce any extra markup. (Pro_4.js)

- 3. Refs:
  - Refs provide a way to access DOM nodes or React elements created in the render method.
  - Creating Refs. Refs are created using React.createRef() and attached to React elements via the ref attribute. Refs are commonly assigned to an instance property when a component is constructed so they can be referenced throughout the component.
  - Accessing Refs: When a ref is passed to an element in render, a reference to the node becomes accessible at the current attribute of the ref. (Pro_5.js)
  - Inpuuts when pressed enter the focus goes to next input. (Pro_6.js)

- 4. Pure Components: (Pro_7.js)
  - shouldComponentUpdate
  - PureComponent
  - Note: We must use PureComponent in very simple states, if the state was complex don't use PureComponent

- 5. useState Hook: (Pro_8.js)
  - The useState hook allows us to use state in our functional component. A useState hook takes the initial value of our state as the only argument, and it returns an array of two elements. The first element is our state variable and the second element is a function in which we can use to update the value os the state variable.

- 6. Context API: (Pro_9.js)
  - Context provides a way to pass data through the component tree without having to pass props down manually at every level.
  - For a more in-depth definition, it provides a way for you to make particular data available to all components throughout the component tree no matter how deeply nested that component may be.
  - First we have a Provider - The Provider component is where the data lives. In the provider component we return a context provider.
  - Second we have a Consumer - The Consumer is where we want to access the data. The child of consumer will always be a function.

- 7. Error Boundaries: (Pro_10.js & ErrorBoundary.js)
  - Run time errors during rendering react puts our application in broken state, react basically unmounts the whole react component tree. It will be great if it could catch the errors anywhere in the component tree and display a fall-back UI, this is where Error Boundaries take the spotlight.
  - What is Error Boundary: A class component that implements either one or both of the lifecycle mthods getDerivedStateFromError or componentDidCatch becomes an error boundary.
  - Error handling phase includes two lifecycle methods
    - static getDerivedStateFromError(error)
    - componentDidCatch(error, info)
  - The static method getDerivedStateFromError method is used to render a fallback UI after an error is thrown and the componentDidCatch method is used to log the error information.

- 8. React Router: (Pro_11.js)
  - Route, Link, NavLink, Redirect, Prompt
  - Install React Router:
    - npm install react-router-dom --save
  - React router uses regular expressions to do the url mapping, so we use exact to differentiate between the other routes. and strict (for ex. /about/ or /about works without strict) but if we want only /about/ work so we provide strict tag in Route.

- 9. Axios: (Pro_12.js)
  - Axios is promise-based
  - Install Axios:
    - npm install axios
  - The object must have a url property; if no method is provided, GET will be used as the default value.
  - Making simultaneous requests: One of Axios’ more interesting features is its ability to make multiple requests in parallel by passing an array of arguments to the axios.all() method. This method returns a single promise object that resolves only when all arguments passed as an array have resolved (Pro_13.js) using (responseArr) & (axios.spread)
  - Sending custom headers: (Pro_12.js)
  - Transforming requests and responses: (Pro_14.js)
    - By default, Axios automatically converts requests and responses to JSON. But it also allows you to override the default behavior and define a different transformation mechanism. This ability is particularly useful when working with an API that accepts only a specific data format such as XML or CSV.
  - Intercepting requests and responses: (Pro_15.js)
  - Client-side support for protection against XSRF: (Pro_12.js)
    - Cross-site request forgery (or XSRF for short) is a method of attacking a web-hosted app in which the attacker disguises himself as a legal and trusted user to influence the interaction between the app and the user’s browser. There are many ways to execute such an attack, including XMLHttpRequest.
    - Fortunately, Axios is designed to protect against XSRF by allowing you to embed additional authentication data when making requests. This enables the server to discover requests from unauthorized locations.
  - Axios Cheat Sheet - https://kapeli.com/cheat_sheets/Axios.docset/Contents/Resources/Documents/index

- 10. Jest - React Testing: (/button folder)
  - Installations (in dev dependency):
    - npm install @testing-library/react react-test-renderer jest-dom --save-dev
  - Snapshot - compares the default first snapshot with the new ones, and when we press (u) to update the default snapshot.

- 11. Dialog Box:
  - Single Dialog & Multiple (Pro_16.js)