"use client";

import { useState, useEffect } from "react";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  const [disabled, setDisabled] = useState(true);

  const postUsers = async () => {
    const data = {
      name,
      email,
      message,
    };

    setLoading(true);

    const JSONdata = JSON.stringify(data);
    const endpoint = "/api/email";

    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSONdata,
    };

    const response = await fetch(endpoint, options);

    if (response.ok) {
      setSuccess(true);
      setLoading(false);
    }
    if (!response.ok) {
      setSuccess(false);
      setLoading(false);
      alert("Try again later");
    }
  };

  const validateEmail = (email: string) => {
    // This is a very basic email validation. Consider using a more robust validation depending on your needs.
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
  };

  useEffect(() => {
    if (name.length >= 1 && message.length >= 1 && validateEmail(email)) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  }, [name, email, message]);

  return (
    <div
      id="contact"
      className="relative isolate mt-[-20px] pb-24 pt-20 text-sec sm:py-32 "
    >
      <div className="mx-auto max-w-xl lg:max-w-4xl">
        <h2 className="text-4xl font-bold tracking-tight">
          Let’s talk about your project
        </h2>
        <div className="mt-16 flex flex-col gap-16 sm:gap-y-20 lg:flex-row">
          <form action="#" method="POST" className="lg:flex-auto">
            <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
              <div>
                <label
                  htmlFor="first-name"
                  className="block text-sm font-semibold leading-6 "
                >
                  Name
                </label>
                <div className="mt-2.5">
                  <input
                    type="text"
                    required
                    minLength={1}
                    name="first-name"
                    value={name}
                    onChange={(event) => setName(event?.target.value)}
                    id="first-name"
                    autoComplete="given-name"
                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-semibold leading-6 "
                >
                  Email
                </label>
                <div className="mt-2.5">
                  <input
                    required
                    min={5}
                    type="email"
                    name="email"
                    value={email}
                    onChange={(event) => setEmail(event?.target.value)}
                    id="email"
                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 invalid:border-red-500 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div className="sm:col-span-2">
                <label
                  htmlFor="message"
                  className="block text-sm font-semibold leading-6 "
                >
                  Message
                </label>
                <div className="mt-2.5">
                  <textarea
                    id="message"
                    required
                    minLength={3}
                    maxLength={500}
                    name="message"
                    rows={4}
                    value={message}
                    onChange={(event) => setMessage(event?.target.value)}
                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
            </div>
            <div className="mt-10">
              {loading && <div>Sending ...</div>}
              {success && (
                <div>Message sent, we&apos;ll be in contact soon!</div>
              )}
              {!success && !loading && (
                <button
                  disabled={disabled}
                  onClick={(event) => {
                    event.preventDefault();
                    postUsers();
                  }}
                  className="block w-full rounded-md bg-sec px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-prim focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:pointer-events-none disabled:bg-slate-400 disabled:opacity-75"
                >
                  Let’s talk
                </button>
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
