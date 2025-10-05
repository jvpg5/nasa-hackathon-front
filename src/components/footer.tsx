import { Focus, Lightbulb, Users } from "lucide-react";

const Footer = () => {
  function handleAnimationComplete(): void {
    throw new Error("Function not implemented.");
  }

  return (
    <footer className="bg-gray-900/50 py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-white text-4xl md:text-5xl font-bold mb-4">
            Lorem ipsum dolor sit amet
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
              Lorem ipsum 
            </h3>
            <p className="text-gray-400">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>
          <div className="flex flex-col items-center">
            <div className="p-4 bg-gray-800/60 rounded-full mb-4">
              <Lightbulb className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-white text-2xl font-semibold mb-2">
              Lorem ipsum 
            </h3>
            <p className="text-gray-400">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>
          <div className="flex flex-col items-center">
            <div className="p-4 bg-gray-800/60 rounded-full mb-4">
              <Users className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-white text-2xl font-semibold mb-2">
              Lorem ipsum 
            </h3>
            <p className="text-gray-400">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
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
