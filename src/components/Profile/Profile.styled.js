import styled from 'styled-components';

export const ProfileContainer = styled.div`
  width: 250px;
  background-color: ${p => p.theme.colors.brown};
  border-radius: ${p => p.theme.radii.lg};
  font-weight: 500;
`;

export const UserContainer = styled.div`
  padding: ${p => p.theme.spacing(10)};
  color: ${p => p.theme.colors.whiteIce};
`;
export const UserInfo = styled.div`
  display: flex;
  gap: ${props => props.theme.spacing(2)};
  flex-direction: column;
  align-items: center;
`;

export const PhotoUser = styled.img`
  margin-left: auto;
  margin-right: auto;
  width: 100px;
  border-radius: 50%;
  margin-bottom: ${p => p.theme.spacing(6)};
  background-color: ${p => p.theme.colors.whiteIce};
`;

export const StatsQuantity = styled.span`
  font-weight: 700;
  font-size: ${p => p.theme.fontSize.fsH4};
`;

export const StatsList = styled.ul`
  display: flex;
  background-color: ${p => p.theme.colors.whiteIce};
  border-radius: ${p => p.theme.radii.sm};
  overflow: hidden;
  & :nth-child(n):hover {
    background-color: ${props => props.theme.colors.pink};
  }
`;

export const StatsItem = styled.li`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${p => p.theme.spacing(1)};
  padding-top: ${p => p.theme.spacing(5)};
  padding-bottom: ${p => p.theme.spacing(5)};

  &:not(:last-child) {
    border-right: 2px solid ${p => p.theme.colors.grayBlue};
  }
`;
