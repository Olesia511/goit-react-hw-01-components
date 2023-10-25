import { Profile } from "./Profile";
import { Statistics } from "./Statistics";
import { FriendList } from "./FriendList";
import { TransactionHistory } from "./TransactionHistory";


import user from "./user.json";
import data from "./data.json";
import friends from "./friends.json"
import transactions from "./transactions.json"




export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101'
      }}
    >
      <Profile person={user} />
      <Statistics title="Upload stats"
        stats={data} />
      <FriendList friends={friends} />
      <TransactionHistory transactions={transactions} />;
      
      
    </div>
  );
};


