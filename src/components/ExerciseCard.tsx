import { Card, Tag, Collapse, Typography } from 'antd';
import type { Exercise } from '../data/schedule';
import VideoEmbed from './VideoEmbed';

const { Text } = Typography;

interface ExerciseCardProps {
  exercise: Exercise;
}

const ExerciseCard: React.FC<ExerciseCardProps> = ({ exercise }) => {
  return (
    <Card 
      title={exercise.name} 
      style={{ marginBottom: 16, borderRadius: 12, overflow: 'hidden' }}
      styles={{ header: { backgroundColor: '#fafafa' } }}
    >
      <div style={{ display: 'flex', gap: '8px', marginBottom: '12px' }}>
        <Tag color="blue">{exercise.sets} Sets</Tag>
        <Tag color="green">{exercise.reps} Reps</Tag>
      </div>

      {exercise.videos.length > 0 ? (
        <Collapse ghost items={[
            {
                key: '1',
                label: <Text type="secondary">Xem hướng dẫn ({exercise.videos.length} video)</Text>,
                children: (
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                    {exercise.videos.map((url, index) => (
                        <div key={index}>
                        <Text strong style={{ display: 'block', marginBottom: 4 }}>Video {index + 1}</Text>
                        <VideoEmbed url={url} />
                        </div>
                    ))}
                    </div>
                )
            }
        ]} />
      ) : (
        <Text type="secondary" italic>Chưa có video hướng dẫn</Text>
      )}
    </Card>
  );
};

export default ExerciseCard;
