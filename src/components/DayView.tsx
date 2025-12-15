import React from 'react';
import { Alert } from 'antd';
import type { DayPlan } from '../data/schedule';
import ExerciseCard from './ExerciseCard';

interface DayViewProps {
  dayPlan: DayPlan;
}

const DayView: React.FC<DayViewProps> = ({ dayPlan }) => {
  if (dayPlan.exercises.length === 0) {
     if (dayPlan.focus.includes('Nghỉ')) {
        return (
            <Alert
                message="Ngày Nghỉ"
                description="Hãy thư giãn và hồi phục cơ bắp chuẩn bị cho buổi tập tiếp theo!"
                type="success"
                showIcon
            />
        )
     }
  }

  return (
    <div style={{ padding: '0 8px' }}>
      <Alert
        message={dayPlan.dayName}
        description={dayPlan.focus}
        type="info"
        showIcon
        style={{ marginBottom: 16 }}
      />
      
      {dayPlan.exercises.map((exercise, index) => (
        <ExerciseCard key={`${dayPlan.id}-${index}`} exercise={exercise} />
      ))}
    </div>
  );
};

export default DayView;
