import "./PasswordGenerator.css";
import React, { useState } from "react";

function PasswordGenerator() {
  const [lower, setLower] = useState(true);
  const [upper, setUpper] = useState(true);
  const [numbers, setNumbers] = useState(true);
  const [special, setSpecial] = useState(true);
  const [password, setPassword] = useState("");

  const lowercase = "abcdefghijklmnopqrstuvwxyz";
  const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const numbercase = "123456789";
  const specialcase = "~!@#$%^&*()-+[{]}_=?<>";

  var passLength;
  const setPassLength = (PassLength) => {
    passLength = PassLength;
    console.log(passLength);
  };

  const getstring = (lower, upper, numbers, special) => {
    var string = "";
    if (lower) {
      string += lowercase;
    }
    if (upper) {
      string += uppercase;
    }
    if (numbers) {
      string += numbercase;
    }
    if (special) {
      string += specialcase;
    }
    return string;
  };

  const generatePass = (lower, upper, numbers, special) => {
    var pass = "";
    const string = getstring(lower, upper, numbers, special);
    if (passLength == null) {
      alert("enter the length ");
    } else {
      for (let i = 0; i < passLength; i++) {
        let c = string.charAt(Math.round(Math.random() * string.length));
        pass += c;
      }
    }
    setPassword(pass);
  };

  return (
    <div className="container-pass">
      <h2>Enter the length of password you want</h2>
      <div className="Length">
        <button
          type="submit"
          className="pass-length"
          onClick={() => {
            setPassLength(4);
          }}
        >
          4
        </button>
        <button
          type="submit"
          className="pass-length"
          onClick={() => {
            setPassLength(8);
          }}
        >
          8
        </button>
        <button
          type="submit"
          className="pass-length"
          onClick={() => {
            setPassLength(12);
          }}
        >
          12
        </button>
        <button
          type="submit"
          className="pass-length"
          onClick={() => {
            setPassLength(16);
          }}
        >
          16
        </button>
      </div>

      <div className="box">
        <div className="flex-box">
          <label htmlFor="lower">Contain lower case characters ?</label>
          <input
            type="checkbox"
            id="lower"
            className="lower"
            defaultChecked={lower}
            onChange={() => {
              setLower(!lower);
            }}
          />
        </div>
        <div className="flex-box">
          <label htmlFor="upper">Contain upper case characters ?</label>
          <input
            type="checkbox"
            id="upper"
            defaultChecked={upper}
            onChange={() => {
              setUpper(!upper);
            }}
          />
        </div>
        <div className="flex-box">
          <label htmlFor="number">Contain number case characters ?</label>
          <input
            type="checkbox"
            id="number"
            defaultChecked={numbers}
            onChange={() => {
              setNumbers(!numbers);
            }}
          />
        </div>
        <div className="flex-box">
          <label htmlFor="special">Contain special characters ?</label>
          <input
            type="checkbox"
            id="special"
            defaultChecked={special}
            onChange={() => {
              setSpecial(!special);
            }}
          />
        </div>
      </div>
      <div className="generate">
        <button onClick={() => generatePass(lower, upper, numbers, special)}>
          Generate password
        </button>
      </div>
      <div className="display-pass">
        <h2>{password}</h2>
      </div>
    </div>
  );
}

export default PasswordGenerator;
