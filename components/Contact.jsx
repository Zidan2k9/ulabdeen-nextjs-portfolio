import Link from "next/link";
import React from "react";
import { useForm } from "react-hook-form";
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
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm();
  console.log(errors);
  function onSubmitForm(values) {
    console.log(values);
  }
  return (
    <div id="contact" className="w-full lg:h-screen bg-green-white-0">
      <div className="max-w-[1240px] m-auto px-2 py-16 w-full">
        <p className="text-xl tracking-widest uppercase text-green-white-8">
          Contact Me
        </p>
        <h2 className="py-4">Let's Get In Touch</h2>
        <div className="grid lg:grid-cols-5 gap-8">
          {/* left */}
          <div className="col-span-3 lg:col-span-2 w-full h-full shadow-xl shadow-gray-400 rounded-xl p-4">
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
                  <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in-out duration-300">
                    <FaLinkedinIn />
                  </div>
                  <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in-out duration-300">
                    <FaGithub />
                  </div>
                  {/* <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in-out duration-300'>
              <FaStackOverflow />
            </div>
            <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in-out duration-300'>
              <FaHackerrank />
            </div> */}
                  <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in-out duration-300">
                    <AiOutlineMail />
                  </div>
                  <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in-out duration-300">
                    <BsFillPersonFill />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* right  Contact Form  */}
          <div className="col-span-3 w-full h-auto shadow-xl shadow-gray-400 rounded-xl lg:p-4">
            <div className="p-4">
              <form onSubmit={handleSubmit(onSubmitForm)}>
                <div className="grid md:grid-cols-2 gap-4 w-full py-2">
                  <div className="flex flex-col">
                    <label
                      for="name"
                      name="name"
                      className="uppercase text-sm py-2"
                    >
                      Name
                    </label>
                    <input
                      className={`border-2 rounded-lg p-3 flex border-gray-300 w-full shadow px-4 placeholder-gray-500 focus:ring-green-500 focus:border-green-500 focus:outline-none focus:ring-2 ${
                        errors.name ? "ring-2 ring-red-500" : null
                      }`}
                      type="text"
                      {...register("name", {
                        required: true,
                        message: "You must enter your name",
                      })}
                    />
                  </div>
                  <div className="flex flex-col">
                    <label className="uppercase text-sm py-2">
                      Phone Number
                    </label>
                    <input
                      className="border-2 rounded-lg p-3 flex border-gray-300"
                      type="text"
                      {...register("phone", {
                        required: false,
                        minLength: {
                          value: 10,
                          message: "Phone number too short",
                        },
                        maxLength: {
                          value: 14,
                          message: "Phone number too long",
                        },
                      })}
                    />
                  </div>
                </div>
                <div className="flex flex-col py-2">
                  <label for="email" className="uppercase text-sm py-2">
                    Email
                  </label>
                  <input
                    className={`border-2 rounded-lg p-3 flex border-gray-300 w-full shadow px-4 placeholder-gray-500 focus:ring-green-500 focus:border-green-500 focus:outline-none focus:ring-2 ${
                      errors.email ? "ring-2 ring-red-500" : null
                    }`}
                    type="email"
                    {...register("email", {
                      required: true,
                      message: "You must enter your email address",
                      minLength: {
                        value: 8,
                        message: "This is not long enough to be an email",
                      },
                      maxLength: {
                        value: 120,
                        message: "This is too long to be an email ",
                      },
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: "This needs to be a valid email",
                      },
                    })}
                  />
                </div>
                <div className="flex flex-col py-2">
                  <label for="subject" className="uppercase text-sm py-2">
                    Subject
                  </label>
                  <input
                    className={`border-2 rounded-lg p-3 flex border-gray-300 w-full shadow-px-4 placeholder-gray-500 focus:ring-green-500 focus:border-green-500 focus:outline-none focus:ring-2 ${
                      errors.subject ? "ring-2 ring-red-500" : null
                    }`}
                    type="text"
                    {...register("subject", {
                      required: true,
                      message: "You must enter a subject",
                      minLength: {
                        value: 1,
                        message: "Subject length is too short",
                      },
                      maxLength: {
                        value: 120,
                        message: "Subject length is too long",
                      },
                    })}
                  />
                </div>
                <div className="flex flex-col py-2">
                  <label className="uppercase text-sm py-2">Message</label>
                  <textarea
                    className={`border-2 rounded-lg p-3 border-gray-300 w-full shadow-px-4 placeholder-gray-500 focus:ring-green-500 focus:border-green-500 focus:outline-none focus:ring-2 ${
                      errors.message ? "ring-2 ring-red-500" : null
                    }`}
                    rows="10"
                    {...register("message", {
                      required: true,
                      message: "You must enter a message",
                      maxLength: {
                        value: 1000,
                        message: "Messages cant be more than 1000 characters",
                      },
                      minLength: {
                        value: 50,
                        message:
                          "Messages need to be at least 50 characters long",
                      },
                    })}
                  ></textarea>
                </div>
                <button className="w-full p-4 text-gray-100 mt-4 cursor-pointer hover:scale-105 ease-in duration-300 bg-green-white-5">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
        <div className="flex justify-center py-12">
          <Link href="/">
            <div className="rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-110 ease-in duration-300">
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
