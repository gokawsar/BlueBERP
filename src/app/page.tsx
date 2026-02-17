'use client';

import { useState } from 'react';
import DashboardLayout from '@/components/layout/DashboardLayout';

// Mock data for dashboard
const mockStats = {
    totalRevenue: 128450.00,
    revenueGrowth: 12.5,
    monthlyGrowth: 15.3,
    growthChange: 2.1,
    pendingBills: 24,
    urgentBills: 8,
    totalCustomers: 1203,
    newCustomers: 45
};

const mockJobs = [
    { id: 1, refNumber: 'JB-2023-001', date: 'Oct 24, 2023', customer: 'Acme Corp', location: 'New York, NY', status: 'BILL', amount: 5200.00 },
    { id: 2, refNumber: 'JB-2023-002', date: 'Oct 23, 2023', customer: 'Stark Ind', location: 'Malibu, CA', status: 'QUOTATION', amount: 8500.00 },
    { id: 3, refNumber: 'JB-2023-003', date: 'Oct 23, 2023', customer: 'Wayne Ent', location: 'Gotham, NJ', status: 'CHALLAN', amount: 3200.00 },
    { id: 4, refNumber: 'JB-2023-004', date: 'Oct 22, 2023', customer: 'Globex Corp', location: 'Cypress Creek, OR', status: 'QUOTATION', amount: 15000.00 },
    { id: 5, refNumber: 'JB-2023-005', date: 'Oct 21, 2023', customer: 'Cyberdyne', location: 'Sunnyvale, CA', status: 'BILL', amount: 8900.00 },
];

const statusColors: Record<string, string> = {
    BILL: 'bg-emerald-100 text-emerald-800 dark:bg-emerald-900/40 dark:text-emerald-300',
    QUOTATION: 'bg-blue-100 text-blue-800 dark:bg-blue-900/40 dark:text-blue-300',
    CHALLAN: 'bg-orange-100 text-orange-800 dark:bg-orange-900/40 dark:text-orange-300',
};

