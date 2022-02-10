// import React from "react";
// import "./Changepersonaldata.css";
// import { useState } from "react";

// export default function firm() {
//   const [name, setName] = useState("");
//   const [surname, setSurname] = useState("");
//   const [phone, setPhone] = useState("");
//   const [email, setEmail] = useState("");
//   const [city, setCity] = useState("");
//   const [street, setStreet] = useState("");
//   const [house, setHouse] = useState("");
//   const [postcode, setPostcode] = useState("");

//   const [submitted, setSubmitted] = useState(false);
//   const [error, setError] = useState(false);

//   // useEffect(() => {
//   //   const storedName = JSON.parse(localStorage.getItem("name"));
//   //   if (storedName) setName(storedName);
//   // }, []);

//   // useEffect(() => {
//   //   localStorage.setItem("name", JSON.stringify(name));
//   // }, [name]);
//   //const [valueToSubmit, setValueToSubmit] = useState(()

//   // const fetchData = async () => {
//   //   try {
//   //     const stringified = JSON.stringify(name);
//   //     localStorage.setItem("changeName", stringified);
//   //     const changeName = JSON.parse(localStorage.getItem("changeName"));
//   //     console.log(changeName);
//   //   } catch (error) {
//   //     console.log("error", error);
//   //   }
//   // };

//   // useEffect(() => {
//   //   fetchData();
//   // }, []);

//   const handleName = (e) => {
//     setName(e.target.value);
//     setSubmitted(false);
//   };

//   const handleSurname = (e) => {
//     setSurname(e.target.value);
//     setSubmitted(false);
//   };

//   const handleEmail = (e) => {
//     setEmail(e.target.value);
//     setSubmitted(false);
//   };

//   const handlePhone = (e) => {
//     setPhone(e.target.value);
//     setSubmitted(false);
//   };

//   const handleCity = (e) => {
//     setCity(e.target.value);
//     setSubmitted(false);
//   };

//   const handleStreet = (e) => {
//     setStreet(e.target.value);
//     setSubmitted(false);
//   };

//   const handleHouse = (e) => {
//     setHouse(e.target.value);
//     setSubmitted(false);
//   };

