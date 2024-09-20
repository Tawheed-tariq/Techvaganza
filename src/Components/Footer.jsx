import { FaInstagram, FaYoutube, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer 
      style={{
        // backgroundImage:
        //   "linear-gradient(to bottom, #000000 0%, #0000009f 50%, #00000033 100%), url(/common/footer.png)",
        backgroundImage: `url(/common/footer.png)`,
        backgroundPosition: "center center"
      }} 
      className="bg-blend-overlay bg-cover bg-top h-96 relative text-white flex flex-col justify-center items-center font-playfair"
    >
      {/* Overlay for reducing brightness of background image */}
      <div className="absolute inset-0 bg-black opacity-40 z-0"></div>

      <div className="absolute h-auto left-0 right-0 z-10 flex flex-col justify-around items-center mt-28">
        <div className="container mx-auto text-center">
          <div className="relative z-10 mb-4 overflow-visible text-3xl md:text-5xl lg:text-8xl">
            <a href="/" className="text-5xl md:text-7xl font-neotriad lg:text-8xl font-bold">
              Techvaganza
            </a>
          </div>

          <div className="mb-4">
            <a
              href="mailto:techvaganza@nitsri.ac.in"
              className="text-md md:text-xl hover:text-secondary underline-animate relative inline-block font-kodeMono"
            >
              techvaganza@nitsri.ac.in
            </a>
          </div>

          <div className="flex justify-center space-x-4 gap-x-5">
            <a
              href="https://www.instagram.com/techvaganza.nitsri"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram
                size={24}
                className="text-secondary hover:text-white transition duration-300"
              />
            </a>
            <a
              href="https://www.youtube.com/@NITSrinagarofficial"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaYoutube
                size={24}
                className="text-secondary hover:text-white transition duration-300"
              />
            </a>
            <a
              href="https://www.linkedin.com/company/techvaganza-nit-srinagar/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin
                size={24}
                className="text-secondary hover:text-white transition duration-300"
              />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
