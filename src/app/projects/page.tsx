import { MoveRight } from "lucide-react";
import React from "react";

export default function Projects() {
  return (
    <main className="px-2 md:px-56 lg:px-96 space-y-24 py-24 scroll-smooth">
      <h5 className="text-4xl font-bold">projects </h5>
      <div className="flex justify-between items-center gap-4 text-xl font-medium">
        <h3 className="text-2xl font-bold text-[#e9ce2c]">galzzy</h3>
        <span className="flex justify-start items-center gap-6">
          <MoveRight className="text-[#e9ce2c]" />
          <p>making uploads easy for youtubers</p>
        </span>
      </div>
      <div className="flex justify-between items-center gap-4 text-xl font-medium">
        <h3 className="text-2xl font-bold text-[#e9ce2c]">indyte admin</h3>
        <span className="flex justify-start items-center gap-6">
          <MoveRight className="text-[#e9ce2c]" />
          <p>client management system for deitcians.</p>
        </span>
      </div>
      <div className="flex justify-between items-center gap-4 text-xl font-medium">
        <h3 className="text-2xl font-bold text-[#e9ce2c]">bookings crdsi</h3>
        <span className="flex justify-start items-center gap-6">
          <MoveRight className="text-[#e9ce2c]" />
          <p>equipment booking portal used in iit jodhpur</p>
        </span>
      </div>
      <div className="flex justify-between items-center gap-4 text-xl font-medium">
        <h3 className="text-2xl font-bold text-[#e9ce2c]">garbage</h3>
        <span className="flex justify-start items-center gap-6">
          <MoveRight className="text-[#e9ce2c]" />
          <p>cli based file delete and recovery</p>
        </span>
      </div>
      <div className="flex justify-between items-center gap-4 text-xl font-medium">
        <h3 className="text-2xl font-bold text-[#e9ce2c]">twokey</h3>
        <span className="flex justify-start items-center gap-6">
          <MoveRight className="text-[#e9ce2c]" />
          <p>helped in building the frontend of the twokey platform</p>
        </span>
      </div>
      <div className="flex justify-between items-center gap-4 text-xl font-medium">
        <h3 className="text-2xl font-bold text-[#e9ce2c]">ani rec</h3>
        <span className="flex justify-start items-center gap-6">
          <MoveRight className="text-[#e9ce2c]" />
          <p>mongo db indexes based anime recommendations</p>
        </span>
      </div>
      <p>and some small projects not worth sharing...</p>
    </main>
  );
}
