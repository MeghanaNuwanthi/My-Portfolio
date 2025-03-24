import React from "react";

const ContactSection = () => {
  return (
    <section id="contact" className="bg-[#2E2D2D] text-[#fff] py-12 px-6 flex justify-center">
      <div className="max-w-2xl w-full">
        {/* Title */}
        <h2 className="text-3xl font-bold text-white mb-4">Get In Touch</h2>
        <div className="h-1 w-16 bg-[#D97183] mb-6"></div>

        {/* Form */}
        <form className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="Name *"
              className="w-full p-3 bg-[#2E2D2D] border border-[#E4E4E4] rounded-md focus:outline-none focus:ring-2 focus:ring-[#D97183]"
            />
            <input
              type="email"
              placeholder="Email *"
              className="w-full p-3 bg-[#2E2D2D] border border-[#E4E4E4] rounded-md focus:outline-none focus:ring-2 focus:ring-[#D97183]"
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="tel"
              placeholder="Phone"
              className="w-full p-3 bg-[#2E2D2D] border border-[#E4E4E4] rounded-md focus:outline-none focus:ring-2 focus:ring-[#D97183]"
            />
            <input
              type="text"
              placeholder="Subject"
              className="w-full p-3 bg-[#2E2D2D] border border-[#E4E4E4] rounded-md focus:outline-none focus:ring-2 focus:ring-[#D97183]"
            />
          </div>
          <textarea
            placeholder="Message"
            className="w-full p-3 bg-[#2E2D2D] border border-[#E4E4E4] rounded-md focus:outline-none focus:ring-2 focus:ring-[#D97183] h-32"
          ></textarea>

          {/* Submit Button */}
          <div className="flex justify-center">
            <button className="bg-[#D97183] hover:bg-[#D98795] text-white font-semibold py-3 px-6 rounded-md shadow-md transition duration-300">
              MESSAGE ME
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ContactSection;
