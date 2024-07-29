import React, { useRef } from 'react'

export default function Uncontrolled() {
    const nameRef = useRef(null);
    const ageRef = useRef(null);
    const person = { name: "", age: 0 };

    function handleSubmit(event) {
        event.preventDefault();
        person.name = nameRef.current.value;
        person.age = ageRef.current.value;
        console.log(person)
    }
    // // function handleChange(event) {
    // //     event.preventDefault();
    // //     if(event.target.value)
    // // }
    return (
        <form onSubmit={handleSubmit} className="flex flex-col items-center justify-center bg-pink-50">
            <label htmlFor="name">Name</label>
            <input ref={nameRef} type="text" name="name" id="" />
            <label htmlFor="age">Age</label>
            <input ref={ageRef} type="number" name="age" id="" />
            <button className='rounded bg-blue-500 mt-6 h-7 w-24'>submit</button>
        </form>
    //   <form onSubmit={handleSubmit} >
    //     <div className="flex flex-col items-center justify-center bg-pink-50">
    //         <label htmlFor="name">Name</label>
    //         <input ref={nameRef} type="text" onChange={handleChange}/>
    //     </div>
    //     <div className="flex flex-col items-center justify-center bg-pink-50 pb-40">
    //         <label htmlFor="age">Age</label>
    //         <input ref={ageRef} type="number"/>
    //         <button className='bg-blue-400 rounded w-24 h-6 mt-4' type='submit'>
    //             submit
    //         </button>
    //     </div>
           
    //     </form>
  )
}
