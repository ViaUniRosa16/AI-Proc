import { useState } from "react";
import { Home, Folder, User, LogIn } from "lucide-react";
import ProcurementAssistant from "./ProcurementAssistant";
import MyProcurement from "./MyProcurement";

export default function App() {
  const [activePage, setActivePage] = useState("assistant");
  const [dark, setDark] = useState(false); // toggle dark mode

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <aside
        style={{
          width: "16rem",
          backgroundColor: dark ? "#1F2937" : "#FFFFFF",
          borderRight: `1px solid ${dark ? "#374151" : "#E5E7EB"}`,
          display: "flex",
          flexDirection: "column",
          padding: "1rem",
        }}
      >
        <div
          style={{ display: "flex", alignItems: "center", marginBottom: "2rem" }}
        >
          <h1 style={{ fontSize: "1.25rem", fontWeight: "bold", color: "#1B2559" }}>
            AI Procurement
          </h1>
        </div>

        <nav
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "0.75rem",
            color: dark ? "#D1D5DB" : "#374151",
          }}
        >
          <button
            onClick={() => setActivePage("assistant")}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "0.5rem",
              fontWeight: "500",
              color: activePage === "assistant" ? "#1B2559" : "#6B7280",
            }}
          >
            <Home size={20} />
            <span>Procurement Assistant</span>
          </button>

          <button
            onClick={() => setActivePage("procurement")}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "0.5rem",
              fontWeight: "500",
              color: activePage === "procurement" ? "#1B2559" : "#6B7280",
            }}
          >
            <Folder size={20} />
            <span>My Procurement</span>
          </button>
        </nav>

        <div
          style={{
            marginTop: "auto",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
            <div
              style={{
                width: "2rem",
                height: "2rem",
                borderRadius: "9999px",
                backgroundColor: "#6366F1",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <User className="w-5 h-5 text-black" />
            </div>
            <span
              style={{ fontSize: "0.875rem", color: dark ? "#D1D5DB" : "#374151" }}
            >
              Via Uni Rosa
            </span>
          </div>

          <button
            onClick={() => console.log("Logout clicked")}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "0.5rem",
              padding: "0.5rem 0.75rem",
              borderRadius: "0.5rem",
              fontSize: "0.875rem",
              fontWeight: "500",
              color: "#6B7280",
              backgroundColor: dark ? "#B91C1C" : "#F3F4F6",
            }}
          >
            <LogIn size={20} style={{ transform: "rotate(180deg)" }} />
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 bg-gray-50 overflow-y-auto">
        {activePage === "assistant" && <ProcurementAssistant />}
        {activePage === "procurement" && <MyProcurement />}
      </main>
    </div>
  );
}
