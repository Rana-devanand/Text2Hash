import React, { useState } from "react";
import axios from "axios";


function Text2Hash() {

  const [value , setValue] = useState({
    sha: "",
    data: ""
  })
  const [hash, setHash] = useState('');
  const [loading , setLoading] = useState(false);

  const HandleChange = async (e) => {
    setValue({...value, [e.target.name]: e.target.value })
    HandleSubmit();
  }

  //https://text2hash.onrender.com
  const HandleSubmit = async (e) => {
    const URL = import.meta.env.VITE_SERVER_API_URL;
    // e.preventDefault();
    try {
      setLoading(true);
      const response = await axios.post(`${URL}/api/hashtext` , value);
      setHash(response.data.data);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  }

  const HandleReset = () => {
    setValue({sha: "", data: ""});
    setHash('');
  }
  return (
    <>
      <div className="container-fluid bg-[#fef3c767] min-h-screen">
        <div className="w-full h-14 bg-amber-100 shadow-2xl">
          <h1 className="font-semibold p-3 text-xl text-center">
            Text 2 Hash <i className="text-sm">(SHA-256)</i>
          </h1>
        </div>

        <div className="box flex justify-center items-center py-5">
          <div className="w-full sm:w-4/5 md:w-2/3 lg:w-1/2 xl:w-2/5 h-auto border border-blue-600 bg-[#ffc5e98a] flex flex-col rounded-lg p-5">
          <form onSubmit={HandleSubmit}  >
               <i className="flex justify-center items-center">Secure Hash Algorithm</i> <span>Blockchain Begin with this.. </span>
            <hr className="h-1 bg-[#7c7c7c]" />

            <div className="block-one flex sm:flex-row justify-start sm:justify-center items-start sm:items-center gap-3 m-3">
              <h1 className="pb-2">Choose Hashing Algorithm:</h1>
              <select
                className="h-10 w-full border border-zinc-400 pl-5 rounded-md outline-none"
                name="sha"
                onChange={HandleChange}
              >
                <option value="" selected disabled>Choose algorithm</option>
               <optgroup label="md algorithm">
                  <option value="md5">md5</option>
               </optgroup>

                <optgroup label="sha algorithm">
                    <option value="sha1">sha1</option>
                    <option value="sha224">sha224</option>
                    <option value="sha256">sha256</option>
                    <option value="sha256">sha256</option>
                    <option value="sha3-256">sha3-256</option>
                    <option value="sha3-384">sha3-384</option>
                    <option value="sha3-512">sha3-512</option>
                </optgroup>

                  <optgroup label="ripemd algorithm">
                    <option value="ripemd160">ripemd160</option>
                  </optgroup>

              </select>
            </div>

            <div className="block-one flex flex-col sm:flex-row justify-start sm:justify-center items-start sm:items-center gap-3 m-3">
              <label className="font-mono w-full sm:w-auto">Nonce:</label>
              <input
                type="text"
                className="h-10 w-full border border-zinc-400 pl-5 rounded-md outline-none italic"
                placeholder="Your choosing algorithm"
                name="sha"
                value={value.sha}
                // onChange={HandleChange}
                disabled
              />
            </div>

            <div className="block-one flex flex-col sm:flex-row justify-start sm:justify-center items-start sm:items-start gap-3 m-3">
              <label className="font-mono w-full sm:w-auto">Data:</label>
              <textarea
                className="h-32 w-full border border-zinc-400 pl-5 rounded-md outline-none"
                placeholder="Enter your Data..."
                name="data"
                value={value.data}
                onChange={HandleChange}
              ></textarea>
            </div>

            <div className="block-one flex flex-col sm:flex-row justify-start sm:justify-center items-start sm:items-center gap-3 m-3">
              <label className="font-mono w-full sm:w-auto">Hash:</label>
              <textarea
                type="text"
                value={loading ? 'Hashing...' : hash}
                className="h-16 w-full border border-zinc-400 pl-5 rounded-md outline-none"
                placeholder="SHA Hash data..."
                disabled
              />
            </div>

            <div className="flex  gap-2 justify-center sm:justify-start p-5">
              {/* <button className="px-8 py-2 bg-[#0783ca] rounded-md font-semibold text-white">
                Mine
              </button> */}

              <button className="px-8 py-2 bg-amber-600 rounded-md font-semibold text-white"
                  onClick={HandleReset}
              >
                Reset
              </button>

            </div>
          </form>
          <p>This project is shown how Blockchain is secure our data during transaction.</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Text2Hash;
