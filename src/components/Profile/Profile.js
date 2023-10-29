import {
  PhotoUser,
  ProfileContainer,
  StatsItem,
  StatsList,
  StatsQuantity,
  UserContainer,
  UserInfo,
} from './Profile.styled';

export function Profile({ person }) {
  const {
    avatar,
    username,
    tag,
    location,
    stats: { followers, views, likes },
  } = person;

  return (
    <ProfileContainer>
      <UserContainer>
        <PhotoUser src={avatar} alt={username} />
        <UserInfo>
          <h2>{username}</h2>
          <p>{tag}</p>
          <p>{location}</p>
        </UserInfo>
      </UserContainer>

      <StatsList>
        <StatsItem>
          <span>Followers</span>
          <StatsQuantity>{followers}</StatsQuantity>
        </StatsItem>

        <StatsItem>
          <span>Views</span>
          <StatsQuantity>{views}</StatsQuantity>
        </StatsItem>

        <StatsItem>
          <span>Likes</span>
          <StatsQuantity>{likes}</StatsQuantity>
        </StatsItem>
      </StatsList>
    </ProfileContainer>
  );
}
