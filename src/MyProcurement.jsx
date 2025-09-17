export default function MyProcurement() {
  const procurements = [
    { id: 1, name: "Pengadaan A", compliance: "Compliance", percent: "100%" },
    { id: 2, name: "Pengadaan A", compliance: "Compliance", percent: "100%" },
    { id: 3, name: "Pengadaan A", compliance: "Compliance", percent: "100%" },
    { id: 4, name: "Pengadaan A", compliance: "Compliance", percent: "100%" },
  ];

  return (
    <div className="flex-1 p-6">
      <h2 className="text-2xl font-bold mb-4">My Procurement</h2>

      <div className="bg-blue-100 p-4 rounded-xl mb-4 flex justify-between items-center">
        <h3 className="font-semibold">All Procurement ({procurements.length})</h3>
        <button className="bg-purple-600 text-white px-4 py-2 rounded-xl shadow">
          + New Procurement
        </button>
      </div>

      <input
        type="text"
        placeholder="Search..."
        className="w-full border px-3 py-2 rounded-lg mb-4"
      />

      <div className="grid grid-cols-4 gap-4">
        {procurements.map((item) => (
          <div
            key={item.id}
            className="bg-white shadow rounded-xl p-4 flex flex-col justify-between"
          >
            <h4 className="font-bold">{item.name}</h4>
            <p className="text-sm text-gray-600">{item.compliance}</p>
            <div className="mt-2 text-right font-bold">{item.percent}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
