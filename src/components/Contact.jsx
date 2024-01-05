import {
  IoMailOutline,
  IoCallOutline,
  IoLocationOutline,
} from "react-icons/io5";

export default function ContactSection() {
  return (
    <div className=" text-black p-10 flex justify-center items-center" id="contact">
      <div className="w-[500px]">
        <div className="flex flex-col">
          <div className="flex items-center mb-4">
            <IoCallOutline size="1.5em" className="mr-4" />
            <div>
              <div className="font-semibold">Call Me</div>
              <div>(087) 627 6005</div>
            </div>
          </div>
          <div className="flex items-center mb-4">
            <IoMailOutline size="1.5em" className="mr-4" />
            <div>
              <div className="font-semibold">Email Me</div>
              <div>example@gmail.com</div>
            </div>
          </div>
          <div className="flex items-center mb-4">
            <IoLocationOutline size="1.5em" className="mr-4" />
            <div>
              <div className="font-semibold">Address</div>
              <div>208 Trainer Avenue street, Illinois, UK - 62617.</div>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Form */}
      <div className="p-10">
        <h3 className=" font-semibold text-left text-blue-500 uppercase text-[14px]">
          Get In Touch
        </h3>
        <h2 className="text-2xl text-left text-gray text-black mb-4 font-semibold">
          Contact Me
        </h2>
        <form className="space-y-4">
          <div className="flex space-x-4">
            <input
              type="text"
              placeholder="Name"
              className="flex-1 p-3 b text-black border border-gray-600 rounded-md focus:outline-none"
            />
            <input
              type="email"
              placeholder="Email"
              className="flex-1 p-3  text-black border border-gray-600 rounded-md focus:outline-none"
            />
          </div>
          <input
            type="text"
            placeholder="Subject"
            className="w-full p-3  text-black border border-gray-600 rounded-md focus:outline-none"
          />
          <textarea
            placeholder="Message"
            rows="4"
            className="w-full p-3  text-black border border-gray-600 rounded-md focus:outline-none"
          ></textarea>

          <button
            type="submit"
            className="w-[150px] p-3  bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring focus:ring-blue-300 "
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}
