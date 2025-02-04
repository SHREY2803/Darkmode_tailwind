import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { use } from "react";

function App() {
  // let [theme, setTheme] = useState('light');

  // useEffect(() => {
  //   document.documentElement.classList.add("dark");
  // }, [theme]);
  
  return (
    <>
      <div className="h-screen w-screen flex flex-col justify-center items-center dark:bg-gray-900 dark:text-white ">
        <button 
        className="absolute right-10 top-10 bg-black text-white py-3 px-2 rounded-md dark:bg-white dark:text-black" >DarkMode</button>
        <h1 className="text-5xl text-center font-extrabold mb-9">
          Learning Darkmode with Tailwind css
        </h1>
        <p className="w-[50%] text-xl text-center mb-9">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam
          possimus dignissimos veritatis, quod aperiam eos voluptas accusantium
          nisi sint optio.
        </p>
        <button className="bg-indigo-700 text-white rounded-xl px-4 py-4 hover:bg-indigo-400 ">
          Get Started
        </button>
      </div>
    </>
  );
}

export default App;
