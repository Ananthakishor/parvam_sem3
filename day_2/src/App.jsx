import { UserRound } from "lucide-react";
import { LayoutGrid } from "lucide-react";
import { ArrowUpRight } from "lucide-react";

function App() {
  return (
    <>
    <div className=" flex justify-between p-4">
      <div className="flex space-x-2 border-2 border-[rgba(0,0,0,0.1)] p-1 rounded-4xl items-center border-col bg-gray-100">
      <div className="border-1 border-[rgba(0,0,0,0.2)] rounded-4xl p-1 bg-black text-amber-50  hover:bg-cyan-600"><LayoutGrid/></div>
      <div className="font-boldborder-[rgba(0,0,0,0.2)] hover:font">Dream store</div>
      <div className="border-1 border-[rgba(0,0,0,0.2)] rounded-4xl p-1 bg-white  hover:bg-amber-200 "><ArrowUpRight/> </div></div>
      <div className=" flex space-x-2 border-2 border-[rgba(0,0,0,0.1)] p-1 py-1 rounded-4xl items-center bg-gray-100 hidden md:flex ">
        <div className="border-1 border-[rgba(0,0,0,0.2)] rounded-4xl p-2 font-bold bg-white  hover:bg-amber-200">Service</div>
        <div className="border-1 border-[rgba(0,0,0,0.2)] rounded-4xl p-2 font-bold bg-white  hover:bg-amber-200">Sell</div>
        <div className="border-1 border-[rgba(0,0,0,0.2)] rounded-4xl p-2 font-bold bg-white  hover:bg-amber-200">Market</div>
        <div className="border-1 border-[rgba(0,0,0,0.2)] rounded-4xl p-2 font-bold bg-white  hover:bg-amber-200">Manage</div>
        <div className="border-1 border-[rgba(0,0,0,0.2)] rounded-4xl p-2 font-bold bg-white  hover:bg-amber-200">Special pricing %25 OFF</div>
        <div className="border-1 border-[rgba(0,0,0,0.2)] rounded-4xl p-2 font-bold bg-white   hover:bg-amber-200"> <ArrowUpRight/> </div>
      </div>
      <div className="flex space-x-2 border-2 border-[rgba(0,0,0,0.1)] p-1 rounded-4xl items-center hidden md:flex bg-gray-100 ">
        <div className="border-1 border-[rgba(0,0,0,0.2)] rounded-4xl p-1 bg-white "><UserRound/></div>
        <div className="border-1 border-[rgba(0,0,0,0.2)] rounded-4xl p-1 font-bold bg-white  hover:bg-amber-200">Success seller</div>
      </div>
    </div>
    </>
  );
}
export default App;
