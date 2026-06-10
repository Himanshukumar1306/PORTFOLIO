import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import githubImg from '../assets/github-white.png';

const GitHubActivity = () => {
    const [calendarData, setCalendarData] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchStats = async () => {
            try {
                // Fetching live data from a reliable GitHub contribution proxy
                // Added ?nocache parameter to bypass proxy caching and match exactly with Github
                const response = await fetch(`https://github-contributions-api.deno.dev/Himanshukumar1306.json?nocache=${Date.now()}`);
                const data = await response.json();
                setCalendarData(data);
                setLoading(false);
            } catch (err) {
                console.error("Failed to fetch github stats", err);
                setLoading(false);
            }
        };
        fetchStats();
    }, []);

    const processCalendar = () => {
        if (!calendarData || !calendarData.contributions) return { totalContributions: 0, weeks: [], totalActiveDays: 0, maxStreak: 0 };

        let totalActiveDays = 0;
        let currentStreak = 0;
        let maxStreak = 0;

        const weeks = calendarData.contributions.map(weekArr => {
            return weekArr.map(day => {
                let level = 0;
                if (day.contributionLevel === 'FIRST_QUARTILE') level = 1;
                if (day.contributionLevel === 'SECOND_QUARTILE') level = 2;
                if (day.contributionLevel === 'THIRD_QUARTILE') level = 3;
                if (day.contributionLevel === 'FOURTH_QUARTILE') level = 4;

                if (day.contributionCount > 0) {
                    totalActiveDays++;
                    currentStreak++;
                    maxStreak = Math.max(maxStreak, currentStreak);
                } else {
                    currentStreak = 0;
                }

                // parse month from date string (YYYY-MM-DD)
                const dateObj = new Date(day.date);
                const month = dateObj.toLocaleString('default', { month: 'short' });

                return {
                    date: day.date,
                    count: day.contributionCount,
                    level: level,
                    month: month
                };
            });
        });

        return {
            totalContributions: calendarData.totalContributions || 0,
            weeks,
            totalActiveDays,
            maxStreak
        };
    };

    const { totalContributions, weeks, totalActiveDays, maxStreak } = processCalendar();

    const months = [];
    weeks.forEach((week, index) => {
        if (week.length > 0) {
            const month = week[0].month;
            if (index === 0 || weeks[index - 1][0].month !== month) {
                months.push({ label: month, index });
            }
        }
    });

    const getColor = (level) => {
        switch (level) {
            case 1: return 'bg-[#9be9a8] dark:bg-[#0e4429]';
            case 2: return 'bg-[#40c463] dark:bg-[#006d32]';
            case 3: return 'bg-[#30a14e] dark:bg-[#26a641]';
            case 4: return 'bg-[#216e39] dark:bg-[#39d353]';
            default: return 'bg-[#ebedf0] dark:bg-[#161b22]';
        }
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-8 bg-white dark:bg-[#0d0718] border border-gray-200 dark:border-white/10 rounded-2xl p-6 md:p-8 shadow-xl relative overflow-hidden"
        >
            <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/10 dark:bg-emerald-500/5 rounded-full blur-[80px] -z-10 pointer-events-none"></div>

            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
                <div className="flex flex-col">
                    <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-2 flex items-center gap-3">
                        <img src={githubImg} alt="GitHub" className="w-8 h-8 object-contain dark:invert-0 invert brightness-0 dark:brightness-100" />
                        GitHub Activity
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400">
                        <span className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white mr-2">
                            {totalContributions}
                        </span>
                        contributions in the last year
                    </p>
                </div>

                <div className="flex flex-row md:flex-col gap-4 md:gap-2 text-sm md:text-base text-gray-600 dark:text-gray-400">
                    <p className="flex justify-between md:gap-6">
                        <span>Total active days:</span>
                        <span className="font-bold text-gray-800 dark:text-white ml-2">{totalActiveDays}</span>
                    </p>
                    <p className="flex justify-between md:gap-6">
                        <span>Max streak:</span>
                        <span className="font-bold text-gray-800 dark:text-white ml-2">{maxStreak}</span>
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
                                        style={{ left: `${month.index * 13}px` }}
                                    >
                                        {month.label}
                                    </span>
                                ))}
                            </div>
                            <div className="flex gap-[3px]">
                                {weeks.map((week, weekIdx) => (
                                    <div key={weekIdx} className="flex flex-col gap-[3px]">
                                        {week.map((day, dayIdx) => (
                                            <div
                                                key={dayIdx}
                                                title={day.date !== 'empty' ? `${day.count} contributions on ${day.date}` : undefined}
                                                className={`w-[10px] h-[10px] rounded-[2px] ${day.date !== 'empty' ? getColor(day.level) + ' hover:ring-1 hover:ring-gray-400 dark:hover:ring-gray-500 cursor-pointer' : 'bg-transparent pointer-events-none'} transition-colors duration-200`}
                                            />
                                        ))}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="mt-6 flex justify-between items-center text-xs md:text-sm text-gray-500 dark:text-gray-400">
                        <a href="https://github.com/Himanshukumar1306" target="_blank" rel="noopener noreferrer" className="hover:text-emerald-500 transition-colors flex items-center gap-1 font-medium">
                            View Profile
                            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
                            </svg>
                        </a>
                        <div className="flex items-center gap-1.5">
                            <span className="mr-1">Less</span>
                            <div className="w-3 h-3 rounded-[3px] bg-[#ebedf0] dark:bg-[#161b22]" />
                            <div className="w-3 h-3 rounded-[3px] bg-[#9be9a8] dark:bg-[#0e4429]" />
                            <div className="w-3 h-3 rounded-[3px] bg-[#40c463] dark:bg-[#006d32]" />
                            <div className="w-3 h-3 rounded-[3px] bg-[#30a14e] dark:bg-[#26a641]" />
                            <div className="w-3 h-3 rounded-[3px] bg-[#216e39] dark:bg-[#39d353]" />
                            <span className="ml-1">More</span>
                        </div>
                    </div>
                </>
            )}
        </motion.div>
    );
};

export default GitHubActivity;
