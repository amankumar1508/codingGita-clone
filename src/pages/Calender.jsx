import React, { useState } from "react";
import Navbar from "../components/Navbar";

export default function Calender() {
  const [selectedDate, setSelectedDate] = useState(31);

  const legends = [
    { label: "Assignment", color: "bg-blue-600" },
    { label: "holiday", color: "bg-red-500" },
    { label: "exam", color: "bg-red-600" },
    { label: "class test", color: "bg-orange-500" },
    { label: "result announcement", color: "bg-purple-500" },
    { label: "orientation", color: "bg-sky-500" },
    { label: "convocation", color: "bg-pink-500" },
    { label: "Personal reasons", color: "bg-yellow-500" },
    { label: "Festival celebration", color: "bg-orange-600" },
    { label: "Hackathon participation", color: "bg-cyan-500" },
    { label: "College events (seminars, workshops, competitions, etc.)", color: "bg-blue-400" },
    { label: "Sick leave / medical reasons", color: "bg-rose-500" },
    { label: "Placement drives", color: "bg-emerald-500" },
    { label: "Company work (official tasks or visits)", color: "bg-indigo-500" },
    { label: "Interviews", color: "bg-teal-500" },
    { label: "Family functions", color: "bg-fuchsia-500" },
    { label: "Emergency situations", color: "bg-rose-600" },
    { label: "Travel-related reasons", color: "bg-sky-600" },
    { label: "Duty leave", color: "bg-purple-600" },
    { label: "Others", color: "bg-neutral-500" },
  ];

  const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const daysInMonth = Array.from({ length: 31 }, (_, i) => i + 1);

  return (
    <div className="min-h-screen pt-20 bg-[#0a0a0a] text-white font-sans pb-10">
      <Navbar />

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 mt-6">
        <h1 className="text-2xl font-bold mb-6 tracking-wide">Calendar</h1>

        <div className="flex flex-col xl:flex-row gap-6">
          {/* L: Calendar Area */}
          <div className="flex-1 bg-[#121212] border border-neutral-800 rounded-xl p-4 sm:p-6 shadow-lg">

            {/* Top Controls */}
            <div className="flex justify-between items-center mb-6">
              <div className="flex items-center gap-2">
                <button className="px-3 py-1.5 border border-neutral-700 bg-neutral-800/50 hover:bg-neutral-800 rounded text-sm text-neutral-300 transition-colors">
                  &lt;
                </button>
                <button className="px-4 py-1.5 border border-neutral-700 bg-neutral-800/50 hover:bg-neutral-800 rounded text-sm font-medium text-neutral-200 transition-colors">
                  Today
                </button>
              </div>
              <div className="text-lg font-bold text-white tracking-wide">March 2026</div>
              <button className="px-3 py-1.5 border border-neutral-700 bg-neutral-800/50 hover:bg-neutral-800 rounded text-sm text-neutral-300 transition-colors">
                &gt;
              </button>
            </div>

            {/* Legend */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-y-3 gap-x-4 mb-8">
              {legends.map((legend, idx) => (
                <div key={idx} className="flex items-start gap-2">
                  <div className={`w-2 h-2 rounded-full mt-1 shrink-0 ${legend.color}`} />
                  <span className="text-xs text-neutral-400 leading-tight">
                    {legend.label}
                  </span>
                </div>
              ))}
            </div>

            {/* Calendar Grid */}
            <div className="border-t border-neutral-800 pt-6">
              <div className="grid grid-cols-7 gap-2 sm:gap-4 mb-2">
                {daysOfWeek.map((day) => (
                  <div key={day} className="text-center text-[11px] font-medium text-neutral-500 uppercase tracking-wider">
                    {day}
                  </div>
                ))}
              </div>

              <div className="grid grid-cols-7 gap-2 sm:gap-4">
                {daysInMonth.map((day) => (
                  <div
                    key={day}
                    onClick={() => setSelectedDate(day)}
                    className={`aspect-square sm:aspect-auto sm:h-24 md:h-28 border rounded-lg p-2 sm:p-3 flex flex-col items-start justify-start cursor-pointer transition-all ${selectedDate === day
                        ? "border-blue-500 bg-[#121212]"
                        : "border-neutral-800 bg-[#161616] hover:bg-neutral-800"
                      }`}
                  >
                    <span className={`text-sm font-medium ${selectedDate === day ? "text-blue-400" : "text-neutral-300"}`}>
                      {day}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* R: Side Panel */}
          <div className="w-full xl:w-[320px] shrink-0 bg-[#121212] border border-neutral-800 rounded-xl p-6 shadow-lg h-fit">
            <h2 className="text-lg font-bold text-white mb-6 border-b border-neutral-800 pb-4">
              3/{selectedDate}/2026
            </h2>

            <div className="space-y-6">
              <div>
                <h3 className="text-sm font-semibold text-neutral-200 mb-2">Events</h3>
                <p className="text-sm text-neutral-500">No events.</p>
              </div>

              <div>
                <h3 className="text-sm font-semibold text-neutral-200 mb-2">Leaves</h3>
                <p className="text-sm text-neutral-500">No leaves.</p>
              </div>

              <div>
                <h3 className="text-sm font-semibold text-neutral-200 mb-2">Attendance</h3>
                <p className="text-sm text-neutral-500">No subject entries.</p>
              </div>

              <div>
                <h3 className="text-sm font-semibold text-neutral-200 mb-2">Assignments</h3>
                <p className="text-sm text-neutral-500">None due.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
