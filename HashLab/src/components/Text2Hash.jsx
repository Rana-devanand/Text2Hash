import React from "react";

function Text2Hash() {
  return (
    <>
      <div className="container-fluid bg-[#fef3c767] min-h-screen">
        <div className="w-full h-14 bg-amber-100 shadow-2xl">
          <h1 className="font-semibold p-3 text-xl text-center">
            Text 2 Hash <i className="text-sm">(SHA-256)</i>
          </h1>
        </div>

        <div className="box flex justify-center items-center py-10">
          <div className="w-full sm:w-4/5 md:w-2/3 lg:w-1/2 xl:w-2/5 h-auto mt-5 border border-blue-600 bg-[#ffc5e98a] flex flex-col rounded-lg p-5">
            <div className="block-one flex flex-col sm:flex-row justify-start sm:justify-center items-start sm:items-center gap-3 m-3">
              <label className="font-mono w-full sm:w-auto">Block:</label>
              <input
                type="text"
                className="h-10 w-full border border-zinc-400 pl-5 rounded-md outline-none bg-[#d6d5d59c]"
                value="1"
                disabled
              />
            </div>

            <div className="block-one flex flex-col sm:flex-row justify-start sm:justify-center items-start sm:items-center gap-3 m-3">
              <label className="font-mono w-full sm:w-auto">Nonce:</label>
              <input
                type="text"
                className="h-10 w-full border border-zinc-400 pl-5 rounded-md outline-none"
                placeholder="Enter your Nonce here... SHA Text"
              />
            </div>

            <div className="block-one flex flex-col sm:flex-row justify-start sm:justify-center items-start sm:items-start gap-3 m-3">
              <label className="font-mono w-full sm:w-auto">Data:</label>
              <textarea
                className="h-40 w-full border border-zinc-400 pl-5 rounded-md outline-none"
                placeholder="Enter your Data..."
              ></textarea>
            </div>

            <div className="block-one flex flex-col sm:flex-row justify-start sm:justify-center items-start sm:items-center gap-3 m-3">
              <label className="font-mono w-full sm:w-auto">Hash:</label>
              <input
                type="text"
                className="h-10 w-full border border-zinc-400 pl-5 rounded-md outline-none"
                placeholder="SHA Hash data..."
                disabled
              />
            </div>

            <div className="flex justify-center sm:justify-start p-5">
              <button className="px-8 py-2 bg-[#0783ca] rounded-md font-semibold text-white">
                Mine
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Text2Hash;
