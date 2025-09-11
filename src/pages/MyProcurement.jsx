import { FileText, Home, Folder, Layers, LogIn, Moon, Sun, User, PlusSquare } from "lucide-react";
import { useState } from "react";

export default function MyProcurement() {
  const [dark, setDark] = useState(false);

  return (
    <div className={dark ? "dark" : ""}>
      <div className="flex h-screen bg-gray-50 dark:bg-gray-900">
        {/* Sidebar */}
        <aside className="w-64 bg-white dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700 flex flex-col p-4">
          <div className="flex items-center space-x-2 mb-8">
            <FileText className="w-6 h-6 text-indigo-600" />
            <h1 className="text-xl font-bold text-indigo-600">AI Procurement</h1>
          </div>

          <nav className="flex flex-col space-y-3 text-gray-700 dark:text-gray-300">
            <a href="/assistant" className="flex items-center space-x-2">
              <Home className="w-5 h-5" /> 
              <span>Procurement Assistant</span>
            </a>
            <a href="#" className="flex items-center space-x-2 font-medium text-indigo-600">
              <Folder className="w-5 h-5" />
              <span>My Procurement</span>
            </a>
            <a href="#" className="flex items-center space-x-2">
              <Layers className="w-5 h-5" />
              <span>Templates</span>
            </a>
          </nav>

          <div className="mt-auto flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 rounded-full bg-indigo-500"></div>
              <span className="text-sm text-gray-700 dark:text-gray-300">Via Uni Rosa</span>
            </div>
            <button
              onClick={() => console.log("Logout clicked")}
              className="flex items-center space-x-2 px-3 py-2 rounded-lg text-sm font-medium text-gray-500 hover:bg-gray-100 dark:hover:bg-red-700 transition"
            >
              <LogIn className="w-5 h-5 transform rotate-180" />
            </button>
          </div>
        </aside>

        {/* Main */}
        <main className="flex-1 flex flex-col">
          <header className="flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800">
            <h2 className="text-lg font-semibold text-gray-800 dark:text-gray-200">
              My Procurement
            </h2>
            <div className="flex items-center space-x-4">
              <button className="px-4 py-2 rounded-lg bg-gradient-to-r from-indigo-500 to-purple-500 text-white font-medium shadow">
                + New Procurement
              </button>
              <button
                onClick={() => setDark(!dark)}
                className="p-2 rounded-lg bg-gray-100 dark:bg-gray-700"
              >
                {dark ? (
                  <Sun className="w-4 h-4 text-yellow-400" />
                ) : (
                  <Moon className="w-4 h-4 text-gray-600" />
                )}
              </button>
              <User className="w-6 h-6 text-gray-500 dark:text-gray-300" />
            </div>
          </header>

          {/* Search + Cards */}
          <section className="flex-1 p-6">
            <div className="flex items-center mb-4 space-x-2">
              <input
                type="text"
                placeholder="Search..."
                className="flex-1 px-4 py-2 border rounded-lg"
              />
            </div>

            {/* Grid Cards */}
            <div className="grid grid-cols-4 gap-4">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="p-4 border rounded-lg shadow bg-white dark:bg-gray-800">
                  <h3 className="font-medium text-gray-800 dark:text-gray-200">Pengadaan A</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Compliance</p>
                  <span className="text-xs font-bold">80%</span>
                </div>
              ))}
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}
