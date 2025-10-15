import { Download, Star } from "lucide-react";
import React, { useEffect, useState } from "react";

const Installation = () => {
  const [install , setInstall] = useState([]);
  const [sortApp , setSortApp] = useState('none')

  useEffect(() => {
    const installed = JSON.parse(localStorage.getItem("installed"));
    if (installed) setInstall(installed);
  }, []);

  const sortedApps = () =>{
     if(sortApp ==='download-asc'){
      return [...install].sort((a,b) => a.downloads - b.downloads)
     }
     else if(sortApp ==='download-desc' ){
      return [...install].sort((a,b) =>   b.downloads - a.downloads)
     }
     return install;
  }

   const handleDeleteApps = (id) => {

    const installed = JSON.parse(localStorage.getItem("installed"));

    let newInstalled = installed.filter(a => a.id !== id);
    setInstall(newInstalled)

    
    localStorage.setItem("installed", JSON.stringify(newInstalled));
   

    console.log(newInstalled);
  };

  const Format = (num) => {
    if (num >= 1000000000) {
      return (num / 1000000000).toFixed(1) + " B";
    }
    if (num >= 1000000) {
      return (num / 1000000).toFixed(1) + " M";
    }
    if (num >= 1000) {
      return (num / 1000).toFixed(1) + " K";
    } else {
      return num.toString();
    }
  };

  return (
    <div className="container mx-auto mt-[80px] mb-[40px]">
      <div className="flex flex-col justify-center items-center text-center">
        <h1 className="text-3xl font-bold ">Your Installed Apps</h1>
        <p className="text-gray-400">
          Explore All Trending Apps on the Market developed by us
        </p>
      </div>

      <div className="flex flex-col-reverse md:flex-row justify-between items-center mt-[50px]">
        <h3 className="font-bold ">({install.length}) apps found</h3>

        <select value={sortApp} onChange={e => setSortApp(e.target.value)} className="select outline-none">
          <option value='none'>Not Selected</option>
          <option value='download-asc'>Low -&gt; High</option>
          <option value='download-desc'>High -&gt; Low</option>
          
        </select>

      </div>

      <div className=" mt-[50px] mb-[80px]">
        {sortedApps().map((app) => (
          <div className="w-11/12 mx-auto mb-[10px] bg-white border border-gray-200 shadow-sm rounded-xl px-4 py-3 flex items-center justify-between hover:shadow-md transition">
            {/* Left side: App icon + info */}
            <div className="flex items-center gap-3">
              {/* App Icon */}
              <div className="w-10 h-10 bg-gray-200 rounded-md flex items-center justify-center">
                {app.image ? (
                  <img
                    src={app.image}
                    alt={app.title}
                    className="w-full h-full object-cover rounded-md"
                  />
                ) : (
                  <span className="text-gray-400 text-xs">No Img</span>
                )}
              </div>

              {/* App Info */}
              <div>
                <h3 className="text-sm font-medium text-gray-800">
                  {app.title}
                </h3>
                <div className="flex items-center gap-3 text-xs text-gray-500 mt-1">
                  <span className="flex items-center gap-1 text-green-500 font-semibold">
                    <Download size={12} /> {Format(app.downloads)}
                  </span>
                  <span className="flex items-center gap-1 text-amber-500 font-semibold">
                    <Star size={12} /> {app.ratingAvg}
                  </span>
                  <span className="text-gray-400">{app.size} MB</span>
                </div>
              </div>
            </div>

            {/* Right side: Uninstall Button */}
            <button onClick={() => handleDeleteApps(app.id)} className="px-3 py-1 bg-emerald-500 hover:bg-emerald-600 text-white text-sm rounded-md font-medium transition">
              Uninstall
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Installation;
