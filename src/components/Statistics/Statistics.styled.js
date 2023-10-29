import styled from 'styled-components';

export const FileStatsContainer = styled.div`
  width: 350px;
  background-color: ${p => p.theme.colors.whiteIce};
  border-radius: ${p => p.theme.radii.sm};
  overflow: hidden;
  text-align: center;
`;

export const Title = styled.h2`
  padding: ${props => props.theme.spacing(4)};
  margin-bottom: ${props => props.theme.spacing(2)};
  text-transform: uppercase;
`;

export const FileList = styled.ul`
  display: flex;
`;

export const FileItem = styled.li`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
  gap: ${props => props.theme.spacing(1)};
  padding: ${props => props.theme.spacing(2)};
  color: ${p => p.theme.colors.whiteIce};
  &:nth-child(3n + 1) {
    background-color: ${p => p.theme.colors.burgundy};
  }
  &:nth-child(3n + 2) {
    background-color: ${p => p.theme.colors.lightBrown};
  }
  &:nth-child(3n + 3) {
    background-color: ${p => p.theme.colors.brown};
  }
`;

export const Percentage = styled.span`
  font-weight: 700;
  font-size: ${p => p.theme.fontSize.fsH4};
`;
