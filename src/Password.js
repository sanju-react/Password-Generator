import React, { useState, useRef } from "react";

export const Password = () => {
  const [password, setPassword] = useState("");
  const [passwordStrength, setPasswordStrength] = useState(0);
  const [copied, setCopied] = useState(false);
  const [length, setLength] = useState(8);
  const [checkedList, setCheckedList] = useState({
    lowercase: true,
    number: false,
    uppercase: false,
    specialChar: false,
  });

  const passwordStrengthCalculate = () => {
    var strength = 0;
    if (password.match(/[a-z]+/)) {
      strength += 1;
    }
    if (password.match(/[A-Z]+/)) {
      strength += 1;
    }
    if (password.match(/[0-9]+/)) {
      strength += 1;
    }
    if (password.match(/[$@#&!]+/)) {
      strength += 1;
    }
    setPasswordStrength(strength);
  };

  const generatePassword = () => {
    const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
    const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numberChars = "0123456789";
    const specialChars = "!@#$%^&*()_+{}[]|;:,.<>?";

    let validChars = lowercaseChars;
    if (checkedList.uppercase) validChars += uppercaseChars;
    if (checkedList.number) validChars += numberChars;
    if (checkedList.specialChar) validChars += specialChars;

    let newPassword = "";
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * validChars.length);
      newPassword += validChars[randomIndex];
    }

    setPassword(newPassword);
    passwordStrengthCalculate();
  };

  const inputRef = useRef(null);
  const handleCopyClick = () => {
    // Check if the input element exists
    if (inputRef.current) {
      // Select the text inside the input element
      inputRef.current.select();
      // Execute the copy command
      document.execCommand("copy");
      // Deselect the text
      window.getSelection().removeAllRanges();
      setCopied(true);
      setTimeout(() => {
        setCopied(false);
        setPassword("");
      }, 2000);
    }
  };

  return (
    <>
      <div className="bg-green-300 flex-col h-screen w-screen flex justify-center items-center">
        <h1 className="font-bold text-2xl bg-orange-300 rounded-md hover:scale-105  p-2">
          Password Generator
        </h1>
        <div className="bg-white  rounded-xl shadow-lg p-2 m-2  h-4/6 w-2/5">
          <div className="flex items-center flex-col justify-center p-8">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="40"
              fill="currentColor"
              class="bi bi-lock"
              viewBox="0 0 16 16"
            >
              <path d="M8 1a2 2 0 0 1 2 2v4H6V3a2 2 0 0 1 2-2m3 6V3a3 3 0 0 0-6 0v4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2M5 8h6a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1" />
            </svg>
            <span className="border-solid border-2 rounded-md border-black text-center bg-red-200  p-1 m-3    w-14">
              XXXX
            </span>
            <h1 className="text-lg text-blue-400 font-semibold">
              PASSWORD GENERATOR
            </h1>
            <h3 className="text-blue-800">
              Create strong and secure password to keep your acoount safe
              online.
            </h3>
          </div>

          <div className="flex justify-around items-center w-full  gap-10 px-10">
            <div className="w-3/4 flex  ">
              <input
                value={password}
                readOnly
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
                ref={inputRef}
                type="text"
                className="w-full bg-slate-200 border-solid border-2 border-sky-500 rounded-md p-1 "
              />
              <span>
                {password &&
                  (passwordStrength <= 1
                    ? "Weak "
                    : passwordStrength <= 2
                    ? "Medium "
                    : passwordStrength <= 3
                    ? "Strong "
                    : "Very Strong ")}
              </span>
            </div>

            <div className="w-1/4 ">
              <div className=" px-10 py-3 bg-cyan-400 rounded-md flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="currentColor"
                  class="bi bi-file-bar-graph-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="M12 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2m-2 11.5v-6a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5m-2.5.5a.5.5 0 0 1-.5-.5v-4a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-.5.5zm-3 0a.5.5 0 0 1-.5-.5v-2a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.5.5z" />
                </svg>
                {""}
                <button onClick={handleCopyClick} className="font-semibold">
                  {copied ? "Copied" : "Copy"}{" "}
                </button>
              </div>
            </div>
          </div>
          <div className="p-3  mt-3 flex w-full flex-col gap-4 justify-center items-center">
            <label className=" w-3/4 ">Password length:{length}</label>

            <input
              min={1}
              max={30}
              type="range"
              onChange={(e) => {
                setLength(e.target.value);
              }}
              value={length}
              className="w-3/4 flex justify-center "
            />
          </div>
          <div className=" px-16">
            <div className="flex justify-between items-center">
              <label className=" font-semibold">Numbers</label>
              <input
                onChange={(e) => {
                  setCheckedList({
                    ...checkedList,
                    [e.target.name]: e.target.checked,
                  });
                }}
                checked={checkedList.number}
                name="number"
                className=" gap-4 w-5 h-5"
                type="checkbox"
              />
            </div>
            <div className="flex justify-between items-center">
              <label className="font-semibold">UpperCase</label>
              <input
                onChange={(e) => {
                  setCheckedList({
                    ...checkedList,
                    [e.target.name]: e.target.checked,
                  });
                }}
                checked={checkedList.uppercase}
                name="uppercase"
                className=" gap-4 w-5 h-5"
                type="checkbox"
              />
            </div>
            <div className="flex justify-between items-center">
              <label className=" font-semibold">LowerCase</label>
              <input
                name="lowercase"
                onChange={(e) => {
                  setCheckedList({
                    ...checkedList,
                    [e.target.name]: e.target.checked,
                  });
                }}
                checked={checkedList.lowercase}
                className="  w-5 h-5"
                type="checkbox"
              />
            </div>

            <div className="flex justify-between items-center">
              <label className=" font-semibold">Specical Charaters</label>
              <input
                onChange={(e) => {
                  setCheckedList({
                    ...checkedList,
                    [e.target.name]: e.target.checked,
                  });
                }}
                checked={checkedList.specialChar}
                name="specialChar"
                className=" w-5 h-5"
                type="checkbox"
              />
            </div>
          </div>
          <div className="flex justify-center items-start mt-3">
            <button
              onClick={() => {
                generatePassword();
              }}
              className="bg-sky-500 p-1 text-lg font-semibold rounded-md px-5 text-white "
            >
              Generate
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
