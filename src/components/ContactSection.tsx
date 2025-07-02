import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

export const ContactSection = () => {
  const form = useRef();
  const [showModal, setShowModal] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_lj8jsjy",
        "template_fq1xxfe",
        form.current,
        "nP5OKT3w-TYmfM0XW"
      )
      .then(
        (result) => {
          console.log("Email successfully sent!", result.text);
          setShowModal(true); // Show modal
          form.current.reset();

          // Close modal after 2s and reload page
          setTimeout(() => {
            setShowModal(false);
            window.location.reload();
          }, 2000);
        },
        (error) => {
          console.log("Failed to send email:", error.text);
          alert("Failed to send message. Please try again.");
        }
      );
  };

  return (
    <section className="py-20 px-4 relative">
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

      {/* ✅ Success Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 animate-fadeIn">
          <div className="bg-white p-6 rounded-xl shadow-2xl text-center w-80">
            <h3 className="text-xl font-semibold text-green-700 mb-2">
              ✅ Message Sent!
            </h3>
            <p className="text-gray-700">Thank you for getting in touch.</p>
          </div>
        </div>
      )}
    </section>
  );
};
