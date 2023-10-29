import {
  FileItem,
  FileList,
  FileStatsContainer,
  Percentage,
  Title,
} from './Statistics.styled';

export const Statistics = ({ title, stats }) => {
  return (
    <FileStatsContainer>
      {title.length > 0 && <Title>{title}</Title>}

      <FileList>
        {stats.map(({ id, label, percentage }) => (
          <FileItem key={id}>
            <span>{label}</span>
            <Percentage> {percentage}%</Percentage>
          </FileItem>
        ))}
      </FileList>
    </FileStatsContainer>
  );
};
