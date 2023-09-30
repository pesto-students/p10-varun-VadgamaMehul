import React, { useState } from "react";
import "./Cont.css";

function Cont() {
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
    <div className="main">
      {sendmsg ? (
        <h3>Message sent successfully</h3>
      ) : (
        <form className="form" onSubmit={handelsubmit}>
          <p className="form-title">Connect With Me</p>
          <div className="input-container">
            <input
              required
              type="text"
              placeholder="Name"
              value={massege.name}
              name="name"
              onChange={handleChange}
            />
            <input
              required
              type="email"
              placeholder="Enter email"
              value={massege.email}
              name="email"
              onChange={handleChange}
            />
            <span></span>
          </div>
          <div className="input-container">
            <textarea
              required
              name="message"
              placeholder="Message..."
              onChange={handleChange}
              cols="30"
              rows="5"
              value={massege.message}
            ></textarea>
            {/* <input
              className="message"
              type="text"
              placeholder="Message..."
              value={massege.message}
              name="message"
              onChange={handleChange}
            /> */}
          </div>
          <button type="submit" className="submit">
            Send
          </button>
        </form>
      )}
      <footer className="container-fluid text-center footer">
        <span>&copy; {`${date.getFullYear()}`} Copyright: Mehul Vadgama </span>
      </footer>
    </div>
  );
}

export default Cont;
