export default function TransactionsPage() {
  return (
    <div>
      <h1>Transactions</h1>

      <table
        style={{
          width: "100%",
          marginTop: 20,
          borderCollapse: "collapse",
        }}
      >
        <thead>
          <tr>
            <th align="left">Hash</th>
            <th>Status</th>
            <th>Gas</th>
            <th>Value</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>0x8f2...9ad</td>
            <td>Success</td>
            <td>21000</td>
            <td>0.45 ETH</td>
          </tr>
          <tr>
            <td>0xa12...e21</td>
            <td>Pending</td>
            <td>18000</td>
            <td>1.2 ETH</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}
