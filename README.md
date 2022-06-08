### Credit: [Eric The Coder](https://dev.to/ericchapman)

# Create a React App

```javascript
// Create a new app
npx create-react-app my-app-name

// Run the created app
cd my-app-name
yarn start

// http://localhost:3000
```

# First React functional Component
* No need to import React from 'react' (since React 17)
* Must have uppercase first letter
* Must return JSX
(src/App.js)
```javascript
// React component
function App(){
  return <h1>Hello World</h1>
} 

export default App;
```

### How this component get render to the browser? The main project file is src/index.js and in that file there are instruction to render the component
```javascript
ReactDOM.render(<App />, document.getElementById('root'))
```

### The App component will then be rendered inside public/index.html 'root' div

# Import Component
### Component will be created in separate files. Each component need to be export and then import
```javascript
function Greeting(){
    return <h1>Hello World</h2>
}
export default Greeting
```

### This component can then be import
```javascript
import Greeting from './Gretting'

function App(){
    return <Greeting />
}
```

### or name export...
```javascript
export function Greeting(){
    return <h1>Hello World</h2>
}
```

### This component can then be import
```javascript
import {Greeting} from './Gretting'
```
### BEM Naming Convention
```html
return (
<div className="app">
  <h1 className="app_title">Welcome to my application: {appTitle}</h1>
  <div className="product">
    <h1 className="product__name--large">Product name: {product.name}</h1>
<h1 className="product__name--small">Nick name: {product.nickName}</h1>
    <p className="product__description">Product description: {product.description}
  </div>
<div>
)
```

# JSX Rules

### Return a single element (only one parent element)
```javascript
// not valid
return <h1>Hello world</h1><h2>Hi!</h2>

// valid with fragment. 
return (
    <>
        <h1>Hello World</h1>
        <h2>Hi!</h2>
    </>
)
// Noted the parenthesis for multi-line formatting
```

### Use className instead of class
### Also all attribute name need to be camelCase
```javascript
// not valid
return (
    <div class="title">
        Hello World
    </div>
)

// valid
return (
    <div className="title">
    </div>
)
```

### Close every element
```javascript
return (
    <img src="http:example.com/image.jpg" />
    <input type="text" name="first_name" />
)
```

# Nested Components
```javascript
// Arrow function shorthand component
const Person = () => <h1>Mike Taylor</h1>

// Arrow function component
const Message = () => {
    return <h1>Hello</h1>
}

// Function component
function HelloWorld(){
  return (
      <>
          <Message />
          <Person />
      </>
  )
} 
```

# Component CSS
(src/App.css)
```css
h1 {
    color: red;
}
```
(src/App.js)
### Import the CSS file
```javascript
import './App.css'

function App(){
  return <h1>Hello World</h1>
} 
```

# Inline CSS
```javascript
function App(){
  return <h1 style={{ color: 'red' }}>Hello World</h1>
} 
```

# Javascript in JSX
* Enclose between {}
* Must be an expression (return a value)
```javascript
function App(){
    const name = 'Mike'
    return (
      <>
          <h1>Hello {name}</h1>
          <p>{name === 'Mike' ? '(admin)': '(user)'}</p>
      </>
    )
}
```

# Component Properties (Props)
```javascript
function App()
    return <Person name='Mike' age={29} />
}

const Person = (props) => {
    return <h1>Name: {props.name}, Age: {props.age}</h1>
}

// or props object deconstructing
const Person = ({name, age}) => {
    return <h1>Name: {name} Age: {age}</h1>
}
```

# Children Props (slot)
```javascript
function App()
    return (
        <Person name='Mike' age={29}>
            Hi, this is a welcome message
        </Person>
    )
} 

const Person = (props) => {
    return (
        <h1>Name: {props.name}, Age: {props.age}</h1>
        <p>{props.children}</p>
    )
}

// or props object deconstructing
const Person = ({name, age, children}) => {
    return (
        <h1>Name: {name} Age: {age}</h1>
        <p>{children}</p>
    )
}
```

# Default Props value
```javascript
const Person = ({name, age, children}) => {
    return (
        <h1>Name: {name} Age: {age}</h1>
        <p>{children}</p>
    )
}

Person.defaultProps = {
    name: 'No name',
    age: 0,
}
```

# List
```javascript
const people = [
  {id: 1, name: 'Mike', age: 29},
  {id: 2, name: 'Peter', age: 24},
  {id: 3, name: 'John', age: 39},
]
function App(){
    return (
        people.map(person => {
            return <Person name={person.name} age={person.age}/>
        })
    )
} 

const Person = (props) => {
  return (
      <h1>Name: {props.name}, Age: {props.age}</h1>
  )
}
```

# List with key (for React internal reference)
```javascript
function App(){
    return (
        people.map(person => {
            return <Person key={person.id} name={person.name} age={person.age}/>
        })
     )
} 
```

# Props object destructuring
```javascript
function App(){
  return people.map(person => <Person key={person.id} {...person} />)
}

const Person = ({name, age}) => {
  return (
      <h1>Name: {name}, Age: {age}</h1>
  )
} 
```

# Click Event
```javascript
const clickHandler = () => alert('Hello World')
function App(){
    return (
        <>
            <h1>Welcome to my app</h1>
            <button onClick={clickHandler}>Say Hi</button>
        </> 
    )
} 
```
### or inline...
```javascript
function App(){
    return (
        <>
            <h1>Welcome to my app</h1>
            <button onClick={ () => alert('Hello World') }>Say Hi</button>
        </>
     )
}
```

