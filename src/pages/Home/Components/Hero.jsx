import { useState, useEffect, useRef, useCallback } from "react";
import Header from "../../../Components/Header";
import { Link } from "react-router-dom";
import Aos from "aos";
import "aos/dist/aos.css";
import { FaAddressCard } from "react-icons/fa6";

function Hero() {
  const targetDate = "2024-10-10T09:00:00";

  const calculateTimeLeft = () => {
    const difference = +new Date(targetDate) - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: String(Math.floor(difference / (1000 * 60 * 60 * 24))).padStart(
          2,
          "0"
        ),
        hours: String(
          Math.floor((difference / (1000 * 60 * 60)) % 24)
        ).padStart(2, "0"),
        minutes: String(Math.floor((difference / 1000 / 60) % 60)).padStart(
          2,
          "0"
        ),
        seconds: String(Math.floor((difference / 1000) % 60)).padStart(2, "0"),
      };
    } else {
      timeLeft = {
        days: "00",
        hours: "00",
        minutes: "00",
        seconds: "00",
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  });

  // scrambling text animation
  const [scrambledText, setScrambledText] = useState("Techvaganza");
  const textRef = useRef(null);
  const letters = "abcdefghijklmnopqrstuvwxyz";
  const originalText = "Techvaganza";

  const scrambleText = useCallback(() => {
    let iteration = 0;
    const interval = setInterval(() => {
      setScrambledText((prev) =>
        prev
          .split("")
          .map((letter, index) => {
            if (index < iteration) {
              return originalText[index];
            }
            return letters[Math.floor(Math.random() * 26)];
          })
          .join("")
      );

      if (iteration >= originalText.length) {
        clearInterval(interval);
      }

      iteration += 1 / 3;
    }, 50);
  }, []);

  useEffect(() => {
    scrambleText();
    const intervalId = setInterval(scrambleText, 10000);
    return () => clearInterval(intervalId);
  }, [scrambleText]);

  // Animate on scroll initialization
  useEffect(() => {
    Aos.init({
      duration: 1000,
      anchorPlacement: "top-center",
      disable: "Phone",
      startEvent: "DOMContentLoaded",
      easing: "ease-out",
      mirror: true,
    });
  }, []);

  return (
    <div className="relative min-h-screen overflow-hidden mb-40">
      <video
        autoPlay
        loop
        muted
        className="absolute z-0 w-full h-full object-cover"
      >
        <source src="/common/hero.mp4" type="video/mp4" />
        {/* Fallback content for browsers that don't support video */}
        <img
          src="/common/hero-cover.jpeg"
          alt="Background"
          className="absolute z-0 w-full h-full object-cover"
        />
      </video>

      {/* Overlay */}
      <div className="absolute z-10 inset-0 bg-gradient-to-b from-black via-black/40 to-black/20"></div>

      <div className="relative z-20">
        <div>
          <Header />
        </div>
        <div className="p-7 md:p-32 flex items-center h-full justify-center">
          <div className="overflow-visible">
            <div
              data-aos="fade-down"
              data-aos-duration="2000"
              className="text-white text-xl ss:text-2xl md:text-4xl text-center overflow-visible xs:whitespace-nowrap"
            >
              Thank you for being a part of Techvaganza <br />See you next year for an
              even bigger and better edition!
            </div>
            <p
              ref={textRef}
              className="text-center text-5xl ss:text-7xl sm:text-8xl md:text-9xl mt-4 text-white font-neotriad font-extrabold overflow-visible textShadow"
            >
              {scrambledText}
            </p>

            <p className="text-center text-2xl ss:text-3xl  mt-4 text-white font-kodeMono font-bold overflow-visible textShadow-sm">
              Greener Innovations: Engineering a Sustainable World
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
