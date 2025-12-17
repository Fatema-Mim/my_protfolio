import React from 'react';

const Contact = () => {
  return (
    <div
      name="contact"
      className="w-full md:min-h-screen bg-gradient-to-b from-[#112240] to-[#0a192f] py-28 flex items-center"
    >
      <div className="max-w-[900px] mx-auto px-8 w-full">
        <div className="mb-20 text-center animate-bounce-in">
          <p className="inline text-4xl font-bold border-b-4 border-cyan-500 text-gray-300">
            Contact
          </p>
        </div>

        {/* Contact Form */}
        <form
          method="POST"
          action="https://getform.io/f/a793803e-ad66-42e9-94af-261b44884792"
          className="flex flex-col bg-gradient-to-br from-[#112240] to-[#0a192f] p-8 rounded-2xl border border-cyan-500/20 shadow-2xl animate-fade-in-scale delay-300 hover:shadow-cyan-500/30 transition-all duration-500"
        >
          <h3 className="mb-6 text-2xl font-bold text-cyan-500">Send a Message</h3>

          <input
            className="bg-[#0a192f] text-gray-300 p-4 rounded-lg mb-4 border border-cyan-500/20 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition placeholder-gray-500"
            type="text"
            placeholder="Your Name"
            name="name"
            required
          />
          <input
            className="bg-[#0a192f] text-gray-300 p-4 rounded-lg mb-4 border border-cyan-500/20 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition placeholder-gray-500"
            type="email"
            placeholder="Your Email"
            name="email"
            required
          />
          <textarea
            className="bg-[#0a192f] text-gray-300 p-4 rounded-lg mb-6 border border-cyan-500/20 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition placeholder-gray-500 resize-none"
            name="message"
            rows="6"
            placeholder="Your Message"
            required
          ></textarea>
          <button
            type="submit"
            className="px-8 py-4 font-semibold text-white transition-all duration-300 transform rounded-lg shadow-lg bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 hover:shadow-cyan-500/50 hover:scale-105"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
