import React, { useState } from "react";
import henrylogo from "../logo_henry.png";
import programmingImg from "../assets/undraw_programming_2svr.svg";
import { postLogin } from "../api";

function Login(props) {
  const [inputData, setInputData] = useState({
    email: "",
    password: ""
  });
  const [errorForm, setErrorForm] = useState({
    email: "",
    password: ""
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputData.email === "") {
      setErrorForm({ ...errorForm, email: "Debe ingresar un email" });
      return;
    } else if (inputData.password === "") {
      setErrorForm({ ...errorForm, password: "Debe ingresar un password" });
      return;
    }
    setInputData({
      email: "",
      password: ""
    });
    setErrorForm({
      email: ""
    });
    postLogin(inputData)
      .then((res) => {
        props.history.replace("/manager");
      })
      .catch((err) => {
        alert("Usuario o Contraseña incorrecta");
        // props.history.replace("/manager")
      });
  };

  const handleChange = (e) => {
    const { value, name } = e.target;
    setInputData({ ...inputData, [name]: value });
  };

  return (
    <div className="w-full flex flex-wrap">
      <div className="w-full md:w-1/2 flex flex-col">
        <div className="flex flex-col justify-center md:justify-start my-auto pt-8 md:pt-0 px-8 md:px-24 lg:px-32">
          <div className="flex justify-center mb-10">
            <img
              src={henrylogo}
              alt="Henry logo"
              className="text-white font-bold text-xl p-2 w-24"
            />
          </div>
          <p className="text-center text-3xl">Admin Web App</p>
          <form className="flex flex-col pt-3 md:pt-8" onSubmit={handleSubmit}>
            <div className="flex flex-col pt-4">
              <label htmlFor="email" className="text-lg">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={inputData.email}
                onChange={handleChange}
                placeholder="your@email.com"
                className=" w-full py-2 px-3 text-gray-700 mt-1 leading-tight border border-transparent focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent ..."
              />
              <span className="text-red-700 font-medium">
                {errorForm.email}
              </span>
            </div>

            <div className="flex flex-col pt-4">
              <label htmlFor="password" className="text-lg">
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                value={inputData.password}
                onChange={handleChange}
                placeholder="Password"
                className=" w-full py-2 px-3 text-gray-700 mt-1 leading-tight border border-transparent focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent ..."
              />
              <span className="text-red-700 font-medium">
                {errorForm.password}
              </span>
            </div>

            <input
              type="submit"
              value="Log In"
              className="bg-black text-white font-bold text-lg  hover:bg-gray-700 p-2 mt-8"
            />
          </form>
        </div>
      </div>

      <div className="w-1/2 h-full ">
        <img
          className="object-cover w-screen h-screen hidden md:block"
          src={programmingImg}
          alt="Una persona programando"
        />
      </div>
    </div>
  );
}

export default Login;
