import { Profile } from './Profile/Profile';
import { Statistics } from './Statistics/Statistics';
import { FriendList } from './FriendList/FriendList';
import { TransactionHistory } from './TransactionHistory/TransactionHistory';

import user from './user.json';
import data from './data.json';
import friends from './friends.json';
import transactions from './transactions.json';

import styled from 'styled-components';
import { GlobalStyle } from './ClobalStyles';

const BasicContainer = styled.div`
  width: 100vw;
  display: flex;
  padding: ${props => props.theme.spacing(10)};
  gap: ${props => props.theme.spacing(10)};
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: ${p => p.theme.colors.black};
  background-color: ${p => p.theme.colors.white};
`;

export const App = () => {
  return (
    <BasicContainer>
      <Profile person={user} />
      <Statistics title="Upload stats" stats={data} />
      <FriendList friends={friends} />
      <TransactionHistory transactions={transactions} />
      <GlobalStyle />
    </BasicContainer>
  );
};
