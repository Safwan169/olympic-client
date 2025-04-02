import React, { useEffect, useState } from "react";
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
  ArrowLeft,
  ChevronRight,
} from "lucide-react";

const NotFoundPage = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <div className="relative min-h-screen w-full pb-16 overflow-hidden bg-black font-sans text-white">
      {/* Background with animated gradient overlay */}
      <div className="absolute inset-0 bg-black -z-20"></div>
      <div className="absolute inset-0 opacity-20 -z-10 bg-gradient-to-br from-red-600 to-black"></div>

      {/* Animated particles */}
      <div className="absolute inset-0 -z-5">
        {Array.from({ length: 20 }).map((_, i) => (
          <div
            key={i}
            className={`absolute w-1 h-1 rounded-full bg-yellow-500 opacity-70 animate-ping`}
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDuration: `${3 + Math.random() * 5}s`,
              animationDelay: `${Math.random() * 2}s`,
            }}
          ></div>
        ))}
      </div>

      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-red-600 via-yellow-500 to-red-600"></div>
      <div className="absolute bottom-0 left-0 w-full h-2 bg-gradient-to-r from-red-600 via-yellow-500 to-red-600"></div>

      {/* Golden circuit lines */}
      <div className="absolute top-0 left-0 w-1/3 h-px bg-yellow-500/40"></div>
      <div className="absolute top-0 right-0 w-1/4 h-px bg-yellow-500/40"></div>
      <div className="absolute top-40 right-0 w-1/2 h-px bg-yellow-500/40"></div>
      <div className="absolute bottom-40 left-0 w-3/5 h-px bg-yellow-500/40"></div>
      <div className="absolute top-10 left-10 w-px h-20 bg-yellow-500/40"></div>
      <div className="absolute top-10 right-10 w-px h-40 bg-yellow-500/40"></div>
      <div className="absolute bottom-10 right-40 w-px h-20 bg-yellow-500/40"></div>

      {/* Error Message Box */}
      <div
        className={`absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 transition-all duration-1000 ${
          loaded ? "opacity-100 scale-100" : "opacity-0 scale-95"
        }`}
      >
        <div className="relative">
          <div className="absolute -inset-1 bg-gradient-to-r from-red-600 via-yellow-500 to-red-600 rounded-xl opacity-75 blur-sm"></div>
          <div className="relative bg-black/90 backdrop-blur-sm px-16 py-10 rounded-xl text-center border border-yellow-500/50 shadow-2xl">
            <h1 className="text-9xl font-bold m-0 p-0 bg-clip-text text-transparent bg-gradient-to-r from-red-600 via-yellow-400 to-red-600 animate-pulse">
              404
            </h1>
            <h2 className="text-4xl font-bold m-0 p-0 text-white/90 mb-2">
              Page Not Found
            </h2>
            <p className="text-yellow-400/80 max-w-md mb-6">
              The page you're looking for doesn't exist or has been moved.
            </p>
            <a
              href="/"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-red-700 to-red-600 hover:from-red-600 hover:to-red-500 text-white rounded-lg font-medium shadow-lg shadow-red-600/30 transition-all duration-300 hover:-translate-y-1"
            >
              <ArrowLeft size={16} />
              Return Home
            </a>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <div
        className={`absolute bottom-36 left-1/2 -translate-x-1/2 flex z-10 gap-1 transition-all duration-1000 delay-300 ${
          loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        {[
          { name: "Home", href: "/" },
          { name: "Admin", href: "/admin/dashboard" },
          { name: "Login", href: "/login" },
        ].map((link, i) => (
          <a
            key={i}
            href={link.href}
            className="group px-6 py-3 bg-black border border-yellow-500/30 hover:border-yellow-500/70 hover:bg-black/80 transition-all duration-300 backdrop-blur-sm first:rounded-l-lg last:rounded-r-lg font-medium hover:shadow-lg relative overflow-hidden"
          >
            <span className="relative z-10 flex items-center gap-1">
              {link.name}
              <ChevronRight
                size={16}
                className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300"
              />
            </span>
            <div className="absolute bottom-0 left-0 w-full h-0 group-hover:h-full bg-gradient-to-t from-red-900/20 to-transparent transition-all duration-300 z-0"></div>
          </a>
        ))}
      </div>

      {/* Social Icons */}
      <div
        className={`absolute bottom-16 left-1/2 -translate-x-1/2 flex z-10 gap-3 transition-all duration-1000 delay-500 ${
          loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        {[
          <Facebook size={18} />,
          <Twitter size={18} />,
          <Instagram size={18} />,
          <Linkedin size={18} />,
          <Youtube size={18} />,
          <Twitch size={18} />,
          <Github size={18} />,
          <Slack size={18} />,
          <Rss size={18} />,
        ].map((icon, i) => (
          <a
            key={i}
            href="#"
            className="w-10 h-10 bg-black border border-yellow-500/30 hover:border-yellow-500 transition-all duration-300 rounded-full flex items-center justify-center hover:shadow-lg hover:shadow-red-600/20 hover:-translate-y-1 group relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-red-700/80 to-red-900/80 opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
            <div className="relative z-10 text-yellow-500 group-hover:text-yellow-400">
              {icon}
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default NotFoundPage;
