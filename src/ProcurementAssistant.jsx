import { useState } from "react";
import { 
  Moon, Sun, User, Home, Folder, LogIn, Paperclip, FileText, X
} from "lucide-react"; 

export default function ProcurementAssistant() {
  const [dark, setDark] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [selectedProcurement, setSelectedProcurement] = useState("");
  const [selectedDocument, setSelectedDocument] = useState("");
  const [uploadedFile, setUploadedFile] = useState(null);
  const [savedDocs, setSavedDocs] = useState([]);

  // Data pengadaan & dokumen
  const procurementTypes = [
    "Pengadaan Smart Device", 
    "Pengadaan Lisensi Robotic PACE", 
    "Pengadaan SME Pada Aplikasi CCOS"
  ];

  const documents = {
    "Pengadaan Smart Device": ["FS", "TOR", "PI", "FIP"],
    "Pengadaan Lisensi Robotic PACE": ["FS", "TOR", "PI", "FIP"],
    "Pengadaan SME Pada Aplikasi CCOS": ["FS", "TOR", "PI", "FIP"],
  };

  // fungsi simpan dokumen
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
    <div style={{ backgroundColor: dark ? "#111827" : "#F9FAFB", color: dark ? "#E5E7EB" : "#1F2937", height: "100%" }}>
      <div style={{ display: "flex", height: "100%" }}>
        {/* Main Content */}
        <main style={{ flex: 1, display: "flex", flexDirection: "column" }}>
          {/* Topbar */}
          <header style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "1rem", borderBottom: `1px solid ${dark ? "#374151" : "#E5E7EB"}`, backgroundColor: dark ? "#1F2937" : "#FFFFFF" }}>
            <h2 style={{ fontSize: "1.125rem", fontWeight: "600", color: dark ? "#E5E7EB" : "#1F2937" }}>
              Procurement Assistant
            </h2>
            <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
              <button
                onClick={() => setDark(!dark)}
                style={{ padding: "0.5rem", borderRadius: "0.5rem", backgroundColor: dark ? "#374151" : "#F3F4F6" }}
              >
                {dark ? (
                  <Sun size={16} color="#FACC15" />
                ) : (
                  <Moon size={16} color="#4B5563" />
                )}
              </button>
              <User size={24} color={dark ? "#D1D5DB" : "#6B7280"} />
            </div>
          </header>

          {/* Chat Area */}
          <section style={{ flex: 1, overflowY: "auto", padding: "1.5rem" }}>
            {/* Chat Example */}
            <div style={{ display: "flex", justifyContent: "flex-end", alignItems: "flex-start", gap: "0.75rem" }}>
              <div style={{ maxWidth: "36rem", backgroundColor: dark ? "#312E81" : "#EEF2FF", padding: "1rem", borderRadius: "1rem", boxShadow: "0 1px 2px rgba(0,0,0,0.1)" }}>
                <p style={{ fontSize: "0.875rem", color: dark ? "#E5E7EB" : "#374151" }}>
                  “Memo Pembentukan Panitia Pengadaan.docx telah saya upload. Bisa dianalisis?”
                </p>
              </div>
              <div style={{ width: "2.5rem", height: "2.5rem", borderRadius: "9999px", backgroundColor: "#EF4444", flexShrink: 0, display: "flex", alignItems: "center", justifyContent: "center"}}>
                <User className="w-5 h-5 text-['000000']" />
              </div>
            </div>

            <div style={{ display: "flex", alignItems: "flex-start", gap: "0.75rem", marginTop: "1rem" }}>
              <div style={{ width: "2.5rem", height: "2.5rem", borderRadius: "9999px", backgroundColor: "#6366F1", flexShrink: 0 }}></div>
              <div style={{ maxWidth: "36rem", backgroundColor: dark ? "#1F2937" : "#FFFFFF", padding: "1rem", borderRadius: "1rem", boxShadow: "0 1px 2px rgba(0,0,0,0.1)" }}>
                <p style={{ fontSize: "0.875rem", color: dark ? "#E5E7EB" : "#374151" }}>
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

          {/* Dokumen Tersimpan */}
          {savedDocs.length > 0 && (
            <div style={{ padding: "1rem", borderTop: `1px solid ${dark ? "#374151" : "#E5E7EB"}`, backgroundColor: dark ? "#111827" : "#F9FAFB" }}>
              <h3 style={{ fontSize: "0.875rem", fontWeight: "600", color: dark ? "#D1D5DB" : "#4B5563" }}>
                Dokumen Tersimpan
              </h3>
              <div style={{ maxHeight: "8rem", overflowY: "auto", marginTop: "0.5rem" }}>
                {savedDocs.map((doc, idx) => (
                  <div 
                    key={idx} 
                    style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: "0.5rem", padding: "0.5rem", backgroundColor: dark ? "#1F2937" : "#FFFFFF", borderRadius: "0.5rem", border: `1px solid ${dark ? "#374151" : "#E5E7EB"}`, marginBottom: "0.5rem" }}
                  >
                    <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                      <FileText size={20} color="#6366F1" />
                      <span style={{ fontSize: "0.875rem", color: dark ? "#E5E7EB" : "#374151" }}>
                        {doc.procurement} – {doc.document} – {doc.fileName}
                      </span>
                    </div>
                    <button
                      onClick={() =>
                        setSavedDocs((prev) => prev.filter((_, i) => i !== idx))
                      }
                      style={{ padding: "0.25rem", borderRadius: "0.25rem", backgroundColor: dark ? "#B91C1C" : "#FEE2E2" }}
                    >
                      <X size={16} color="#DC2626" />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Input Box */}
          <footer style={{ padding: "1rem", borderTop: `1px solid ${dark ? "#374151" : "#E5E7EB"}`, backgroundColor: dark ? "#1F2937" : "#FFFFFF" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
              <div style={{ position: "relative", flex: 1 }}>
                <input
                  type="text"
                  placeholder="Ask anything about Procurement"
                  style={{ width: "100%", padding: "0.75rem 1rem", borderRadius: "1rem", backgroundColor: dark ? "#374151" : "#F3F4F6", color: dark ? "#E5E7EB" : "#374151", border: "none", outline: "none" }}
                />
                <Paperclip 
                  onClick={() => setShowModal(true)} 
                  size={20}
                  style={{ position: "absolute", right: "1rem", top: "0.9rem", color: dark ? "#D1D5DB" : "#9CA3AF", cursor: "pointer" }}
                />
              </div>
              <button style={{ padding: "0.75rem 1.5rem", borderRadius: "1rem", background: "linear-gradient(to right, #6366F1, #8B5CF6)", color: "#FFFFFF", fontWeight: "500", boxShadow: "0 2px 4px rgba(0,0,0,0.1)" }}>
                Submit
              </button>
            </div>
          </footer>
        </main>
      </div>

      {/* Modal Pilihan */}
      {showModal && (
        <div style={{ position: "fixed", inset: 0, backgroundColor: "rgba(0,0,0,0.5)", display: "flex", alignItems: "center", justifyContent: "center", zIndex: 50 }}>
          <div style={{ backgroundColor: dark ? "#1F2937" : "#FFFFFF", padding: "1.5rem", borderRadius: "1rem", width: "24rem", boxShadow: "0 4px 6px rgba(0,0,0,0.2)" }}>
            <h3 style={{ fontSize: "1.125rem", fontWeight: "600", color: dark ? "#E5E7EB" : "#1F2937", marginBottom: "1rem" }}>
              Pilih Pengadaan & Dokumen
            </h3>

            {/* Dropdown Pengadaan */}
            <select
              style={{ width: "100%", padding: "0.5rem", borderRadius: "0.5rem", border: `1px solid ${dark ? "#374151" : "#D1D5DB"}`, backgroundColor: dark ? "#374151" : "#FFFFFF", color: dark ? "#E5E7EB" : "#1F2937", marginBottom: "1rem" }}
              value={selectedProcurement}
              onChange={(e) => {
                setSelectedProcurement(e.target.value);
                setSelectedDocument("");
              }}
            >
              <option value="">-- Pilih Pengadaan --</option>
              {procurementTypes.map((type) => (
                <option key={type} value={type}>{type}</option>
              ))}
            </select>

            {/* Dropdown Dokumen */}
            {selectedProcurement && (
              <select
                style={{ width: "100%", padding: "0.5rem", borderRadius: "0.5rem", border: `1px solid ${dark ? "#374151" : "#D1D5DB"}`, backgroundColor: dark ? "#374151" : "#FFFFFF", color: dark ? "#E5E7EB" : "#1F2937", marginBottom: "1rem" }}
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
              <div style={{ border: `2px dashed ${dark ? "#6B7280" : "#D1D5DB"}`, borderRadius: "0.5rem", padding: "1rem", textAlign: "center", cursor: "pointer", marginBottom: "1rem" }}>
                <input 
                  type="file" 
                  onChange={(e) => setUploadedFile(e.target.files[0])} 
                  style={{ display: "none" }} 
                  id="fileInput"
                />
                <label 
                  htmlFor="fileInput" 
                  style={{ fontSize: "0.875rem", color: dark ? "#D1D5DB" : "#4B5563", cursor: "pointer" }}
                >
                  {uploadedFile ? uploadedFile.name : "Drop file di sini atau klik untuk upload"}
                </label>
              </div>
            )}

            {/* Tombol Batal & Simpan */}
            <div style={{ display: "flex", justifyContent: "flex-end", gap: "0.75rem" }}>
              <button
                onClick={() => setShowModal(false)}
                style={{ padding: "0.5rem 1rem", borderRadius: "0.5rem", backgroundColor: dark ? "#4B5563" : "#E5E7EB", color: dark ? "#E5E7EB" : "#374151" }}
              >
                Batal
              </button>
              <button
                onClick={handleSaveDoc}
                disabled={!uploadedFile}
                style={{ padding: "0.5rem 1rem", borderRadius: "0.5rem", backgroundColor: "#4F46E5", color: "#FFFFFF", opacity: !uploadedFile ? 0.5 : 1 }}
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
