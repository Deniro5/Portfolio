import React, { useState } from "react";

const Contact = (props) => {
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [body, setBody] = useState("");

  const handleSubmit = (event) => {
    alert(
      "This action is not supported yet. Please contact me at deantowheed5@gmail.com instead"
    );
    /*let valid = checkValid();
        if (valid[0]) {
           /* fetch('http://localhost:8000/reviews/', {
                method: 'POST',
                headers: {
                  'Accept': 'application/json',
                  "Content-Type": "application/json"
                },
                body: JSON.stringify({
                  email: email,
                  subject: subject,
                  body: body
                })
              })
              .then((res) => res.json())
              .then((json) => {
            
              }); 
              setEmail("");
              setSubject("");
              setBody("");
            return true;
        }
        else {
            alert(valid[1]);
            return false;
        } */
  };

  const ValidateEmail = (email) => {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
      return true;
    }
    return false;
  };

  const checkValid = () => {
    if (email.length === 0 || subject.length === 0 || body.length === 0) {
      return [false, "Please fill out all fields"];
    } else if (!ValidateEmail(email)) {
      return [false, "Please enter a valid email address"];
    } else {
      return [true, ""];
    }
  };

  return (
    <div className='uploadContainer'>
      <h1> Get in Touch </h1>
      <p className='subTitle'>
        {" "}
        Fill out the form below if you have any questions. I will get back to you as soon
        as possible.{" "}
      </p>
      <form className='fieldContainer'>
        <input
          type='text'
          placeholder='Email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type='text'
          placeholder='Subject'
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
        />
        <textarea
          placeholder='Write your message here...'
          value={body}
          onChange={(e) => setBody(e.target.value)}
        />
      </form>
      <button onClick={handleSubmit.bind(this)}> Submit </button>
    </div>
  );
};

export default Contact;
