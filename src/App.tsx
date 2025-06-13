import { Route, Routes, Link } from "react-router-dom";
import "./App.css";
import Profile from "./pages/Profile";

function App() {
  return (
    <>
      <section className="">
        {/* navbar */}
        <nav className="bg-main-color fixed top-0 w-full px-32 py-5 flex justify-between text-lg">
          <Link
            to="/profile"
            className="bg-main-color size-12 rounded-full grid place-items-center shadow-xl font-bold text-lg"
          >
            C
          </Link>
          <div className="flex gap-5">
            <button className="cursor-pointer size-10 rounded-lg border border-2"></button>
            <button className="cursor-pointer size-10 rounded-lg border border-2"></button>
          </div>
        </nav>

        <div className="text-center font-display min-h-screen flex flex-col items-center justify-center bg-main-color">
          <div className="space-y-2">
            <h1 className="font-semibold text-2xl">Chris's Landing Page</h1>
            <h1 className="text-black/40 text-shadow-sm font-semibold">
              This is Chris's Landing Page
            </h1>
          </div>

          <div className="flex gap-5 items-center justify-center flex-wrap">
            <div className="text-left max-w-[550px] shadow shadow-md border border-black/10 rounded-md p-5 flex gap-5 items-start mt-5">
              <div className="size-10 bg-gray-500 rounded-md text-transparent">
                tests sdfsadf
              </div>
              <div>
                <h1 className="font-bold">Christian Carlos Tertius</h1>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Blanditiis itaque earum, voluptatum cupiditate doloremque
                  facere
                </p>

                <button className="border border-2 rounded-md px-4 py-1 mt-3">
                  inspiration
                </button>
              </div>
            </div>

            <div className="flex gap-3 w-[40%] flex-wrap">
              <button className="bg-black py-[5px] shadow shadow-lg px-4 rounded-full text-white">
                inspiration
              </button>
              <button className="border border-black py-[5px] shadow shadow-lg px-4 rounded-full">
                inspiration
              </button>
              <button className="border border-black py-[5px] shadow shadow-lg px-4 rounded-full">
                inspiration
              </button>
              <button className="border border-black py-[5px] shadow shadow-lg px-4 rounded-full">
                inspiration
              </button>
              <button className="border border-black py-[5px] shadow shadow-lg px-4 rounded-full">
                inspiration
              </button>
              <button className="border border-black py-[5px] shadow shadow-lg px-4 rounded-full">
                inspiration
              </button>
              <button className="border border-black py-[5px] shadow shadow-lg px-4 rounded-full">
                inspiration
              </button>
              <button className="border border-black py-[5px] shadow shadow-lg px-4 rounded-full">
                inspiration
              </button>
            </div>
          </div>
        </div>

        <footer className="py-5 px-12 text-center flex justify-between items-center bg-main-color fixed bottom-0 w-full">
          <h1 className="font-semibold text-lg">
            Created by 💘 Christian Carlos Tertius
          </h1>
          <div className="flex items-center gap-5">
            <a href="https://www.instagram.com/kevinppxs/" target="_blank">
              <div className="bg-main-color size-12 rounded-full grid place-items-center shadow-xl">
                <svg
                  className="size-8 text-gray-800 dark:text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    fill-rule="evenodd"
                    d="M3 8a5 5 0 0 1 5-5h8a5 5 0 0 1 5 5v8a5 5 0 0 1-5 5H8a5 5 0 0 1-5-5V8Zm5-3a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H8Zm7.597 2.214a1 1 0 0 1 1-1h.01a1 1 0 1 1 0 2h-.01a1 1 0 0 1-1-1ZM12 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6Zm-5 3a5 5 0 1 1 10 0 5 5 0 0 1-10 0Z"
                    clip-rule="evenodd"
                  />
                </svg>
              </div>
            </a>
            <a href="https://github.com/ChristianTertius" target="_blank">
              <div className="bg-main-color size-12 rounded-full grid place-items-center shadow-xl">
                <svg
                  className="size-8 text-gray-800 dark:text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill-rule="evenodd"
                    d="M12.006 2a9.847 9.847 0 0 0-6.484 2.44 10.32 10.32 0 0 0-3.393 6.17 10.48 10.48 0 0 0 1.317 6.955 10.045 10.045 0 0 0 5.4 4.418c.504.095.683-.223.683-.494 0-.245-.01-1.052-.014-1.908-2.78.62-3.366-1.21-3.366-1.21a2.711 2.711 0 0 0-1.11-1.5c-.907-.637.07-.621.07-.621.317.044.62.163.885.346.266.183.487.426.647.71.135.253.318.476.538.655a2.079 2.079 0 0 0 2.37.196c.045-.52.27-1.006.635-1.37-2.219-.259-4.554-1.138-4.554-5.07a4.022 4.022 0 0 1 1.031-2.75 3.77 3.77 0 0 1 .096-2.713s.839-.275 2.749 1.05a9.26 9.26 0 0 1 5.004 0c1.906-1.325 2.74-1.05 2.74-1.05.37.858.406 1.828.101 2.713a4.017 4.017 0 0 1 1.029 2.75c0 3.939-2.339 4.805-4.564 5.058a2.471 2.471 0 0 1 .679 1.897c0 1.372-.012 2.477-.012 2.814 0 .272.18.592.687.492a10.05 10.05 0 0 0 5.388-4.421 10.473 10.473 0 0 0 1.313-6.948 10.32 10.32 0 0 0-3.39-6.165A9.847 9.847 0 0 0 12.007 2Z"
                    clip-rule="evenodd"
                  />
                </svg>
              </div>
            </a>
            <a
              href="https://www.linkedin.com/in/christian-carlos-tertius/"
              target="_blank"
            >
              <div className="bg-main-color size-12 rounded-full grid place-items-center">
                <svg
                  className="size-8 text-gray-800 dark:text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill-rule="evenodd"
                    d="M12.51 8.796v1.697a3.738 3.738 0 0 1 3.288-1.684c3.455 0 4.202 2.16 4.202 4.97V19.5h-3.2v-5.072c0-1.21-.244-2.766-2.128-2.766-1.827 0-2.139 1.317-2.139 2.676V19.5h-3.19V8.796h3.168ZM7.2 6.106a1.61 1.61 0 0 1-.988 1.483 1.595 1.595 0 0 1-1.743-.348A1.607 1.607 0 0 1 5.6 4.5a1.601 1.601 0 0 1 1.6 1.606Z"
                    clip-rule="evenodd"
                  />
                  <path d="M7.2 8.809H4V19.5h3.2V8.809Z" />
                </svg>
              </div>
            </a>
          </div>
        </footer>
      </section>
    </>
  );
}

export default App;
