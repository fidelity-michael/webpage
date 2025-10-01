import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

/* TODO: Add limit to emails sent */
const Contact: React.FC = () => {
  const form = useRef<HTMLFormElement>(null);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState<string | null>(null);

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.current) return;

    setLoading(true);
    setSuccess(null);

    emailjs
      .sendForm(
        "service_rzmun32", // EmailJS Service ID
        "template_bhdjlxc", // EmailJS Template ID
        form.current,
        "bNvx51XuOB2AJMZtq", // Public Key
      )
      .then(
        () => {
          setSuccess("Message sent successfully ✅");
          setLoading(false);
          form.current?.reset();
        },
        (error) => {
          console.error("EmailJS error:", error.text);
          setSuccess("Something went wrong ❌");
          setLoading(false);
        },
      );
  };

  return (
    <section id="Contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2
            className="text-3xl font-bold text-gray-900 mb-4"
            data-aos="fade-up"
          >
            Get In Touch
          </h2>
          <div className="w-20 h-1 bg-indigo-600 mx-auto mb-6"></div>
          <p
            className="text-lg text-gray-600 max-w-3xl mx-auto"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            Have a project in mind or want to collaborate? I'd love to hear from
            you!
          </p>
        </div>

        {/* Contact Form */}
        <div className="max-w-3xl mx-auto">
          <form
            ref={form}
            onSubmit={sendEmail}
            className="space-y-6"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            {/* Name + Email */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="user_name"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="user_email"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
                />
              </div>
            </div>

            {/* Subject */}
            <div>
              <label
                htmlFor="subject"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>

            {/* Message */}
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
              ></textarea>
            </div>

            {/* Submit Button */}
            <div>
              <button
                type="submit"
                disabled={loading}
                className="w-full bg-indigo-600 text-white px-6 py-3 rounded-md font-medium hover:cursor-pointer hover:bg-indigo-700 transition duration-150 disabled:opacity-50"
              >
                {loading ? "Sending..." : "Send Message"}
              </button>
            </div>

            {/* TODO: Remove text after X seconds */}
            {/* Success / Error Message */}
            {success && (
              <p className="text-center mt-4 text-sm text-gray-700">
                {success}
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
