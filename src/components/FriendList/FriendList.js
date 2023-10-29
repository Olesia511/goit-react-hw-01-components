import { getBgColor } from './FriendList.styled';
import { FriendItem, IconOnline } from './FriendList.styled';
import { AiOutlineBulb } from 'react-icons/ai';
import { theme } from 'index';

export const FriendList = ({ friends }) => {
  return (
    <ul>
      {friends.map(({ avatar, name, isOnline, id }) => (
        <FriendItem key={id}>
          <IconOnline style={{ backgroundColor: getBgColor(isOnline) }}>
            <AiOutlineBulb style={{ fill: theme.colors.whiteIce }} />
          </IconOnline>
          <img className="avatar" src={avatar} alt="User avatar" width="52" />
          <p className="name">{name}</p>
        </FriendItem>
      ))}
    </ul>
  );
};
