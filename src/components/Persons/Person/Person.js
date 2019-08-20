import React, { Component } from "react";
import "./Person.css";

class Person extends Component {
  render() {
    console.log("[Person.js] rendering...");
    const { click, name, age, children, changed } = this.props;
    return (
      <div className="Person">
        <p onClick={click}>
          I'm {name} and I am {age} years old!
        </p>
        <p>{children}</p>
        <input type="text" onChange={changed} value={name} />
      </div>
    );
  }
}

export default Person;
