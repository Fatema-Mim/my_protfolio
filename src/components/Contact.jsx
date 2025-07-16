import React from 'react';

const Contact = () => {
  return (
    <div
      name="contact"
      className="w-full pt-0 md:pt-28 bg-[#0a192f] flex justify-center items-center p-6 pb-28 md:pb-0"
    >
      <form
        method="POST"
        action="https://getform.io/f/a793803e-ad66-42e9-94af-261b44884792"
        className="flex flex-col max-w-[600px] w-full bg-[#112240] p-8 rounded-xl shadow-lg"
      >
        <div className="pb-8">
          <p className="inline text-4xl font-bold text-gray-300 border-b-4 border-pink-600">
            Contact
          </p>
          <p className="py-4 text-gray-300">
            Submit the form below 
          </p>
        </div>
        <input
          className="bg-[#ccd6f6] p-3 rounded-md shadow-sm mb-4 focus:outline-none focus:ring-2 focus:ring-pink-600 transition"
          type="text"
          placeholder="Name"
          name="name"
          required
        />
        <input
          className="bg-[#ccd6f6] p-3 rounded-md shadow-sm mb-4 focus:outline-none focus:ring-2 focus:ring-pink-600 transition"
          type="email"
          placeholder="Email"
          name="email"
          required
        />
        <textarea
          className="bg-[#ccd6f6] p-3 rounded-md shadow-sm mb-6 focus:outline-none focus:ring-2 focus:ring-pink-600 transition"
          name="message"
          rows="8"
          placeholder="Message"
          required
        ></textarea>
        <button
          type="submit"
          className="flex items-center px-6 py-3 mx-auto font-semibold text-white transition bg-pink-600 border-2 border-pink-600 rounded-md hover:bg-pink-700"
        >
          Let's Collaborate
        </button>
      </form>
    </div>
  );
};

export default Contact;
