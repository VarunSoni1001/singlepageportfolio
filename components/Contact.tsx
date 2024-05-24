import React, { useState } from "react";

type ErrorTypes = {
  name: string;
  email: string;
  message: string;
};

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [formErrors, setFormErrors] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleChange = (e: { target: { name: any; value: any } }) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    // Clear error message when user starts typing
    setFormErrors({ ...formErrors, [name]: "" });
  };

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    let errors = {} as ErrorTypes;
    if (!formData.name) {
      errors.name = "Name is required";
    }
    if (!formData.email) {
      errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = "Email is invalid";
    }
    if (!formData.message) {
      errors.message = "Message is required";
    }
    if (Object.keys(errors).length === 0) {
      // Form is valid
      setFormSubmitted(true);
    } else {
      // Form is invalid, display errors
      setFormErrors(errors);
    }
  };

  const handleResubmit = () => {
    setFormSubmitted(false);
    setFormData({ name: "", email: "", message: "" });
    setFormErrors({ name: "", email: "", message: "" });
  };

  return (
    <section className="min-h-[90vh] bg-transparent pb-24 flex items-center justify-center">
      <div className="container mx-auto px-5">
        <div className="flex flex-col items-center text-center">
          <h1
            id="contact"
            className="text-4xl text-center mb-6 text-gray-900 font-bold"
          >
            Contact
          </h1>
          <hr
            className="border-fuchsia-800 border-t-4 rounded-xl w-16 mb-16 dark:border-gray-200"
            style={{ opacity: 1, transform: "none" }}
          />
          {formSubmitted ? (
            <div className="min-h-[60vh]">
              <p className="text-green-600 mb-4 font-bold mt-32">
                Thank you for your message!
              </p>
              <button
                onClick={handleResubmit}
                className="bg-fuchsia-700 hover:bg-fuchsia-900 text-white font-bold py-2 px-4 rounded-xl focus:outline-none focus:shadow-outline transition-all duration-300"
              >
                Resubmit
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="max-w-lg w-full">
              <div className="mb-6">
                <label
                  htmlFor="name"
                  className="block text-gray-700 text-sm text-left px-3 font-bold mb-2"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  className={`appearance-none border rounded-xl w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
                    formErrors.name ? "border-red-500" : ""
                  }`}
                />
                <p
                  className={`text-red-500 text-xs mt-1 ${
                    formErrors.name ? "block" : "invisible"
                  }`}
                >
                  {formErrors.name}
                </p>
              </div>
              <div className="mb-6">
                <label
                  htmlFor="email"
                  className="block text-gray-700 text-sm text-left px-3 font-bold mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Your Email"
                  className={`appearance-none border rounded-xl w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
                    formErrors.email ? "border-red-500" : ""
                  }`}
                />
                <p
                  className={`text-red-500 text-xs mt-1 ${
                    formErrors.email ? "block" : "invisible"
                  }`}
                >
                  {formErrors.email}
                </p>
              </div>
              <div className="mb-6">
                <div className="flex items-center justify-between mb-2 px-3 gap-3">
                  <label
                    htmlFor="message"
                    className="block text-gray-700 text-sm font-bold"
                  >
                    Message
                  </label>
                  <p className="text-gray-500 text-xs">
                    {formData.message.length}/1000
                  </p>
                </div>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your Message"
                  rows={4}
                  maxLength={1000}
                  className={`appearance-none border rounded-xl w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
                    formErrors.message ? "border-red-500" : ""
                  }`}
                />
                <p
                  className={`text-red-500 text-xs mt-1 ${
                    formErrors.message ? "block" : "invisible"
                  }`}
                >
                  {formErrors.message}
                </p>
              </div>
              <button
                type="submit"
                className="bg-fuchsia-700 hover:bg-fuchsia-900 text-white font-bold py-2 px-4 rounded-xl focus:outline-none focus:shadow-outline transition-all duration-300"
              >
                Send Message
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};
