import {
  TableBody,
  TableContainer,
  TableHead,
} from './TransactionHistory.styled';
import { getBgLine } from './TransactionHistory.styled';

export const TransactionHistory = ({ transactions }) => {
  return (
    <TableContainer>
      <TableHead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </TableHead>

      <TableBody>
        {transactions.map(({ id, type, amount, currency }, i) => (
          <tr key={id} style={{ backgroundColor: getBgLine(i) }}>
            <td>{type}</td>
            <td>{amount}</td>
            <td>{currency}</td>
          </tr>
        ))}
      </TableBody>
    </TableContainer>
  );
};
