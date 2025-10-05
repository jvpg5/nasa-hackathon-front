import { Focus, Lightbulb, Users } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900/50 py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-white text-4xl md:text-5xl font-bold mb-4">
            Find your perfect fit & grow with us
          </h2>
          <p className="text-gray-300 text-lg md:text-xl max-w-3xl mx-auto">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="flex flex-col items-center">
            <div className="p-4 bg-gray-800/60 rounded-full mb-4">
              <Focus className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-white text-2xl font-semibold mb-2">
              Focus & Productivity
            </h3>
            <p className="text-gray-400">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
          <div className="flex flex-col items-center">
            <div className="p-4 bg-gray-800/60 rounded-full mb-4">
              <Lightbulb className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-white text-2xl font-semibold mb-2">
              Spark Innovation
            </h3>
            <p className="text-gray-400">
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
          <div className="flex flex-col items-center">
            <div className="p-4 bg-gray-800/60 rounded-full mb-4">
              <Users className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-white text-2xl font-semibold mb-2">
              Supportive Community
            </h3>
            <p className="text-gray-400">
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur.
            </p>
          </div>
        </div>
        <div className="text-center mt-16 text-gray-500">
          <p>&copy; {new Date().getFullYear()} NASA Hackathon. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
