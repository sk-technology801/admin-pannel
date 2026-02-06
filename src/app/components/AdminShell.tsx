"use client"

export default function AdminShell({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div style={{ display: "flex", height: "100vh" }}>
      <aside
        style={{
          width: 220,
          background: "#111",
          color: "#fff",
          padding: 20,
        }}
      >
        <h2>Admin Panel</h2>
        <ul>
          <li>Dashboard</li>
          <li>Blockchain</li>
          <li>Transactions</li>
        </ul>
      </aside>

      <main style={{ flex: 1, padding: 20 }}>{children}</main>
    </div>
  )
}