export default function DashboardPage() {
    const [selectedJobs, setSelectedJobs] = useState<number[]>([]);
    const [selectAll, setSelectAll] = useState(false);

    const toggleSelectAll = () => {
        if (selectAll) {
            setSelectedJobs([]);
        } else {
            setSelectedJobs(mockJobs.map(job => job.id));
        }
        setSelectAll(!selectAll);
    };

    const toggleJob = (id: number) => {
        if (selectedJobs.includes(id)) {
            setSelectedJobs(selectedJobs.filter(jobId => jobId !== id));
        } else {
            setSelectedJobs([...selectedJobs, id]);
        }
    };

    return (
        <DashboardLayout title="Dashboard Overview">
            <div className="p-4 sm:p-6 lg:p-8 space-y-8">
                {/* Metrics Section */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {/* Total Revenue */}
                    <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700 shadow-sm hover:border-blue-500/50 transition-colors">
                        <div className="flex justify-between items-start">
                            <div>
                                <p className="text-sm font-medium text-gray-500 dark:text-gray-400">Total Revenue</p>
                                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mt-2">
                                    ${mockStats.totalRevenue.toLocaleString('en-US', { minimumFractionDigits: 2 })}
                                </h3>
                            </div>
                            <div className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-lg text-blue-600 dark:text-blue-400">
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>
                        </div>
                        <div className="mt-4 flex items-center text-sm">
                            <span className="text-emerald-500 font-medium flex items-center gap-1">
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                                </svg>
                                +{mockStats.revenueGrowth}%
                            </span>
                            <span className="text-gray-400 ml-2">vs last month</span>
                        </div>
                    </div>

                    {/* Monthly Growth */}
                    <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700 shadow-sm hover:border-blue-500/50 transition-colors">
                        <div className="flex justify-between items-start">
                            <div>
                                <p className="text-sm font-medium text-gray-500 dark:text-gray-400">Monthly Growth</p>
                                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mt-2">{mockStats.monthlyGrowth}%</h3>
                            </div>
                            <div className="p-2 bg-emerald-100 dark:bg-emerald-900/30 rounded-lg text-emerald-600 dark:text-emerald-400">
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                                </svg>
                            </div>
                        </div>
                        <div className="mt-4 flex items-center text-sm">
                            <span className="text-emerald-500 font-medium flex items-center gap-1">
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                                </svg>
                                +{mockStats.growthChange}%
                            </span>
                            <span className="text-gray-400 ml-2">vs last month</span>
                        </div>
                    </div>

                    {/* Pending Bills */}
                    <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700 shadow-sm hover:border-blue-500/50 transition-colors">
                        <div className="flex justify-between items-start">
                            <div>
                                <p className="text-sm font-medium text-gray-500 dark:text-gray-400">Pending Bills</p>
                                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mt-2">{mockStats.pendingBills}</h3>
                            </div>
                            <div className="p-2 bg-orange-100 dark:bg-orange-900/30 rounded-lg text-orange-600 dark:text-orange-400">
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>
                        </div>
                        <div className="mt-4 flex items-center text-sm">
                            <span className="text-orange-500 font-medium flex items-center gap-1">
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                                </svg>
                                {mockStats.urgentBills} Urgent
                            </span>
                            <span className="text-gray-400 ml-2">needs attention</span>
                        </div>
                    </div>

                    {/* Total Customers */}
                    <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700 shadow-sm hover:border-blue-500/50 transition-colors">
                        <div className="flex justify-between items-start">
                            <div>
                                <p className="text-sm font-medium text-gray-500 dark:text-gray-400">Total Customers</p>
                                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mt-2">{mockStats.totalCustomers.toLocaleString()}</h3>
                            </div>
                            <div className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-lg text-blue-600 dark:text-blue-400">
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                                </svg>
                            </div>
                        </div>
                        <div className="mt-4 flex items-center text-sm">
                            <span className="text-emerald-500 font-medium flex items-center gap-1">
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                                </svg>
                                {mockStats.newCustomers}
                            </span>
                            <span className="text-gray-400 ml-2">new this month</span>
                        </div>
                    </div>
                </div>

                {/* Recent Jobs Table */}
                <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm flex flex-col">
                    {/* Table Header & Actions */}
                    <div className="p-5 border-b border-gray-200 dark:border-gray-700 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                        <div>
                            <h2 className="text-lg font-semibold text-gray-900 dark:text-white">Recent Jobs</h2>
                            <p className="text-sm text-gray-500 dark:text-gray-400">Manage and view status of current quotations and bills.</p>
                        </div>
                        <div className="flex flex-col sm:flex-row gap-3">
                            <button className="inline-flex items-center justify-center gap-2 px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg text-sm font-medium text-gray-700 dark:text-gray-200 bg-white dark:bg-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600 transition-colors shadow-sm">
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z" />
                                </svg>
                                Generate Prints
                            </button>
                            <button className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-lg text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 transition-colors shadow-sm shadow-blue-500/30">
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                </svg>
                                Generate Topsheet
                            </button>
                        </div>
                    </div>

                    {/* Search & Filters */}
                    <div className="p-4 bg-gray-50 dark:bg-gray-900/50 flex flex-col sm:flex-row gap-3 border-b border-gray-200 dark:border-gray-700">
                        <div className="relative flex-1 max-w-md">
                            <svg className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                            </svg>
                            <input
                                className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-shadow"
                                placeholder="Search by Job Ref, Customer, or Location..."
                                type="text"
                            />
                        </div>
                        <button className="inline-flex items-center gap-2 px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg text-sm font-medium text-gray-700 dark:text-gray-200 bg-white dark:bg-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600 transition-colors">
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
                            </svg>
                            Filters
                        </button>
                        <button className="inline-flex items-center gap-2 px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg text-sm font-medium text-gray-700 dark:text-gray-200 bg-white dark:bg-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600 transition-colors">
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                            </svg>
                            Feb 2026
                        </button>
                    </div>

                    {/* Data Table */}
                    <div className="overflow-x-auto">
                        <table className="w-full text-left border-collapse">
                            <thead>
                                <tr className="bg-gray-50 dark:bg-gray-800/50 border-b border-gray-200 dark:border-gray-700 text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                                    <th className="p-4 w-12 text-center">
                                        <input
                                            className="w-4 h-4 text-blue-600 bg-white border-gray-300 rounded focus:ring-blue-500 focus:ring-offset-0 dark:bg-gray-700 dark:border-gray-600 cursor-pointer"
                                            type="checkbox"
                                            checked={selectAll}
                                            onChange={toggleSelectAll}
                                        />
                                    </th>
                                    <th className="p-4">Job Ref Number</th>
                                    <th className="p-4">Date</th>
                                    <th className="p-4">Customer</th>
                                    <th className="p-4">Location</th>
                                    <th className="p-4">Status</th>
                                    <th className="p-4 text-right">Amount</th>
                                    <th className="p-4 w-12"></th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-100 dark:divide-gray-700">
                                {mockJobs.map((job) => (
                                    <tr key={job.id} className="bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors group">
                                        <td className="p-4 text-center">
                                            <input
                                                className="w-4 h-4 text-blue-600 bg-white border-gray-300 rounded focus:ring-blue-500 focus:ring-offset-0 dark:bg-gray-700 dark:border-gray-600 cursor-pointer"
                                                type="checkbox"
                                                checked={selectedJobs.includes(job.id)}
                                                onChange={() => toggleJob(job.id)}
                                            />
                                        </td>
                                        <td className="p-4 text-sm font-medium text-blue-600">{job.refNumber}</td>
                                        <td className="p-4 text-sm text-gray-600 dark:text-gray-300">{job.date}</td>
                                        <td className="p-4 text-sm font-semibold text-gray-900 dark:text-white">
                                            <div className="flex items-center gap-2">
                                                <div className="w-6 h-6 rounded-full bg-indigo-100 dark:bg-indigo-900 flex items-center justify-center text-xs font-bold text-indigo-700 dark:text-indigo-300">
                                                    {job.customer.charAt(0)}
                                                </div>
                                                {job.customer}
                                            </div>
                                        </td>
                                        <td className="p-4 text-sm text-gray-600 dark:text-gray-300">{job.location}</td>
                                        <td className="p-4">
                                            <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${statusColors[job.status]}`}>
                                                {job.status}
                                            </span>
                                        </td>
                                        <td className="p-4 text-right text-sm font-semibold text-gray-900 dark:text-white">
                                            ${job.amount.toLocaleString('en-US', { minimumFractionDigits: 2 })}
                                        </td>
                                        <td className="p-4 text-right">
                                            <button className="text-gray-400 hover:text-blue-600 transition-colors">
                                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
                                                </svg>
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    {/* Pagination */}
                    <div className="p-4 border-t border-gray-200 dark:border-gray-700 flex items-center justify-between">
                        <span className="text-sm text-gray-500 dark:text-gray-400">
                            Showing <span className="font-medium text-gray-900 dark:text-white">1</span> to <span className="font-medium text-gray-900 dark:text-white">{mockJobs.length}</span> of <span className="font-medium text-gray-900 dark:text-white">{mockJobs.length}</span> results
                        </span>
                        <div className="flex items-center gap-2">
                            <button className="p-2 border border-gray-300 dark:border-gray-600 rounded-lg text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 disabled:opacity-50" disabled>
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                                </svg>
                            </button>
                            <button className="p-2 border border-gray-300 dark:border-gray-600 rounded-lg text-gray-400 hover:text-gray-600 dark:hover:text-gray-200">
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </DashboardLayout>
    );
}
