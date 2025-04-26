
import { useState, useEffect } from "react";

const Footer = () => {
  const [year, setYear] = useState("");

  useEffect(() => {
    setYear(new Date().getFullYear().toString());
  }, []);

  return (
    <footer className="py-6 px-4 mt-auto border-t border-gray-200 bg-white">
      <div className="container flex flex-col items-center justify-center gap-2 md:flex-row md:justify-between">
        <p className="text-xs text-gray-600 text-center">
          &copy; {year} Feedback Collector. All rights reserved.
        </p>
        <p className="text-xs text-gray-600 text-center">
          Created by Your Name - Feedback Collector Task Submission
        </p>
      </div>
    </footer>
  );
};

export default Footer;
