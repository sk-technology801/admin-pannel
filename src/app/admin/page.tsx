export default function DashboardPage() {
  return (
    <div>
      <h1>Blockchain Admin Dashboard</h1>
      <p>Status: Running</p>

      <div style={{ display: "flex", gap: 20, marginTop: 20 }}>
        <Stat title="Network" value="Ethereum" />
        <Stat title="Block" value="19238492" />
        <Stat title="Gas" value="23 Gwei" />
      </div>
    </div>
  )
}

function Stat({ title, value }: { title: string; value: string }) {
  return (
    <div
      style={{
        background: "#020617",
        padding: 20,
        borderRadius: 8,
        width: 180,
      }}
    >
      <p style={{ opacity: 0.7 }}>{title}</p>
      <h2>{value}</h2>
    </div>
  )
}
