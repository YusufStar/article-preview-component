import { useState } from "react";
import avatar from "./Assets/images/avatar-michelle.jpg"
import share from "./Assets/images/icon-share.svg"
import facebook from "./Assets/images/icon-facebook.svg"
import pinterest from "./Assets/images/icon-pinterest.svg"
import twitter from "./Assets/images/icon-twitter.svg"

function App() {
  const [click, SetClick] = useState(false)
  
  return (
    <div className="h-screen flex items-center justify-center bg-[#ecf2f8]">
      <div className="w-[700px] relative items-center h-[275px] bg-white rounded-xl flex flex-row">
        <div className="rounded-l-xl absolute l-0 bg-[url('./Assets/images/drawers.jpg')] w-[40%] bg-cover h-[100%]"></div>
        <div className="w-[100%] h-[100%] flex items-center justify-end absolute">
          <div className="w-[60%] h-[100%] flex items-center justify-center">
            <div className="w-[85%] h-[85%] flex flex-col">
              <h1 className="font-[700] text-xl text-[#48556a]">Shift the overall look and feel by adding these wonderful touches to furniture in your home</h1>
              <p className="text-[13px] font-[500] text-xs mt-5 text-[#6d7f97]">Ever been in a room and felt like something was missing?<br/>Perhaps it felt slightly bare and uninviting. I've got some<br/>simple tips to help you make any room feel complete.</p>
              <div className="w-[100%] h-[100px] mt-5 flex flex-row items-center justify-between">
                <div className="w-[60%] h-[100%] flex gap-3 items-center">
                  <img src={avatar} alt="avatar" className="w-[50px] h-[50px] rounded-full" />
                  <div className="w-[75%] h-[90%] flex flex-col justify-center">
                    <h1 className="font-[700] text-sm text-[#48556a]">Michelle Appleton</h1>
                    <h1 className="font-[700] text-[13px] text-[#6d7f97]">28 Jun 2020</h1>
                  </div>
                </div>
                <img src={share} onClick={() => SetClick(!click)} className="p-3 relative cursor-pointer rounded-full bg-[#6d7f97]/20"/>
                {click && 
                <div className="absolute flex flex-row items-center justify-between left-[560px] top-[150px] w-[175px] h-[50px] rounded-xl bg-slate-600/75">
                  <img src={facebook} className="w-[30px] h-[30px] ml-5 cursor-pointer"/>
                  <img src={pinterest} className="w-[30px] h-[30px] cursor-pointer"/>
                  <img src={twitter} className="w-[30px] h-[30px] mr-5 cursor-pointer"/>
                </div>}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
