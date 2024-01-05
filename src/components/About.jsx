import HeroImage from "../assets/imgs/MHERO-2.png";

export default function AboutMe() {
  const pdfFile = "./file/Sample.pdf";
  return (
    <div className="flex justify-center items-center pt-20" id="about">
      <div className="w-[500px] flex">
        <img src={HeroImage} alt="" />
      </div>

      <div className="w-4/4 p-6  text-black flex flex-col ">
        <div>
          <h3 className=" font-semibold text-left text-blue-500 mb-2 uppercase text-[18px]">
            About Me
          </h3>
          <h1 className="text-4xl my-2 max-w-[600px]">
            I’m Mahmoud Almahroum <span className="color-letter">&</span> I'm An
            App Developer & A Web Developer.
          </h1>

          <p className="mb-4 max-w-[650px]">
            Lorem ipsum viverra feugiat. Pellen tesque libero ut justo, ultrices
            in ligula. Semper at tempufddfel. Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Non quae, fugiat consequatur
            voluptatem nihil ad. Lorem ipsum dolor sit amet.
          </p>
          <div className="mb-4 flex text-left gap-[172px]">
            <p>
              <strong>Name:</strong> Mahmoud Almahroum
            </p>
            <p>
              <strong>From:</strong> Dublin, Ireland
            </p>
          </div>

          <div className="flex text-left justify-between">
            <p>
              <strong>Age:</strong> 24 Years
            </p>
            <p>
              <strong>Email:</strong> mahmoudalmahroum@gmail.com
            </p>
          </div>
        </div>
        {/* Social icons */}
        <div className="flex flex-wrap btn-container mt-6">
          <a
            href={pdfFile}
            className="cursor-pointer group relative flex gap-1.5 d-button"
            download="Sample.pdf"
          >
            Download CV
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              height="24px"
              width="24px"
            >
              <g
                strokeLinejoin="round"
                strokeLinecap="round"
                strokeWidth="2"
                stroke="#000"
              >
                <path d="M6 21H18M12 3V17M12 17L17 12M12 17L7 12" />
              </g>
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
}
