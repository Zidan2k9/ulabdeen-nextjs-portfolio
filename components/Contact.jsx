import Link from "next/link";
import React from "react";
import { useState } from "react";
import { AiOutlineMail } from "react-icons/ai";
import { BsFillPersonFill } from "react-icons/bs";
import {
  FaGithub,
  FaHackerrank,
  FaLinkedinIn,
  FaStackOverflow,
} from "react-icons/fa";
import { HiOutlineChevronDoubleUp } from "react-icons/hi";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phonenumber, setPhoneNumber] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  //   Form validation
  const [errors, setErrors] = useState({});

  //   Setting button text
  // const [buttonText, setButtonText] = useState("Send");

  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [showFailureMessage, setShowFailureMessage] = useState(false);

  const handleValidation = () => {
    let tempErrors = {};
    let isValid = true;

    if (name.length <= 0) {
      tempErrors["name"] = true;
      isValid = false;
    }
    if (email.length <= 0) {
      tempErrors["email"] = true;
      isValid = false;
    }
    if (subject.length <= 0) {
      tempErrors["subject"] = true;
      isValid = false;
    }
    if (message.length <= 0) {
      tempErrors["message"] = true;
      isValid = false;
    }

    setErrors({ ...tempErrors });
    console.log("errors", errors);
    return isValid;
  };

  //   const [form, setForm] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    let isValidForm = handleValidation();

    if (isValidForm) {
      // setButtonText("Sending");
      const res = await fetch("/api/sendgrid", {
        body: JSON.stringify({
          email: email,
          name: name,
          subject: subject,
          phonenumber: phonenumber,
          message: message,
        }),
        headers: {
          "Content-Type": "application/json",
        },
        method: "POST",
      });

      const { error } = await res.json();
      if (error) {
        console.log(error);
        setShowSuccessMessage(false);
        setShowFailureMessage(true);
        // setButtonText("Send");

        // Reset form fields
        setName("");
        setEmail("");
        setMessage("");
        setSubject("");
        setPhoneNumber("");
        return;
      }
      setShowSuccessMessage(true);
      setShowFailureMessage(false);
      // setButtonText("Send");
      // Reset form fields
      setName("");
      setEmail("");
      setMessage("");
      setSubject("");
      setPhoneNumber("");
    }
    console.log(name, email, phonenumber, subject, message);
  };

  return (
    <div id="contact" className="w-full lg:h-screen bg-green-white-0">
      <div className="max-w-[1240px] m-auto px-2 py-16 w-full">
        <p className="text-xl tracking-widest uppercase text-green-white-8 dark:text-white">
          Contact Me
        </p>
        <h2 className="py-4">Let's Get In Touch</h2>
        <div className="grid lg:grid-cols-5 gap-8">
          {/* left */}
          <div className="col-span-3 lg:col-span-2 w-full h-full shadow-xl shadow-gray-400 rounded-xl p-4 dark:shadow-green-400">
            <div className="lg:p-4 h-full">
              <div>
                <img
                  className="rounded-xl hover:scale-105 ease-in duration-300"
                  src="https://source.unsplash.com/npxXWgQ33ZQ"
                  alt=""
                />
              </div>
              <div>
                <h2 className="py-2">Zain Ul-Abdeen</h2>
                <p>Software Developer</p>
                <p className="py-4">
                  I am looking for full-time roles. Let's Talk!
                </p>
              </div>
              <div>
                <p className="uppercase pt-8">Connect With Me</p>
                <div className="flex items-center justify-between py-4">
                  <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in-out duration-300 dark:shadow-green-400">
                    <FaLinkedinIn />
                  </div>
                  <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in-out duration-300 dark:shadow-green-400">
                    <FaGithub />
                  </div>
                  {/* <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in-out duration-300'>
              <FaStackOverflow />
            </div>
            <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in-out duration-300'>
              <FaHackerrank />
            </div> */}
                  <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in-out duration-300 dark:shadow-green-400">
                    <AiOutlineMail />
                  </div>
                  <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in-out duration-300 dark:shadow-green-400">
                    <BsFillPersonFill />
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* right */}
          <div className="col-span-3 w-full h-auto shadow-xl shadow-gray-400 rounded-xl lg:p-4 dark:shadow-green-400">
            <div className="p-4">
              <form>
                <div className="grid md:grid-cols-2 gap-4 w-full py-2">
                  {/* NAME */}
                  <div className="flex flex-col">
                    <label htmlFor="name" className="uppercase text-sm py-2">
                      Name
                    </label>
                    <input
                      name="name"
                      id="name"
                      className="border-2 rounded-lg p-3 flex border-gray-300 dark:shadow-green-300"
                      type="text"
                      value={name}
                      onChange={(e) => {
                        setName(e.target.value);
                      }}
                    />
                    {errors?.name && (
                      <p className="text-red-500">Name can't be empty</p>
                    )}
                  </div>
                  {/* PHONE NUMBER (OPTIONAL) */}
                  <div className="flex flex-col">
                    <label
                      htmlFor="phonenumber"
                      className="uppercase text-sm py-2"
                    >
                      Phone Number
                    </label>
                    <input
                      name="phonenumber"
                      id="phonenumber"
                      className="border-2 rounded-lg p-3 flex border-gray-300 dark:shadow-green-300"
                      type="text"
                      onChange={(e) => {
                        setPhoneNumber(e.target.value);
                      }}
                    />
                  </div>
                </div>
                <div className="flex flex-col py-2">
                  {/* EMAIL */}
                  <label htmlFor="email" className="uppercase text-sm py-2">
                    email
                  </label>
                  <input
                    name="email"
                    id="email"
                    className="border-2 rounded-lg p-3 flex border-gray-300 dark:shadow-green-300"
                    type="email"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                    }}
                  />
                  {errors?.email && (
                    <p className="text-red-500">Email can't be empty</p>
                  )}
                </div>
                <div className="flex flex-col py-2">
                  {/* SUBJECT */}
                  <label htmlFor="subject" className="uppercase text-sm py-2">
                    Subject
                  </label>
                  <input
                    name="subject"
                    id="subject"
                    className="border-2 rounded-lg p-3 flex border-gray-300 dark:shadow-green-300"
                    type="text"
                    value={subject}
                    onChange={(e) => {
                      setSubject(e.target.value);
                    }}
                  />
                  {errors.subject && (
                    <p className="text-red-500">Subject can't be empty</p>
                  )}
                </div>
                <div className="flex flex-col py-2">
                  {/* MESSAGE */}
                  <label htmlFor="message" className="uppercase text-sm py-2">
                    Message
                  </label>
                  <textarea
                    name="message"
                    id="message"
                    value={message}
                    className="border-2 rounded-lg p-3 border-gray-300 dark:shadow-green-300"
                    rows="10"
                    onChange={(e) => {
                      setMessage(e.target.value);
                    }}
                  ></textarea>
                  {errors?.message && (
                    <p className="text-red-500 dark:shadow-green-500">
                      Message can't be empty
                    </p>
                  )}
                </div>
                {/* SUBMIT BUTTON */}
                <button
                  className="w-full p-4 text-gray-100 mt-4 cursor-pointer hover:scale-105 ease-in duration-300 bg-green-white-5"
                  // onSubmit={handleSubmit}
                  onClick={(e) => {
                    handleSubmit(e);
                  }}
                >
                  Send Message
                </button>
              </form>
              <div className="text-left">
                {showSuccessMessage && (
                  <p className="text-green-500 font-semibold text-sm my-2 dark:text-white">
                    Thanks a million for your message, I'll get back to you
                    soon!
                  </p>
                )}
                {showFailureMessage && (
                  <p className="text-red-500 dark:text-white">
                    Oops! Something went wrong, please try again.
                  </p>
                )}
              </div>
              {/* END OF FORM */}
            </div>
          </div>
        </div>
        <div className="flex justify-center py-12">
          <Link href="/">
            <div className="rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-110 ease-in duration-300 dark:shadow-green-400">
              <HiOutlineChevronDoubleUp
                className="text-green-white-5"
                size={30}
              />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Contact;