//   const handlePostcode = (e) => {
//     setPostcode(e.target.value);
//     setSubmitted(false);
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (
//       name === "" ||
//       surname === "" ||
//       email === "" ||
//       phone === "" ||
//       city === "" ||
//       street === "" ||
//       house === "" ||
//       postcode === ""
//     ) {
//       setSubmitted(true);
//       setError(false);
//     } else {
//       setError(true);
//     }
//     setName(() => "");
//   };

//   const successMessage = () => {
//     return (
//       <div className="success" style={{ display: submitted ? "" : "none" }}>
//         <h1> Personal data successfully changed! </h1>
//       </div>
//     );
//   };

//   const errirmessage = () => {
//     return (
//       <div className="error" style={{ display: error ? "" : "none" }}>
//         <h1> Please enter all the fields</h1>
//       </div>
//     );
//   };

//   return (
//     <>
//       <body>
//         <div className="l-firm">
//           <firm action="" className="firm">
//             <h1 className="firm__title">Change personal data</h1>

//             <div className="firm__div">
//               <input
//                 onChange={handleName}
//                 className="firm__input"
//                 placeholder=" "
//                 value={name}
//               />
//               <label htmlFor="" className="firm__label">
//                 Name
//               </label>
//             </div>

//             <div className="firm__div">
//               <input
//                 onChange={handleSurname}
//                 className="firm__input"
//                 placeholder=" "
//                 value={surname}
//               />
//               <label htmlFor="" className="firm__label">
//                 Surname
//               </label>
//             </div>

//             <div className="firm__div">
//               <input
//                 onChange={handlePhone}
//                 type="text"
//                 className="firm__input"
//                 placeholder=" "
//                 value={phone}
//               />
//               <label htmlFor="" className="firm__label">
//                 Phone number
//               </label>
//             </div>

//             <div className="firm__div">
//               <input
//                 onChange={handleEmail}
//                 className="firm__input"
//                 placeholder=" "
//                 value={email}
//               />
//               <label htmlFor="" className="firm__label">
//                 E-mail
//               </label>
//             </div>

//             <div className="firm__div">
//               <input
//                 onChange={handleCity}
//                 className="firm__input"
//                 placeholder=" "
//                 value={city}
//               />
//               <label htmlFor="" className="firm__label">
//                 City
//               </label>
//             </div>

//             <div className="firm__div">
//               <input
//                 onChange={handleStreet}
//                 className="firm__input"
//                 placeholder=" "
//                 value={street}
//               />
//               <label htmlFor="" className="firm__label">
//                 Street
//               </label>
//             </div>

//             <div className="firm__div">
//               <input
//                 onChange={handleHouse}
//                 className="firm__input"
//                 placeholder=" "
//                 value={house}
//               />
//               <label htmlFor="" className="firm__label">
//                 House number
//               </label>
//             </div>

//             <div className="firm__div">
//               <input
//                 onChange={handlePostcode}
//                 className="firm__input"
//                 placeholder=" "
//                 value={postcode}
//               />
//               <label htmlFor="" className="firm__label">
//                 Post code
//               </label>
//             </div>

//             <div>
//               {errirmessage()}
//               {successMessage()}
//             </div>

//             <input
//               onClick={handleSubmit}
//               type="submit"
//               className="firm__button"
//               value="Confirm"
//             />
//           </firm>
//         </div>
//       </body>
//     </>
//   );
// }

import React from "react";
import "./Changepersonaldata.css";
import { useState } from "react";

export default function firm() {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [city, setCity] = useState("");
  const [street, setStreet] = useState("");
  const [house, setHouse] = useState("");
  const [postcode, setPostcode] = useState("");

  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);

  const handleName = (e) => {
    setName(e.target.value);
    setSubmitted(false);
  };

  const handleSurname = (e) => {
    setSurname(e.target.value);
    setSubmitted(false);
  };

  const handleEmail = (e) => {
    setEmail(e.target.value);
    setSubmitted(false);
  };

  const handlePhone = (e) => {
    setPhone(e.target.value);
    setSubmitted(false);
  };

  const handleCity = (e) => {
    setCity(e.target.value);
    setSubmitted(false);
  };

  const handleStreet = (e) => {
    setStreet(e.target.value);
    setSubmitted(false);
  };

  const handleHouse = (e) => {
    setHouse(e.target.value);
    setSubmitted(false);
  };

  const handlePostcode = (e) => {
    setPostcode(e.target.value);
    setSubmitted(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      name === "" ||
      surname === "" ||
      email === "" ||
      phone === "" ||
      city === "" ||
      street === "" ||
      house === "" ||
      postcode === ""
    ) {
      setError(true);
    } else {
      setSubmitted(true);
      setError(false);
    }
  };

  const successMessage = () => {
    return (
      <div className="success" style={{ display: submitted ? "" : "none" }}>
        <h1> Personal data successfully changed! </h1>
      </div>
    );
  };

  const errirmessage = () => {
    return (
      <div className="error" style={{ display: error ? "" : "none" }}>
        <h1> Please enter all the fields</h1>
      </div>
    );
  };

  return (
    <>
      <body>
        <div className="l-firm">
          <form action="" className="firm">
            <h1 className="firm__title">Change personal data</h1>

            <div className="firm__div">
              <input
                onChange={handleName}
                className="firm__input"
                placeholder=" "
                value={name}
              />
              <label htmlFor="" className="firm__label">
                Name
              </label>
            </div>

            <div className="firm__div">
              <input
                onChange={handleSurname}
                className="firm__input"
                placeholder=" "
                value={surname}
              />
              <label htmlFor="" className="firm__label">
                Surname
              </label>
            </div>

            <div className="firm__div">
              <input
                onChange={handlePhone}
                type="text"
                className="firm__input"
                placeholder=" "
                value={phone}
              />
              <label htmlFor="" className="firm__label">
                Phone number
              </label>
            </div>

            <div className="firm__div">
              <input
                onChange={handleEmail}
                className="firm__input"
                placeholder=" "
                value={email}
              />
              <label htmlFor="" className="firm__label">
                E-mail
              </label>
            </div>

            <div className="firm__div">
              <input
                onChange={handleCity}
                className="firm__input"
                placeholder=" "
                value={city}
              />
              <label htmlFor="" className="firm__label">
                City
              </label>
            </div>

            <div className="firm__div">
              <input
                onChange={handleStreet}
                className="firm__input"
                placeholder=" "
                value={street}
              />
              <label htmlFor="" className="firm__label">
                Street
              </label>
            </div>

            <div className="firm__div">
              <input
                onChange={handleHouse}
                className="firm__input"
                placeholder=" "
                value={house}
              />
              <label htmlFor="" className="firm__label">
                House number
              </label>
            </div>

            <div className="firm__div">
              <input
                onChange={handlePostcode}
                className="firm__input"
                placeholder=" "
                value={postcode}
              />
              <label htmlFor="" className="firm__label">
                Post code
              </label>
            </div>

            <div>
              {errirmessage()}
              {successMessage()}
            </div>

            <input
              onClick={handleSubmit}
              type="submit"
              className="firm__button"
              value="Confirm"
            />
          </form>
        </div>
      </body>
    </>
  );
}
