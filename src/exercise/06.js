// Basic Forms
// http://localhost:3000/isolated/exercise/06.js

import * as React from 'react'

// function UsernameForm({onSubmitUsername}) {
//   // 🐨 add a submit event handler here (`handleSubmit`).
//   const handleSubmit = (e) => {
//     e.preventDefault();
//
//     const { value = '' } = e.target.elements[0];
//
//     if ( onSubmitUsername && typeof onSubmitUsername === 'function') {
//       onSubmitUsername(value);
//     }
//   }
//   // 💰 Make sure to accept the `event` as an argument and call
//   // `event.preventDefault()` to prevent the default behavior of form submit
//   // events (which refreshes the page).
//   //
//   // 🐨 get the value from the username input (using whichever method
//   // you prefer from the options mentioned in the instructions)
//   // 💰 For example: event.target.elements[0].value
//   // 🐨 Call `onSubmitUsername` with the value of the input
//
//   // 🐨 add the onSubmit handler to the <form> below
//
//   // 🐨 make sure to associate the label to the input.
//   // to do so, set the value of 'htmlFor' prop of the label to the id of input
//   return (
//     <form onSubmit={handleSubmit}>
//       <div>
//         <label htmlFor="username">Username:</label>
//         <input id="username" type="text" />
//       </div>
//       <button type="submit">Submit</button>
//     </form>
//   )
// }

// Extra Credit 1.
// function UsernameForm({onSubmitUsername}) {
//   const nameRef = React.useRef();
//
//   const handleSubmit = (e) => {
//     e.preventDefault();
//
//     const { value = '' } = nameRef.current;
//
//     if ( onSubmitUsername && typeof onSubmitUsername === 'function') {
//       onSubmitUsername(value);
//     }
//   }
//
//   return (
//     <form onSubmit={handleSubmit}>
//       <div>
//         <label htmlFor="username">Username:</label>
//         <input ref={nameRef} id="username" type="text" />
//       </div>
//       <button type="submit">Submit</button>
//     </form>
//   )
// }

// Extra Credit 2.
// function UsernameForm({onSubmitUsername}) {
//   const [error, setError] = React.useState(null);
//   const nameRef = React.useRef();
//
//   const handleSubmit = (e) => {
//     e.preventDefault();
//
//     const { value = '' } = nameRef.current;
//
//     if ( onSubmitUsername && typeof onSubmitUsername === 'function') {
//       onSubmitUsername(value);
//     }
//   }
//
//   const nameIsValid = (value) => value === value.toLowerCase();
//
//   const handleChange = () => {
//      const { value = '' } = nameRef.current;
//
//      if (!nameIsValid(value)) {
//        setError('Username must be lower case');
//      } else {
//        setError(null);
//      }
//   }
//
//   return (
//     <form onSubmit={handleSubmit}>
//       <div>
//         <label htmlFor="username">Username:</label>
//         <input ref={nameRef} onChange={handleChange} id="username" type="text" />
//         {
//           ! error ? null : <span role="alert" style={{ color: 'red' }}>{error}</span>
//         }
//
//       </div>
//       <button disabled={Boolean(error)} type="submit">Submit</button>
//     </form>
//   )
// }

// Extra Credit 3.
function UsernameForm({onSubmitUsername}) {
  const [name, setName] = React.useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if ( onSubmitUsername && typeof onSubmitUsername === 'function') {
      onSubmitUsername(name);
    }
  }

  const handleChange = (e) => {
    const { value = '' } = e.target;
    setName(value.toLowerCase());
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="username">Username:</label>
        <input onChange={handleChange} id="username" type="text" />
      </div>
      <button type="submit">Submit</button>
    </form>
  )
}
function App() {
  const onSubmitUsername = username => alert(`You entered: ${username}`)
  return <UsernameForm onSubmitUsername={onSubmitUsername} />
}

export default App
