import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import image from "/public/assets/img/Contact.png";
import {
  FaInstagram,
  FaFacebookF,
  FaGithub,
  FaWhatsapp,
  FaLinkedin,
} from "react-icons/fa";

const Contact = () => {
  const form = useRef();
  const [status, setStatus] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_23c25km", 
        "template_7pn3lfv", 
        form.current,
        "hEOI1ySxHt2VPY9gs" 
      )
      .then(
        () => {
          setStatus("Message sent successfully!");
          form.current.reset();
        },
        (error) => {
          setStatus("Failed to send message.");
          console.error(error);
        }
      );
  };

  return (
    <div className="w-full min-h-screen bg-gradient-to-b from-[#0c011e] via-[#05000d] to-black flex flex-col items-center py-20">
      <h1 className="text-5xl tracking-[2px] font-JetBrains bg-gradient-to-r from-purple-400 via-purple-600 to-purple-800 bg-clip-text text-transparent mb-16 text-center">
       Get in Touch
      </h1>

      <div className="w-[85%] max-w-[1300px] grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20 items-center">
        <div className="text-white pl-5">
          
          <form
            ref={form}
            onSubmit={sendEmail}
            className="flex flex-col gap-8 w-full"
          >
            <div className="flex flex-col gap-2">
              <label className="text-2xl font-JetBrains">Email address :</label>
              <input
                type="email"
                name="user_email"
                className="rounded-lg bg-white/5 text-white px-4 py-3 border border-purple-500 outline-none focus:ring-2 focus:ring-purple-600 shadow-md"
                placeholder="Enter your email"
                required
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-2xl font-JetBrains">Your message :</label>
              <textarea
                name="message"
                className="rounded-lg bg-white/5 text-white px-4 py-3 h-40 resize-none border border-purple-500 outline-none focus:ring-2 focus:ring-purple-600 shadow-md"
                placeholder="Write your message..."
                required
              ></textarea>
            </div>

            <button className="w-fit bg-[#c77dffff] hover:bg-purple-500 transition px-8 py-3 rounded-xl text-white font-JetBrains cursor-pointer shadow-lg">
              Submit
            </button>

       
            {status && <p className="text-purple-300 mt-2">{status}</p>}
          </form>

      
          <div className="mt-12 flex flex-col gap-6">
            <h2 className="text-2xl font-JetBrains text-purple-300 mb-2">
              Contact Information :
            </h2>

            <div className="flex flex-col gap-4 text-lg">
              <a
                href="https://www.instagram.com/nour_als12"
                target="_blank"
                className="flex items-center gap-4 text-purple-300 hover:text-purple-500 transition"
              >
                <FaInstagram className="text-3xl" />
                <span>nour_als12</span>
              </a>

              <a
                href="https://www.facebook.com/nour.alsh.906"
                target="_blank"
                className="flex items-center gap-4 text-purple-300 hover:text-purple-500 transition"
              >
                <FaFacebookF className="text-3xl" />
                <span>nour.als.906</span>
              </a>

              <a
                href="https://github.com/NourAlshmali"
                target="_blank"
                className="flex items-center gap-4 text-purple-300 hover:text-purple-500 transition"
              >
                <FaGithub className="text-3xl" />
                <span>Nour Alshmali</span>
              </a>

              <a
                href="https://www.linkedin.com/in/nour-alshamali-b2011936a"
                target="_blank"
                className="flex items-center gap-4 text-purple-300 hover:text-purple-500 transition"
              >
                <FaLinkedin className="text-3xl" />
                <span>Nour Alshamali</span>
              </a>

              <a
                href="https://wa.me/963983754281"
                target="_blank"
                className="flex items-center gap-4 text-purple-300 hover:text-purple-500 transition"
              >
                <FaWhatsapp className="text-3xl" />
                <span>+963 983 754 281</span>
              </a>
            </div>
          </div>
        </div>

        <div className="flex justify-center md:justify-end pr-5">
          <img
            src={image}
            alt="Contact"
            className="w-[300px] md:w-[250px] lg:w-[350px] rounded-xl pt-[50px]"
          />
        </div>
      </div>
    </div>
  );
};

export default Contact;
