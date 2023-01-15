import React from "react";

const Contact = () => {
  return (
    <div
      id="contact"
      className="w-full h-screen bg-[#3C6255] flex justify-center items-center p-4"
    >
      <form
        method="POST"
        action="https://getform.io/f/59806df0-f6b2-4b72-a86d-66d37bd057ea"
        className="flex flex-col max-w-[600px] w-full"
      >
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-[#EAE7B1] text-[#DDDDDD]">
            Contact
          </p>
          <p className="text-[#DDDDDD] py-4">
            Send me a message or{" "}
            {
              <a className="underline" href="mailto:simranjeet.dev@gmail.com">
                Click Here
              </a>
            }
          </p>
        </div>
        <input
          className="bg-[#EEEEEE] p-2"
          type="text"
          placeholder="Name"
          name="name"
        />
        <input
          className="my-4 p-2 bg-[#EEEEEE]"
          type="email"
          placeholder="Email"
          name="email"
        />
        <textarea
          className="bg-[#EEEEEE] p-2"
          name="message"
          rows={10}
          placeholder="Message"
        ></textarea>
        <button className="text-white border-2 hover:bg-[#A6BB8D] hover:border-[#EAE7B1] px-4 py-3 my-8 mx-auto flex items-center">
          Send Message
        </button>
      </form>
    </div>
  );
};

export default Contact;
