import styled from 'styled-components';
import { theme } from 'index';

export const TableContainer = styled.table`
  width: 600px;
  border-radius: ${p => p.theme.radii.lg};
  overflow: hidden;
`;
export const TableHead = styled.thead`
  background-color: ${p => p.theme.colors.purple};
  text-transform: uppercase;
  height: 40px;
  color: ${p => p.theme.colors.whiteIce};
  & :nth-child(n) {
    width: calc(100% / 3);
  }
`;

export const TableBody = styled.tbody`
  font-size: 12px;
  font-weight: 600;
  color: ${p => p.theme.colors.whiteIce};
  & :nth-child(n) {
    height: 40px;
    padding-left: 80px;
  }
`;

export function getBgLine(index) {
  if (index % 2 === 0) {
    return theme.colors.pink;
  }
  return theme.colors.brown;
}
