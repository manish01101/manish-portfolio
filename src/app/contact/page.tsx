"use client";

import { Mail, MapPin, Phone, Send } from "lucide-react";
import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };
  return (
    <section className="py-20 px-5 bg-gray-300">
      <div className="max-w-6xl mx-auto sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
          Let&apos;s Work Together
        </h2>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          I&apos;m always interested in new opportunities and exciting projects.
        </p>
      </div>
      <div className="grid lg:grid-cols-2 gap-12 pt-15">
        {/* contact info */}
        <div className="">
          <h3 className="text-2xl font-bold  mb-8">Get in Touch</h3>
          <div className="space-y-6 mb-8">
            <div className="flex items-center">
              <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mr-4">
                <Mail className="w-6 h-6 " />
              </div>
              <div>
                <p className="text-gray-800 text-sm font-bold">Email</p>
                <a
                  href="mailto:manishkumar110113@gmail.com"
                  className=" hover:text-blue-400 transition-colors"
                >
                  manishkumar110113@gmail.com
                </a>
              </div>
            </div>

            {/* <div className="flex items-center">
              <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center mr-4">
                <Phone className="w-6 h-6 " />
              </div>
              <div>
                <p className="text-gray-800 text-sm font-bold">Phone</p>
                <a
                  href="tel:+91"
                  className=" hover:text-blue-400 transition-colors"
                >
                  +91
                </a>
              </div>
            </div> */}

            <div className="flex items-center">
              <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center mr-4">
                <MapPin className="w-6 h-6 " />
              </div>
              <div>
                <p className="text-gray-800 text-sm font-bold">Location</p>
                <p className="">Kolkata, India</p>
              </div>
            </div>
          </div>
        </div>

        {/* contact form */}
        <div className="bg-white py-10 px-5 rounded-xl">
          <h3 className="font-bold text-2xl pb-2">Send a Message</h3>
          <form action="" onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label
                  htmlFor="subject"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                  placeholder="What's this about?"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>
              <button
                type="submit"
                className="flex items-center justify-center bg-blue-600 px-6 py-4 rounded-lg  text-md font-bold cursor-pointer transition-all duration-300 transform hover:bg-blue-700 hover:scale-103 "
              >
                <Send className="w-5 h-5 mr-2" />
                <span>Send Message</span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
