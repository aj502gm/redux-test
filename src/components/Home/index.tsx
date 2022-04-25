import React, {useState} from 'react'

function Home() {
  const [nbaTeam, setNbaTeam] = useState("")
  return (
    <div className="flex h-screen overflow-hidden">
     <div className="w-3/5 flex justify-center items-center flex-col px-10">
       <h2 className="text-4xl font-bold font-lato">NBA Team</h2>
       <input className="bg-special-gray font-lato w-full my-3 h-9 p-1 border focus:outline-none focus:ring-2 focus:ring-gray-500 rounded" value={nbaTeam} onChange={(e) => setNbaTeam(e.target.value)}/>
       <div className="flex w-full justify-between">
         <button className="bg-red-500 hover:bg-red-600 text-white font-lato w-full shadow-lg h-9" style={{ width: "48%" }} onClick={() => {}}>
           Let's go!
         </button>
         <button className="bg-red-500 hover:bg-red-600 text-white font-lato w-full shadow-lg h-9" style={{ width: "48%" }} onClick={() => {}}>
           Clear
         </button>
       </div>
     </div>
    </div>
   );
}

export default Home