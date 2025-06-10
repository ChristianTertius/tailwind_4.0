import "./App.css";

function App() {
  return (
    <section className="">
      {/* navbar */}

      <nav className="bg-main-color fixed top-0 w-full px-32 py-5 flex justify-between">
        <div className="bg-pink-500 rounded-full size-12"></div>
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
                Blanditiis itaque earum, voluptatum cupiditate doloremque facere
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
    </section>
  );
}

export default App;
