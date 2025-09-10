// src/App.jsx
import { useState } from "react";
import { 
  Moon, Sun, User, FileText, Search, Home, PlusSquare, 
  Folder, Layers, Login 
} from "lucide-react"; // 🆕 Tambah ikon sesuai menu

export default function App() {
  const [dark, setDark] = useState(false);

  return (
    <div className={dark ? "dark" : ""}>
      <div className="flex h-screen bg-gray-50 dark:bg-gray-900">
        {/* Sidebar */}
        <aside className="w-64 bg-white dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700 flex flex-col p-4">
          {/* 🆕 Logo utama */}
          <div className="flex items-center space-x-2 mb-8">
            <FileText className="w-6 h-6 text-indigo-600" /> {/* Logo App */}
            <h1 className="text-xl font-bold text-indigo-600">AI Procurement</h1>
          </div>

          <nav className="flex flex-col space-y-3 text-gray-700 dark:text-gray-300">
            {/* 🆕 Tambah ikon tiap menu */}
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
              <Login className="w-5 h-5" />
              <span>Sign in</span>
            </a>
          </nav>

          {/* Profil user */}
          <div className="mt-auto flex items-center space-x-2">
            <div className="w-8 h-8 rounded-full bg-indigo-500"></div>
            <span className="text-sm text-gray-700 dark:text-gray-300">Via Uni Rosa</span>
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
                <Search className="w-4 h-4 absolute left-2 top-2.5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search"
                  className="pl-8 pr-3 py-2 rounded-lg bg-gray-100 dark:bg-gray-700 text-sm text-gray-700 dark:text-gray-200 outline-none"
                />
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
            {/* Document Card */}
            <div className="p-5 rounded-2xl bg-white dark:bg-gray-800 shadow">
              <div className="flex items-center space-x-2 mb-3">
                <FileText className="w-5 h-5 text-indigo-500" />
                <h3 className="font-semibold text-gray-800 dark:text-gray-200">
                  Memo Pembentukan Panitia Pengadaan.docx
                </h3>
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Anda adalah AI analisis procurement ahli. User memberikan dokumen dengan nama Memo
                Pembentukan Panitia Pengadaan dan teks isi dokumen sebagai berikut:
              </p>
              <ol className="mt-3 list-decimal list-inside text-sm text-gray-700 dark:text-gray-300 space-y-1">
                <li>Penjelasan Dasar: ...</li>
                <li>Daftar Poin Wajib: ...</li>
                <li>Cek Compliance Per Poin...</li>
                <li>Hitung Persentase Compliance...</li>
                <li>Saran Dokumen Tambahan...</li>
              </ol>
            </div>

            {/* AI Response Bubble */}
            <div className="flex">
              <div className="max-w-xl bg-indigo-50 dark:bg-indigo-900/40 p-4 rounded-2xl shadow">
                <p className="text-sm text-gray-700 dark:text-gray-200">
                  “Okay, ini analisis lengkap untuk Memo Pembentukan Panitia Pengadaan yang kamu
                  upload. <br />
                  (Penjelasan dasar) <br />
                  Berikut daftar poin wajib: [daftar poin]. <br />
                  Status per poin: [status]. <br />
                  Compliance: [persentase]% <br />
                  Tolong lengkapi poin yang kurang. <br />
                  Saran: [saran tambahan dokumen].”
                </p>
              </div>
            </div>
          </section>

          {/* Input Box */}
          <footer className="p-4 border-t border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800">
            <div className="flex items-center space-x-3">
              <input
                type="text"
                placeholder="Ask anything about Procurement"
                className="flex-1 px-4 py-3 rounded-2xl bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-200 outline-none"
              />
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
