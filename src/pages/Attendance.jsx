import React from "react";
import Navbar from "../components/Navbar";

export default function Attendance() {
    const attendanceData = [
        { id: 1, subject: "SU0204 - OOPS(C++)", markedBy: "Ankita", status: "present" },
        { id: 2, subject: "SU0205 - Maths 2", markedBy: "Ankita", status: "present" },
        { id: 3, subject: "SU0202 - NodeJS", markedBy: "Ankita", status: "present" },
        { id: 4, subject: "SU0201 - ReactJS", markedBy: "Ankita", status: "present" },
    ];

    return (
        <div className="min-h-screen pt-20 bg-[#0a0a0a] text-white font-sans">
            <Navbar />

            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mt-6">
                {/* Main Outer Container */}
                <div className="border border-neutral-800 bg-[#121212] rounded-xl overflow-hidden shadow-lg">
                    {/* Header */}
                    <div className="px-6 py-4 border-b border-neutral-800">
                        <h1 className="text-lg font-bold text-white tracking-wide">Overview</h1>
                    </div>

                    {/* Body */}
                    <div className="p-6 md:p-8">
                        {/* Inner Container */}
                        <div className="border border-neutral-800 bg-[#18181b] rounded-2xl p-6 md:p-8">
                            <h2 className="text-xl font-bold text-white mb-1">Today's Attendance</h2>
                            <p className="text-sm text-neutral-400 mb-8 font-medium">Date: 2026-03-30</p>

                            <div className="space-y-4">
                                {attendanceData.map((item) => (
                                    <div
                                        key={item.id}
                                        className="flex items-center justify-between p-4 sm:p-5 border border-neutral-800 rounded-xl bg-[#0f0f12] hover:bg-[#141417] transition-colors"
                                    >
                                        <div>
                                            <div className="font-semibold text-neutral-200 tracking-wide text-[15px]">
                                                {item.subject}
                                            </div>
                                            <div className="text-[13px] text-neutral-500 mt-1 font-medium">
                                                Marked by: {item.markedBy}
                                            </div>
                                        </div>

                                        {/* Status Badge */}
                                        <div className="px-3 py-1 rounded-full text-xs font-semibold bg-[#033320] text-[#10b981] border border-[#10b981]/20">
                                            {item.status}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
