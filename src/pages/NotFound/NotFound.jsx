import React from "react";
import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Youtube,
  Twitch,
  Github,
  Slack,
  Rss,
} from "lucide-react";

const NotFoundPage = () => {
  return (
    <div className="relative h-screen w-full overflow-hidden bg-gradient-to-b from-indigo-400 to-blue-500 font-sans text-white">
      {/* Sky and Clouds */}
      <div className="absolute inset-x-0 top-0 h-4/5 bg-gradient-to-b from-indigo-400 to-blue-500 -z-10"></div>

      {/* Error Message Box */}
      <div className="absolute top-20 left-1/2 -translate-x-1/2 bg-white/20 backdrop-blur-sm px-12 py-6 rounded-3xl text-center shadow-xl border border-white/30">
        <h1 className="text-9xl font-bold m-0 p-0 text-white drop-shadow-lg">
          404
        </h1>
        <h2 className="text-4xl font-bold m-0 p-0 text-white/90">
          Page Not Found
        </h2>
      </div>

      {/* Message */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 w-4/5 text-center mt-4">
        <p className="text-xl font-medium text-white/90 drop-shadow-md">
          Unfortunately the page you were looking for could not be found.
        </p>
        <p className="text-xl font-medium text-white/90 drop-shadow-md mt-2">
          Take a look around the rest of our site.
        </p>
      </div>

      {/* Ground and Road */}
      {/* <div className="absolute inset-x-0 bottom-0 h-1/3 bg-emerald-500 -z-10"></div>
      <div className="absolute inset-x-0 bottom-24 h-20 bg-gray-800 z-0">
        <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-2 z-10">
          <div className="w-full h-full bg-white [mask-image:repeating-linear-gradient(to_right,white_0px,white_40px,transparent_40px,transparent_80px)]"></div>
        </div>
      </div> */}

      {/* Navigation */}
      <div className="absolute bottom-36 left-1/2 -translate-x-1/2 flex z-10 gap-1">
        {[
          { name: "Home", href: "/" },
          { name: "Admin", href: "/admin/dashboard" },
          { name: "Login", href: "/login" },
        ].map((link, i) => (
          <a
            key={i}
            href={link.href}
            className="px-8 py-3 bg-white/20 hover:bg-white/30 transition-all duration-300 backdrop-blur-sm first:rounded-l-lg last:rounded-r-lg font-medium border-t border-l border-r border-white/30 hover:shadow-lg"
          >
            {link.name}
          </a>
        ))}
      </div>

      {/* Social Icons */}
      <div className="absolute bottom-20 left-1/2 -translate-x-1/2 flex z-10 gap-2">
        {[
          <Facebook size={20} />,
          <Twitter size={20} />,
          <Instagram size={20} />,
          <Linkedin size={20} />,
          <Youtube size={20} />,
          <Twitch size={20} />,
          <Github size={20} />,
          <Slack size={20} />,
          <Rss size={20} />,
        ].map((icon, i) => (
          <a
            key={i}
            href="#"
            className="w-10 h-10 bg-white/20 hover:bg-white/30 transition-all duration-300 rounded-full flex items-center justify-center border border-white/30 hover:shadow-lg group"
          >
            <div className="text-white/90 group-hover:text-white">{icon}</div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default NotFoundPage;
