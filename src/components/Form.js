import React, { useState } from "react";

function Form() { // can take in props if needed
  const [firstName, setFirstName] = useState("Sylvia");
  const [lastName, setLastName] = useState("Woods");
  const [submittedData, setSubmittedData] = useState([]);

  function handleFirstNameChange(event) {
    setFirstName(event.target.value);
  }

  function handleLastNameChange(event) {
    setLastName(event.target.value);
  }

  function handleSubmit(event){
    console.log(event)
    event.preventDefault();
    const formData ={
      firstName: firstName,
      lastName: lastName,
    }
    const dataArray = [...submittedData, formData];
    setSubmittedData(dataArray);
    setFirstName("");
    setLastName("");
// send form data off => can be passed down as a prop
    // props.sendFormData(formData)
    // setFirstName('') // clear out input fields => form.reset() in JS
    // setLastName('')

  }

    const listOfSubmissions = submittedData.map((data, index) => {  // form data properties : firstName, lastName.
    return (
      <div key={index}>
        {data.firstName} {data.lastName}
      </div>
    );
  });

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" onChange={handleFirstNameChange} value={firstName} />
        <input type="text" onChange={handleLastNameChange} value={lastName} />
        <button type="submit">Submit</button>
      </form>
      <h3>Submissions</h3>
      {listOfSubmissions} 
    </div>
  );
}
// submissions are displayed on the DOM.
export default Form;
