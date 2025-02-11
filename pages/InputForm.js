import { useState } from 'react';
import React from 'react';

function FormComponent({ title }) {
    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [birthPlace, setBirthPlace] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();

        //explaned the form to include basic details and outputs from the user.
        if (name.length <= 0 || age <= 0 || birthPlace.length <= 0) {
            setMessage('FAILED. Please make sure all fields are filled correctly.');
        } else {
            setMessage(`Welcome ${name}! You are ${age} years old and from ${birthPlace}.`);
        }
    };

    function nameUpdate(event) {
        setName(event.target.value);
    }

    function ageUpdate(event) {
        setAge(event.target.value);
    }

    function birthPlaceUpdate(event) {
        setBirthPlace(event.target.value);
    }

    return (
        <div>
            <section id="inputform">

                <form onSubmit={handleSubmit}>
                    <h2>{title}</h2>

                    <h3>Name: </h3>
                    <input
                        type="text"
                        id="name"
                        value={name}
                        onChange={nameUpdate}
                        placeholder="Enter your name"
                    />
                    <br></br>

                    <h3>Age: </h3>
                    <input
                        type="number"
                        id="age"
                        value={age}
                        onChange={ageUpdate}
                        placeholder="Enter your age"
                    />
                    <br></br>

                    <h3>Birthplace: </h3>
                    <input
                        type="text"
                        id="birthPlace"
                        value={birthPlace}
                        onChange={birthPlaceUpdate}
                        placeholder="Enter your birthplace"
                    />
                    <br></br>

                    <button type="submit">Submit</button>
                </form>

            </section>
            {message && <p>{message}</p>}
        </div>
    );
}

export default FormComponent;
