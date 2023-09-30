import React, { useState } from "react";

function Contact() {
  const date = new Date();

  const [massege, setMassege] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [sendmsg, setSendmsg] = useState(false);

  const handelsubmit = (event) => {
    event.preventDefault();
    console.log(massege);
    if (massege.name === "" || massege.email === "" || massege.message === "")
      alert("Please fill all the fields");
    else {
      setSendmsg(!sendmsg);
    }
    setMassege({
      name: "",
      email: "",
      message: "",
    });
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setMassege((pre) => {
      return {
        ...pre,
        [name]: value,
      };
    });
  };

  return (
    <div>
      <h1>Contact</h1>
      {sendmsg ? (
        <h3>Message sent successfully</h3>
      ) : (
        <form onSubmit={handelsubmit}>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            placeholder="Name.."
            value={massege.name}
            name="name"
            onChange={handleChange}
          />
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            placeholder="Email.."
            value={massege.email}
            name="email"
            onChange={handleChange}
          />
          <label htmlFor="masseg">Name:</label>
          <input
            type="text"
            placeholder="Massege.."
            value={massege.message}
            name="message"
            onChange={handleChange}
          />
          <button>Send</button>
        </form>
      )}
      <hr />
      <footer className="container-fluid text-center footer">
        <span>&copy; {`${date.getFullYear()}`} Copyright: Mehul Vadgama </span>
      </footer>
    </div>
  );
}

export default Contact;
