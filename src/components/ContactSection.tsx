// import React from "react";
// export const ContactSection = () => {
//   return <section className="py-20 px-4">
//       <div className="max-w-2xl mx-auto text-center">
//         <h2 className="text-4xl font-bold mb-12 text-white">
//           Get in <span className="text-[#ADFF2F]">Touch</span>
//         </h2>
//         {/* <form className="space-y-6">
//           <input type="text" placeholder="Name" className="w-full p-3 bg-gray-900 border border-gray-800 rounded-lg focus:border-[#ADFF2F] focus:outline-none text-white" />
//           <input type="email" placeholder="Email" className="w-full p-3 bg-gray-900 border border-gray-800 rounded-lg focus:border-[#ADFF2F] focus:outline-none text-white" />
//           <textarea placeholder="Message" rows={4} className="w-full p-3 bg-gray-900 border border-gray-800 rounded-lg focus:border-[#ADFF2F] focus:outline-none text-white" />
//           <button type="submit" className="px-8 py-3 bg-[#ADFF2F] text-black font-bold rounded-lg hover:bg-[#98DB29] transition-colors">
//             Send Message
//           </button>
//         </form> */}
//         <form
//           action="https://formspree.io/f/mpwropbw"
//           method="POST"
//           className="space-y-6"
//         >
//           {/* Anti-spam hidden field */}
//           <input type="hidden" name="_captcha" value="false" />
//           <input type="hidden" name="_template" value="box" />
//           <input type="hidden" name="_next" value="https://popol09.github.io/my-info/" />

//           <input
//             type="text"
//             name="name"
//             placeholder="Name"
//             required
//             className="w-full p-3 bg-gray-900 border border-gray-800 rounded-lg focus:border-[#ADFF2F] focus:outline-none text-white"
//           />
//           <input
//             type="email"
//             name="email"
//             placeholder="Email"
//             required
//             pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
//             onInvalid={(e) => e.target.setCustomValidity("Please enter a valid email address")}
//             onInput={(e) => e.target.setCustomValidity("")}
//             className="w-full p-3 bg-gray-900 border border-gray-800 rounded-lg focus:border-[#ADFF2F] focus:outline-none text-white"
//           />
//           <textarea
//             name="message"
//             placeholder="Message"
//             rows={4}
//             required
//             className="w-full p-3 bg-gray-900 border border-gray-800 rounded-lg focus:border-[#ADFF2F] focus:outline-none text-white"
//           />
//           <button
//             type="submit"
//             className="px-8 py-3 bg-[#ADFF2F] text-black font-bold rounded-lg hover:bg-[#98DB29] transition-colors"
//           >
//             Send Message
//           </button>
//         </form>
//       </div>
//     </section>;
// };

import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

export const ContactSection = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_lj8jsjy",     // Replace with your EmailJS service ID
        "template_fq1xxfe",    // Replace with your EmailJS template ID
        form.current,
        "nP5OKT3w-TYmfM0XW"      // Replace with your EmailJS public key
      )
      .then(
        (result) => {
          console.log("Email successfully sent!", result.text);
          alert("Message sent successfully!");
          form.current.reset();
        },
        (error) => {
          console.log("Failed to send email:", error.text);
          alert("Failed to send message. Please try again.");
        }
      );
  };

  return (
    <section className="py-20 px-4">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-12 text-white">
          Get in <span className="text-[#ADFF2F]">Touch</span>
        </h2>

        <form ref={form} onSubmit={sendEmail} className="space-y-6">
          <input
            type="text"
            name="user_name"
            placeholder="Name"
            required
            className="w-full p-3 bg-gray-900 border border-gray-800 rounded-lg focus:border-[#ADFF2F] focus:outline-none text-white"
          />
          <input
            type="text"
            name="contact_no"
            placeholder="Contact No."
            className="w-full p-3 bg-gray-900 border border-gray-800 rounded-lg focus:border-[#ADFF2F] focus:outline-none text-white"
          />
          <input
            type="email"
            name="user_email"
            placeholder="Email"
            required
            pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
            onInvalid={(e) =>
              e.target.setCustomValidity("Please enter a valid email address")
            }
            onInput={(e) => e.target.setCustomValidity("")}
            className="w-full p-3 bg-gray-900 border border-gray-800 rounded-lg focus:border-[#ADFF2F] focus:outline-none text-white"
          />
          <textarea
            name="message"
            placeholder="Message"
            rows={4}
            required
            className="w-full p-3 bg-gray-900 border border-gray-800 rounded-lg focus:border-[#ADFF2F] focus:outline-none text-white"
          />
          <button
            type="submit"
            className="px-8 py-3 bg-[#ADFF2F] text-black font-bold rounded-lg hover:bg-[#98DB29] transition-colors"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};
