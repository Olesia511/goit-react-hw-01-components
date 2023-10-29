import styled from 'styled-components';
import { theme } from 'index';

export const FriendItem = styled.li`
  display: flex;
  padding: ${props => props.theme.spacing(4)};
  border-radius: ${p => p.theme.radii.lg};
  width: 250px;
  align-items: center;
  gap: ${props => props.theme.spacing(6)};
  background-color: ${p => p.theme.colors.pink};
  color: ${p => p.theme.colors.whiteIce};
  text-transform: uppercase;
  &:not(:last-child) {
    margin-bottom: ${props => props.theme.spacing(5)};
  }
`;

export const IconOnline = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  width: 32px;
  height: 32px;
  padding: ${props => props.theme.spacing(2)};
`;

export function getBgColor(variant) {
  if (variant === true) {
    return theme.colors.green;
  }

  return theme.colors.burgundy;
}
