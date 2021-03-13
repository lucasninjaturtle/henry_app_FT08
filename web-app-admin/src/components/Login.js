import React, { useState } from "react";
import GitHubLogin from "react-github-login";
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

  console.log(inputData);
  return (
    <div class="w-full flex flex-wrap">
      <div class="w-full md:w-1/2 flex flex-col">
        <div class="flex flex-col justify-center md:justify-start my-auto pt-8 md:pt-0 px-8 md:px-24 lg:px-32">
          <div class="flex justify-center mb-10">
            <img
              src={henrylogo}
              class="text-white font-bold text-xl p-2 w-24"
            />
          </div>
          <p class="text-center text-3xl">Admin Web App</p>
          <form class="flex flex-col pt-3 md:pt-8" onSubmit={handleSubmit}>
            <div class="flex flex-col pt-4">
              <label for="email" class="text-lg">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={inputData.email}
                onChange={handleChange}
                placeholder="your@email.com"
                class=" w-full py-2 px-3 text-gray-700 mt-1 leading-tight border border-transparent focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent ..."
              />
              <span className="text-red-700 font-medium">
                {errorForm.email}
              </span>
              {/* <span :class="{'text-green-700': password.length > 7, 'text-red-700':password.length < 7 }"
                                              class="font-medium text-sm ml-3"
                                              x-text="password.length > 7 ? 'The minimum length is reached' : 'At least 8 characters required' "></span> */}
            </div>

            <div class="flex flex-col pt-4">
              <label for="password" class="text-lg">
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                value={inputData.password}
                onChange={handleChange}
                placeholder="Password"
                class=" w-full py-2 px-3 text-gray-700 mt-1 leading-tight border border-transparent focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent ..."
              />
              <span className="text-red-700 font-medium">
                {errorForm.password}
              </span>
            </div>

            <input
              type="submit"
              value="Log In"
              class="bg-black text-white font-bold text-lg  hover:bg-gray-700 p-2 mt-8"
            />
            {/* <div class="flex md:justify-between justify-center items-center mt-10">
              <div
                style={{ height: "1px" }}
                class="bg-black md:block hidden w-4/12"
              ></div>
              <p class="md:mx-2 text-sm font-light text-black"> Login Con: </p>
              <div
                style={{ height: "1px" }}
                class="bg-black md:block hidden w-4/12"
              ></div>
            </div> */}
          </form>

          {/* <input
            type="submit"
            value="Log In GitHub"
            class="bg-black text-white font-bold text-lg  hover:bg-gray-700 p-2 mt-8"
          /> */}
        </div>
      </div>

      <div class="w-1/2 h-full ">
        <img
          class="object-cover w-screen h-screen hidden md:block"
          src={programmingImg}
        />
      </div>
    </div>
  );
}

export default Login;
