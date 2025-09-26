import React, { useEffect, useState } from "react";

const DarkModeToggle: React.FC = () => {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [dark]);

  return (
    <button
      onClick={() => setDark(!dark)}
      className="px-3 py-2 bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-gray-100 rounded-md"
    >
      {dark ? "☀️ Light" : "🌙 Dark"}
    </button>
  );
};

export default DarkModeToggle;
