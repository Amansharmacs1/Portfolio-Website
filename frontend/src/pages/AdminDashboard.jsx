import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { LayoutDashboard, LogOut, Settings, PlusCircle, Edit, Trash2 } from 'lucide-react';

const AdminDashboard = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      navigate('/login');
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/');
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row pt-20">
      {/* Sidebar */}
      <aside className="w-full md:w-64 glass border-r border-slate-200 dark:border-slate-800 p-6 flex flex-col h-auto md:min-h-[calc(100vh-80px)]">
        <h2 className="text-xl font-heading font-bold text-slate-900 dark:text-white mb-8 flex items-center gap-2">
          <LayoutDashboard size={20} className="text-primary-500" />
          Dashboard
        </h2>
        
        <nav className="space-y-2 flex-1">
          {['Projects', 'Skills', 'Experience', 'Publications', 'Messages'].map((item) => (
            <button key={item} className="w-full text-left px-4 py-3 rounded-xl text-slate-600 dark:text-slate-300 hover:bg-primary-50 dark:hover:bg-primary-900/20 hover:text-primary-500 transition-colors font-medium">
              Manage {item}
            </button>
          ))}
        </nav>
        
        <div className="mt-auto pt-8 border-t border-slate-200 dark:border-slate-800 space-y-2">
          <button className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors font-medium">
            <Settings size={18} /> Settings
          </button>
          <button onClick={handleLogout} className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-red-500 hover:bg-red-50 dark:hover:bg-red-900/20 transition-colors font-medium">
            <LogOut size={18} /> Logout
          </button>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 p-6 md:p-10">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-heading font-bold text-slate-900 dark:text-white">Projects Overview</h1>
            <p className="text-slate-500 dark:text-slate-400 mt-1">Manage your portfolio projects</p>
          </div>
          <button className="flex items-center gap-2 px-4 py-2 bg-primary-500 hover:bg-primary-600 text-white rounded-xl font-medium transition-colors">
            <PlusCircle size={18} /> Add New
          </button>
        </div>

        {/* Dummy Data Table */}
        <div className="glass rounded-2xl overflow-hidden">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-100/50 dark:bg-slate-800/50 border-b border-slate-200 dark:border-slate-700">
                <th className="px-6 py-4 text-sm font-semibold text-slate-900 dark:text-white">Title</th>
                <th className="px-6 py-4 text-sm font-semibold text-slate-900 dark:text-white">Year</th>
                <th className="px-6 py-4 text-sm font-semibold text-slate-900 dark:text-white">Actions</th>
              </tr>
            </thead>
            <tbody>
              {['AuditAI', 'WanderStay', 'EduLife'].map((project, idx) => (
                <tr key={idx} className="border-b border-slate-200 dark:border-slate-800 hover:bg-white/50 dark:hover:bg-slate-900/50 transition-colors">
                  <td className="px-6 py-4 text-slate-700 dark:text-slate-300 font-medium">{project}</td>
                  <td className="px-6 py-4 text-slate-500 dark:text-slate-400">2025/2026</td>
                  <td className="px-6 py-4 flex gap-3">
                    <button className="p-2 text-blue-500 hover:bg-blue-50 dark:hover:bg-blue-900/20 rounded-lg transition-colors"><Edit size={16} /></button>
                    <button className="p-2 text-red-500 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-lg transition-colors"><Trash2 size={16} /></button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
};

export default AdminDashboard;
