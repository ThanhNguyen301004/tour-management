import React, { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import donglua from "../../assets/trangchu.jpg";
import { useNavigate } from "react-router-dom";
import { Input } from "antd";
const Hero = () => {
  const navigate = useNavigate();
  const [key, setKey] = useState("");
  return (
    <div className="w-full h-screen relative mt-24">
      <div className="hidden md:block bg-[url('./assets/trangchu.jpg')] h-[80vh] bg-center bg-cover bg-no-repeat"></div>
      <div className="absolute top-0 w-full h-full flex flex-col justify-center text-center text-white p-4">
        <h1>Welcome To Tour Việt</h1>
        <h2 className="py-4">Top 1% Locations Worldwide</h2>
        <div
          className="flex justify-between items-center max-w-[700px] mx-auto w-full border p-1
          rounded-md text-white bg-overlay"
          // onSubmit={()=>{console.log("a")}}
        >
          <form
            onSubmit={() => {
              navigate("/search?key=" + key);
            }}
          >
            <input
              className="float-left items-center bg-transparent h-8 w-full outline-none text-xl font-light focus:border-b border-b-slate-400 mx-3 "
              placeholder="Tìm kiếm tour..."
              value={key}
              autoComplete="false"
              onChange={(e) => {
                setKey(e.target.value);
              }}
              onPressEnter={() => {
                navigate("/search?key=" + key);
                console.log("a");
              }}
            />
          </form>
          <button
            onClick={() => {
              navigate("/search?key=" + key);
            }}
            className="border-l-2 px-2"
          >
            <AiOutlineSearch
              size={25}
              className="icon"
              style={{ color: "#ffffff" }}
            />
          </button>

          {/* <div className="flex items-center">
            <Input
              className="bg-transparent h-8 w-full font-[Poppins] focus:outline-none text-xl mx-4"
              type="text"
              placeholder="Tìm kiếm tour"
              value={key}
              onChange={(e)=>{setKey(e.target.value)}}
              onPressEnter={()=>{navigate('/search?key='+key)}}
            />
          </div>
          <div className="flex items-center">
            <button >
              <AiOutlineSearch
                size={25}
                className="icon"
                style={{ color: "#000000" }}
              />
            </button>
          </div> */}
        </div>
      </div>
    </div>
  );
};
export default Hero;
