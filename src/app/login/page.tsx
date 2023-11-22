"use client";
import React, { useState } from "react";
import { signIn } from "next-auth/react";

const Login = () => {
  const [form, setForm] = useState({
    username: "",
    password: "",
  });

  const changeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const submitHandler: React.FormEventHandler = async (e) => {
    e.preventDefault();
    const { username, password } = form;

    const signInResult = await signIn("credentials", {
      username,
      password,
      callbackUrl: "/dashboard",
    });

    console.log(signInResult);
  };

  return (
    <div className="flex items-center justify-center px-4 mt-24">
      <form
        onSubmit={submitHandler}
        className="w-full max-w-[20em] flex-col flex space-y-4 p-4 rounded-lg bg-slate-50 border"
      >
        <div>
          <h2 className="font-semibold text-blue-500">Next.Auth</h2>
          <p className="text-sm text-slate-500">Login and enjoy at Next.auth site</p>
        </div>
        <div className="flex flex-col">
          <label htmlFor="username" className="text-slate-800 text-sm font-medium mb-1">
            Username
          </label>
          <input
            className="py-1 px-2 border rounded-md outline-none"
            type="text"
            id="username"
            name="username"
            value={form.username}
            onChange={changeInput}
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="username" className="text-slate-800 text-sm font-medium mb-1">
            Password
          </label>
          <input
            className="py-1 px-2 border rounded-md outline-none"
            type="password"
            id="password"
            name="password"
            value={form.password}
            onChange={changeInput}
          />
        </div>
        <button type="submit" className="p-2 rounded-lg hover:bg-blue-600 bg-blue-500 text-white font-medium">
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