### To pass arguments we need to use arrow function
```javascript
const clickHandler = (message) => alert(message)
function App(){
    return (
        <>
            <h1>Welcome to my app</h1>
            <button onClick={() => clickHandler('Hello World')}>Say Hi</button>
        </> 
    )
} 
```
### e for event arguments
```javascript
const clickHandler = (e) => console.log(e.target)
function App(){
    return (
        <>
            <h1>Welcome to my app</h1>
            <button onClick={clickHandler}>Say Hi</button>
        </> 
    )
} 
```
### Pass event from child to parent
```javascript
function Todo({item, onDelete}) {
    return (
      <div>
        {item}
        <button onClick={() => onDelete(item)} 
      </div>
    )
}

function Todos() {
  const handleDelete = (todo) => {
    const newTodos = todos.filter(item => item !== todo)
    setTodos(() => newTodos)
  }

  return (
    {todos.map(todo => (
       <Todo item={todo} onDelete={handleDelete}/>
    }
  )
}
```

# useState Hook
### The purpose of useState is to handle reactive data. any data that changes in the application is called state. And when the state changes, you want react to update the UI.

* Hook always start with 'use' prefix
* Must be invoke only in a React component/function
* Must be call at top level of a functional component
* Declaration cannot be call conditionally
* useState return an array of 2: [state value, set state function]

```javascript
import React, {useState} from 'react';

const DisplayTitle = () => {
  const [title, setTitle] = useState('This is the Title')
  const handleClick = () => setTitle('New Title')
  return <>
    <h2>{title}</h2>
    <button type="button" className="btn" onClick={handleClick}>
      Change Title
    </button>
  </>
};

export default DisplayTitle;
```

# useState with object
```javascript
const DisplayTitle = () => {
  const [person, setPerson] = useState({name: 'Mike', age: 29})
  const handleClick = () => setPerson({...person, age: 35})
  return <>
    <h2>{title}</h2>
    <button type="button" className="btn" onClick={handleClick}>
      Change Age
    </button>
  </>
};
```

# setState functional form
```javascript
function Counter() {
  const [count, setCount] = useState(0)
  // Use a function to set State
  const increase = () => setCount(() => count + 1)
  return (
    <>
      <h1>Counter</h1>
      <p>{count}</p>
      <button onClick={increase} className='btn'> + </button>
      <button onClick={() => setCount(() => count - 1)} className='btn'> - </button>
    </>
  )
}
```

# useEffect
In React you may want to execute code after lifecycle events or side effects.

By default useEffect function is execute after every re-render. You can then execute code everytime component update.
import React, { useEffect } from 'react';

```javascript
function IncreaseValue() {
    const [value, setValue] = useState(0)
    useEffect(() => {
        document.title = `New value: ${value}` 
    })
    return <button onClick={() => setValue(value + 1)}>Increase</button>
}
```

# Conditional useEffect
### Conditional need to be place inside useEffect function
```javascript
useEffect(() => {
    if (value > 0) {
        document.title = `New value: ${value}` 
    }
})
```

# useEffect Dependency List
### What if you want to execute code only on first render or only when a particular state change? You can use the useEffect function and send an array of dependencies as parameter.

### useEffect will run only if state is in the Dependency List.
### If the list is empty [] the useEffect will only run on initial render.
```javascript
useEffect(() => {
    document.title = `New value: ${value}` 
}, [])
// Noted the empty array. useEffect will then only run once on initial render

useEffect(() => {
    document.title = `New value: ${value}` 
}, [value])
// Will run each time 'value' state change.
```

# useEffect cleanup function
### What if you want to execute code each time the component unmount?

### To execute code only when a component is unmount/destroy you need to add a 'return' statement to your useEffect function.
```javascript
useEffect(() =>  { 
    const timer = window.setInterval(() => { 
        setCount(count => count + 1)
    }, 1000)
    return () => clearInterval(timer)
}, [])
```

### The code 'clearInterval(timer)' will only be execute before component is remove from UI (unmount)

# Conditional Rendering
```javascript
function DisplayGreeting() {
    const [name, setName] = useState('Mike')
    if (name === 'Mike') {
        return <h1>Hello admin {name}</h1> 
    }
    return <h1>Hello user {name}</h1> 
}
```

### Inline If-Else
```javascript
  return (
    <div>
      The user is <b>{isLoggedIn ? 'currently' : 'not'}</b> logged in.
    </div>
  );
}
```

### Inline Logical && Operator.
### Display only if first expression is truthy
### truthy = Not : 0, "", null, undefined, and NaN
```javascript
  function DisplayUserInfo({active}) {
    return (
      <div>
        { active && <h1>User is active</h1>}
      </div>
    );
}
```

### Multiple inline If
```html
<span className={count === 0 && 'text-gray-500' || count > 0 && 'text-green-500' || count < 0 && 'text-red-500'}>{count}</span>
```

# Form
```javascript
const UserForm = () => {
  const [userName, setUserName] = useState('')
  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(userName)
  }
return (
<>
    <form onSubmit={handleSubmit}>
      <input 
          value={userName} 
          onChange={(e) => setUserName(e.target.value)} 
          type="text" id="userName" 
          name="userName"
      />
       <button type="submit">Submit</button>
    </form>
</>
)
};

export default UserForm;
```

# useRef
### useRef is mostly use to target a DOM element. But it can also be use to keep/preserve a mutable value between each render. useRef does not trigger a re-render (like a useState).
```javascript
const UseRefBasics = () => {
  const refContainer = useRef(null)
  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(refContainer.current.value)
  }

  useEffect(() => {
    refContainer.current.focus()
  }, [])

  return (
    <div>
      <form className="form" onSubmit={handleSubmit}>
        <div>
          <input ref={refContainer} type="text" />
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  )
};
```