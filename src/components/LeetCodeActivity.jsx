import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import leetCodeLogo from '../assets/leetcode-logo.png';

const LeetCodeActivity = () => {
    const [calendarData, setCalendarData] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchStats = async () => {
            try {
                const response = await fetch('https://alfa-leetcode-api.onrender.com/HimanshuKumar13/calendar');
                const data = await response.json();
                setCalendarData(data);
                setLoading(false);
            } catch (err) {
                console.error("Failed to fetch leetcode stats", err);
                setLoading(false);
            }
        };
        fetchStats();
    }, []);

    const processCalendar = () => {
        if (!calendarData || !calendarData.submissionCalendar) return { totalSubmissions: 0, weeks: [] };
        
        // Handle parsing safely since it could be an object or a stringified JSON
        let submissions = {};
        if (typeof calendarData.submissionCalendar === 'string') {
            try {
                submissions = JSON.parse(calendarData.submissionCalendar);
            } catch (e) {
                console.error("Error parsing submissionCalendar", e);
            }
        } else {
            submissions = calendarData.submissionCalendar;
        }
        
        let totalSubmissions = 0;
        const subMap = {};
        
        Object.entries(submissions).forEach(([timestamp, count]) => {
            totalSubmissions += count;
            const date = new Date(parseInt(timestamp) * 1000);
            const dateStr = date.toISOString().split('T')[0];
            subMap[dateStr] = count;
        });

        const today = new Date();
        const pastYear = new Date(today);
        pastYear.setDate(today.getDate() - 364);

        // Adjust pastYear to the nearest Sunday to make complete 7-day columns
        const startDay = pastYear.getDay();
        pastYear.setDate(pastYear.getDate() - startDay);

        const weeks = [];
        let currentWeek = [];
        let iterDate = new Date(pastYear);

        while (iterDate <= today || currentWeek.length > 0) {
            const dateStr = iterDate.toISOString().split('T')[0];
            const count = subMap[dateStr] || 0;
            
            let level = 0;
            if (count > 0) level = 1;
            if (count >= 3) level = 2;
            if (count >= 5) level = 3;
            if (count >= 7) level = 4;

            currentWeek.push({
                date: dateStr,
                count,
                level,
                month: iterDate.toLocaleString('default', { month: 'short' })
            });

            if (currentWeek.length === 7) {
                weeks.push(currentWeek);
                currentWeek = [];
            }

            iterDate.setDate(iterDate.getDate() + 1);
            if (iterDate > today && currentWeek.length === 0) {
                break;
            }
        }
        
        return { totalSubmissions, weeks };
    };

    const { totalSubmissions, weeks } = processCalendar();

    const months = [];
    weeks.forEach((week, index) => {
        const month = week[0].month;
        if (index === 0 || weeks[index - 1][0].month !== month) {
            months.push({ label: month, index });
        }
    });

    const getColor = (level) => {
        switch(level) {
            case 1: return 'bg-emerald-900/60 dark:bg-emerald-900/80';
            case 2: return 'bg-emerald-700/70 dark:bg-emerald-700/80';
            case 3: return 'bg-emerald-500/80 dark:bg-emerald-500/90';
            case 4: return 'bg-emerald-400 dark:bg-emerald-400';
            default: return 'bg-gray-200 dark:bg-white/5';
        }
    };

    return (
        <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-16 bg-white dark:bg-[#0d0718] border border-gray-200 dark:border-white/10 rounded-2xl p-6 md:p-8 shadow-xl relative overflow-hidden"
        >
            <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/10 dark:bg-emerald-500/5 rounded-full blur-[80px] -z-10 pointer-events-none"></div>

            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
                <div className="flex flex-col">
                    <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-2 flex items-center gap-3">
                        <img src={leetCodeLogo} alt="LeetCode" className="w-8 h-8 object-contain" />
                        LeetCode Activity
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400">
                        <span className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white mr-2">
                            {totalSubmissions}
                        </span> 
                        submissions in the past one year
                    </p>
                </div>
                
                <div className="flex flex-row md:flex-col gap-4 md:gap-2 text-sm md:text-base text-gray-600 dark:text-gray-400">
                    <p className="flex justify-between md:gap-6">
                        <span>Total active days:</span> 
                        <span className="font-bold text-gray-800 dark:text-white ml-2">{calendarData?.totalActiveDays || 0}</span>
                    </p>
                    <p className="flex justify-between md:gap-6">
                        <span>Max streak:</span> 
                        <span className="font-bold text-gray-800 dark:text-white ml-2">{calendarData?.streak || 0}</span>
                    </p>
                </div>
            </div>

            {loading ? (
                <div className="flex justify-center items-center h-48">
                    <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-neon-violet"></div>
                </div>
            ) : (
                <>
                    <div className="overflow-x-auto pb-4 hide-scrollbar">
                        <div className="min-w-[800px]">
                            <div className="flex gap-1 mb-2 relative h-6">
                                {months.map((month, i) => (
                                    <span 
                                        key={i} 
                                        className="absolute text-xs text-gray-500 dark:text-gray-400"
                                        style={{ left: `${month.index * 16}px` }} 
                                    >
                                        {month.label}
                                    </span>
                                ))}
                            </div>
                            <div className="flex gap-1">
                                {weeks.map((week, weekIdx) => (
                                    <div key={weekIdx} className="flex flex-col gap-1">
                                        {week.map((day, dayIdx) => (
                                            <div 
                                                key={dayIdx}
                                                title={`${day.count} submissions on ${day.date}`}
                                                className={`w-3 h-3 rounded-[3px] ${getColor(day.level)} transition-colors duration-200 hover:ring-1 hover:ring-gray-400 dark:hover:ring-white cursor-pointer`}
                                            />
                                        ))}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                    
                    <div className="mt-6 flex justify-between items-center text-xs md:text-sm text-gray-500 dark:text-gray-400">
                        <a href="https://leetcode.com/u/HimanshuKumar13/" target="_blank" rel="noopener noreferrer" className="hover:text-[#FFA116] transition-colors flex items-center gap-1 font-medium">
                            View Profile
                            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
                            </svg>
                        </a>
                        <div className="flex items-center gap-1.5">
                            <span className="mr-1">Less</span>
                            <div className="w-3 h-3 rounded-[3px] bg-gray-200 dark:bg-white/5" />
                            <div className="w-3 h-3 rounded-[3px] bg-emerald-900/60 dark:bg-emerald-900/80" />
                            <div className="w-3 h-3 rounded-[3px] bg-emerald-700/70 dark:bg-emerald-700/80" />
                            <div className="w-3 h-3 rounded-[3px] bg-emerald-500/80 dark:bg-emerald-500/90" />
                            <div className="w-3 h-3 rounded-[3px] bg-emerald-400 dark:bg-emerald-400" />
                            <span className="ml-1">More</span>
                        </div>
                    </div>
                </>
            )}
        </motion.div>
    );
};

export default LeetCodeActivity;
