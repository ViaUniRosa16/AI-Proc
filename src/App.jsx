import { useState } from "react";
import { 
  Moon, Sun, User, Home, Folder, Layers, LogIn, Paperclip, FileText, X
} from "lucide-react"; 

export default function App() {
  const [dark, setDark] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [selectedProcurement, setSelectedProcurement] = useState("");
  const [selectedDocument, setSelectedDocument] = useState("");
  const [uploadedFile, setUploadedFile] = useState(null);

  // 🆕 state untuk simpan dokumen yang sudah dipilih
  const [savedDocs, setSavedDocs] = useState([]);

  // Contoh data pengadaan & dokumen
  const procurementTypes = ["Barang", "Jasa"];
  const documents = {
    Barang: ["FS", "TOR", "PI", "FIP"],
    Jasa: ["FS", "TOR", "PI", "FIP"],
  };

  // 🆕 fungsi simpan dokumen
  const handleSaveDoc = () => {
    if (!uploadedFile || !selectedDocument || !selectedProcurement) return;

    setSavedDocs((prev) => [
      ...prev,
      {
        procurement: selectedProcurement,
        document: selectedDocument,
        fileName: uploadedFile.name,
      },
    ]);

    // reset form
    setSelectedProcurement("");
    setSelectedDocument("");
    setUploadedFile(null);
    setShowModal(false);
  };

  return (
    <div className={dark ? "dark" : ""}>
      <div className="flex h-screen bg-gray-50 dark:bg-gray-900">
        {/* Sidebar */}
        <aside className="w-64 bg-white dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700 flex flex-col p-4">
          <div className="flex items-center space-x-2 mb-8">
            <h1 className="text-xl font-bold text-[#1B2559]">AI Procurement</h1>
          </div>
          <nav className="flex flex-col space-y-3 text-gray-700 dark:text-gray-300">
            <a href="#" className="flex items-center space-x-2 font-medium text-[#1B2559]">
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

        {/* Main Content */}
        <main className="flex-1 flex flex-col">
          {/* Topbar */}
          <header className="flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800">
            <h2 className="text-lg font-semibold text-gray-800 dark:text-gray-200">
              Procurement Assistant
            </h2>
            <div className="flex items-center space-x-4">
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

          {/* Chat Area */}
          <section className="flex-1 overflow-y-auto p-6 space-y-6">

            {/* 🆕 Dokumen Tersimpan selalu di atas chat */}
            {savedDocs.length > 0 && (
              <div className="space-y-2 mb-6">
                <h3 className="text-sm font-semibold text-gray-600 dark:text-gray-300">
                  Dokumen Tersimpan
                </h3>
                {savedDocs.map((doc, idx) => (
                  <div 
                    key={idx} 
                    className="flex items-center justify-between gap-2 p-2 bg-white dark:bg-gray-800 rounded-lg border shadow-sm"
                  >
                    <div className="flex items-center gap-2">
                      <FileText className="w-5 h-5 text-indigo-500" />
                      <span className="text-gray-700 dark:text-gray-200 text-sm">
                        {doc.procurement} – {doc.document} – {doc.fileName}
                      </span>
                    </div>
                    
                    {/* 🆕 Tombol hapus */}
                    <button
                      onClick={() =>
                        setSavedDocs((prev) => prev.filter((_, i) => i !== idx))
                      }
                      className="p-1 rounded hover:bg-red-100 dark:hover:bg-red-700"
                    >
                      <X className="w-4 h-4 text-red-500" />
                    </button>
                  </div>
                ))}
              </div>
            )}

            {/* Chat Example */}
            <div className="flex items-start space-x-3 justify-end">
              <div className="max-w-xl bg-indigo-50 dark:bg-indigo-900/40 p-4 rounded-2xl shadow">
                <p className="text-sm text-gray-700 dark:text-gray-200">
                  “Memo Pembentukan Panitia Pengadaan.docx telah saya upload. Bisa dianalisis, AI?”
                </p>
              </div>
              <div className="w-10 h-10 rounded-full bg-indigo-500 flex-shrink-0"></div>
            </div>

            <div className="flex items-start space-x-3">
              <div className="w-10 h-10 rounded-full bg-red-500 flex-shrink-0"></div>
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
                <Paperclip 
                  onClick={() => setShowModal(true)} 
                  className="w-5 h-5 absolute right-4 top-3.5 text-gray-400 dark:text-gray-300 cursor-pointer" 
                />
              </div>
              <button className="px-6 py-3 rounded-2xl bg-gradient-to-r from-indigo-500 to-purple-500 text-white font-medium shadow hover:opacity-90 transition">
                Submit
              </button>
            </div>
          </footer>
        </main>
      </div>

      {/* Modal Pilihan */}
      {showModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-xl w-96 space-y-4">
            <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200">
              Pilih Pengadaan & Dokumen
            </h3>

            {/* Dropdown Pengadaan */}
            <select
              className="w-full p-2 rounded-lg border dark:bg-gray-700 dark:text-gray-200"
              value={selectedProcurement}
              onChange={(e) => {
                setSelectedProcurement(e.target.value);
                setSelectedDocument("");
              }}
            >
              <option value="">-- Pilih Jenis Pengadaan --</option>
              {procurementTypes.map((type) => (
                <option key={type} value={type}>{type}</option>
              ))}
            </select>

            {/* Dropdown Dokumen */}
            {selectedProcurement && (
              <select
                className="w-full p-2 rounded-lg border dark:bg-gray-700 dark:text-gray-200"
                value={selectedDocument}
                onChange={(e) => setSelectedDocument(e.target.value)}
              >
                <option value="">-- Pilih Dokumen --</option>
                {documents[selectedProcurement].map((doc) => (
                  <option key={doc} value={doc}>{doc}</option>
                ))}
              </select>
            )}

            {/* Upload File */}
            {selectedDocument && (
              <div className="border-2 border-dashed rounded-lg p-4 text-center cursor-pointer dark:border-gray-600">
                <input 
                  type="file" 
                  onChange={(e) => setUploadedFile(e.target.files[0])} 
                  className="hidden" 
                  id="fileInput"
                />
                <label 
                  htmlFor="fileInput" 
                  className="text-sm text-gray-600 dark:text-gray-300 cursor-pointer"
                >
                  {uploadedFile ? uploadedFile.name : "Drop file di sini atau klik untuk upload"}
                </label>
              </div>
            )}

            {/* Tombol Aksi */}
            <div className="flex justify-end space-x-3">
              <button
                onClick={() => setShowModal(false)}
                className="px-4 py-2 rounded-lg bg-gray-200 dark:bg-gray-600 text-gray-700 dark:text-gray-200"
              >
                Batal
              </button>
              <button
                onClick={handleSaveDoc}
                disabled={!uploadedFile}
                className="px-4 py-2 rounded-lg bg-indigo-600 text-white disabled:opacity-50"
              >
                Simpan
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
