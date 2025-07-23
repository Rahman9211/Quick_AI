import { Sparkles } from "lucide-react";
import React from "react";

const WriteArticle = () => {
  return (
    <div className="h-full overflow-y-scroll p-6 flex items-start flex-wrap gap-4 text-slate-700">
      {/* left col */}
      <form className="w-full max-w-lg p-4 bg-white rounded-lg border border-gray-200">
        <div className="flex item-center gap-3">
          <Sparkles className="w-6 text-[#4A7AFF]" />
          <h1>Articale configuration</h1>
        </div>
      </form>
      {/* Right col */}
      <div>

      </div>
    </div>
  );
};
export default WriteArticle; 
