import React, { useState } from 'react'
import { useForm } from 'react-hook-form';

function Controlled() {

//using useState makes the component render everytime the state changes, so in certain situation 
//it might be needed but we also have to consider how that affects the performance
    const [person, setPerson] = useState({
        name: "",
        age: 0
    });
    console.log(person);

    function handleSubmit(event) {
        event.preventDefault();
        console.log(person)

    }
  return (
      <form
          onSubmit={handleSubmit}
          className="flex flex-col items-center justify-center bg-pink-50 pt-14">
          <label
              htmlFor="name">
              Name
          </label>
          <input
              value={person.name}
              onChange={(event) => setPerson({ ...person, name: event.target.value })}
              type="text"
              name="name"/>
          <label
              htmlFor="age">
              Age
          </label>
          <input
              value={person.age}
              onChange={(event) => setPerson({ ...person, age: event.target.value })}
              type="number"
              name="age" />
          <button
              className='rounded bg-blue-500 mt-6 h-7 w-24'>
              submit
              </button>
        </form>
    )
    //using useForm custom hook rather than useState for lesser code
//     const {register, handleSubmit} = useForm("trial")
//   return (
//       <form
//           onSubmit={handleSubmit(data => console.log(data))}
//           className="flex flex-col items-center justify-center bg-pink-50 pt-14">
//           <label
//               htmlFor="name">
//               Name
//           </label>
//           <input
//               {...register("name")}
//               type="text"
//               name="name"/>
//           <label
//               htmlFor="age">
//               Age
//           </label>
//           <input
//               {...register("age")}
//               type="number"
//               name="age" />
//           <button
//               className='rounded bg-blue-500 mt-6 h-7 w-24'>
//               submit
//           </button>
//         </form>
//   )
}

export default Controlled