import { useState } from "react";
import { 
  Moon, Sun, User, FileText, Search, Home, PlusSquare, 
  Folder, Layers, LogIn, Paperclip 
} from "lucide-react"; 

export default function App() {
  const [dark, setDark] = useState(false);

  return (
    <div className={dark ? "dark" : ""}>
      <div className="flex h-screen bg-gray-50 dark:bg-gray-900">
        {/* Sidebar */}
        <aside className="w-64 bg-white dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700 flex flex-col p-4">
          {/* Logo */}
          <div className="flex items-center space-x-2 mb-8">
            <FileText className="w-6 h-6 text-indigo-600" />
            <h1 className="text-xl font-bold text-indigo-600">AI Procurement</h1>
          </div>

          <nav className="flex flex-col space-y-3 text-gray-700 dark:text-gray-300">
            <a href="#" className="flex items-center space-x-2 font-medium text-indigo-600">
              <Home className="w-5 h-5" /> 
              <span>Procurement Assistant</span>
            </a>
            <a href="#" className="flex items-center space-x-2">
              <Folder className="w-5 h-5" />
              <span>My Procurement</span>
            </a>
            <a href="#" className="flex items-center space-x-2">
              <Layers className="w-5 h-5" />
              <span>Templates</span>
            </a>
            <a href="#" className="flex items-center space-x-2">
              <FileText className="w-5 h-5" />
              <span>Other Pages</span>
            </a>
            <a href="#" className="flex items-center space-x-2">
              <PlusSquare className="w-5 h-5" />
              <span>Register</span>
            </a>
            <a href="#" className="flex items-center space-x-2">
              <LogIn className="w-5 h-5" />
              <span>Sign in</span>
            </a>
          </nav>

          <div className="mt-auto flex justify-between items-center">
            {/* Profil User */}
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 rounded-full bg-indigo-500"></div>
              <span className="text-sm text-gray-700 dark:text-gray-300">Via Uni Rosa</span>
            </div>

            {/* Button Logout */}
            <button
              onClick={() => console.log("Logout clicked")}
              className="flex items-center space-x-2 px-3 py-2 rounded-lg text-sm font-medium text-gray-500 hover:bg-gray-100 dark:hover:bg-red-700 transition"
            >
              <LogIn className="w-5 h-5 transform rotate-180" />
            </button>
          </div>

        </aside>

        {/* Main Content */}
        <main className="flex-1 flex flex-col">
          {/* Topbar */}
          <header className="flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800">
            <h2 className="text-lg font-semibold text-gray-800 dark:text-gray-200">
              Procurement Assistant
            </h2>
            <div className="flex items-center space-x-4">
              <div className="relative">
              </div>
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

          {/* Document & AI Response */}
          <section className="flex-1 overflow-y-auto p-6 space-y-6">
            {/* User Question */}
            <div className="flex items-start space-x-3">
              <div className="w-10 h-10 rounded-full bg-indigo-500 flex-shrink-0"></div> 
              <div className="max-w-xl bg-indigo-50 dark:bg-indigo-900/40 p-4 rounded-2xl shadow">
                <p className="text-sm text-gray-700 dark:text-gray-200">
                  “Memo Pembentukan Panitia Pengadaan.docx telah saya upload. Bisa dianalisis, AI?”
                </p>
              </div>
            </div>

            {/* AI Response */}
            <div className="flex items-start space-x-3 justify-end"> 
              <div className="max-w-xl bg-white dark:bg-gray-800 p-4 rounded-2xl shadow">
                <p className="text-sm text-gray-700 dark:text-gray-200">
                  “Okay, ini analisis lengkap untuk Memo Pembentukan Panitia Pengadaan: <br />
                  - Penjelasan dasar <br />
                  - Daftar poin wajib <br />
                  - Status per poin <br />
                  - Compliance <br />
                  - Saran dokumen tambahan”
                </p>
              </div>
              <div className="w-10 h-10 rounded-full bg-red-500 flex-shrink-0"></div> 
            </div>
          </section>

          {/* Input Box */}
          <footer className="p-4 border-t border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800">
            <div className="flex items-center space-x-3">
              <div className="relative flex-1">
                <input
                  type="text"
                  placeholder="Ask anything about Procurement"
                  className="w-full px-4 py-3 rounded-2xl bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-200 outline-none"
                />
                <Paperclip className="w-5 h-5 absolute right-4 top-3.5 text-gray-400 dark:text-gray-300 cursor-pointer" />
              </div>
              <button className="px-6 py-3 rounded-2xl bg-gradient-to-r from-indigo-500 to-purple-500 text-white font-medium shadow hover:opacity-90 transition">
                Submit
              </button>
            </div>
          </footer>
        </main>
      </div>
    </div>
  );
}
