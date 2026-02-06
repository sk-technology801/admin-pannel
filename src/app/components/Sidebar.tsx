"use client"

import Link from "next/link"

export default function Sidebar() {
  return (
    <aside
      style={{
        width: 240,
        background: "linear-gradient(180deg, #020617, #020617)",
        padding: 20,
      }}
    >
      <h2 style={{ marginBottom: 30 }}>Admin Panel</h2>

      <nav style={{ display: "flex", flexDirection: "column", gap: 12 }}>
        <Link href="/admin">📊 Dashboard</Link>
        <Link href="/admin/blockchain">⛓ Blockchain</Link>
        <Link href="/admin/transactions">🔁 Transactions</Link>
      </nav>
    </aside>
  )
}
