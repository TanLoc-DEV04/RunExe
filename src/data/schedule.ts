export interface Exercise {
  name: string;
  sets: number;
  reps: string;
  videos: string[];
}

export interface DayPlan {
  id: string;
  dayName: string;
  focus: string;
  exercises: Exercise[];
}

export const weeklySchedule: DayPlan[] = [
  {
    id: 'mon',
    dayName: 'Thứ 2',
    focus: 'Ngực, Vai, Tay sau',
    exercises: [
      {
        name: 'Barbell Bench Press',
        sets: 4,
        reps: '8-12',
        videos: [
          'https://www.youtube.com/shorts/_FkbD0FhgVE',
          'https://www.youtube.com/shorts/6zWoAllRufg',
        ],
      },
      {
        name: 'Incline Bench Press',
        sets: 4,
        reps: '8-12',
        videos: [
          'https://www.youtube.com/shorts/98HWfiRonkE',
          'https://www.youtube.com/shorts/MRmeUet5VUw',
          'https://www.youtube.com/shorts/ohRa_YRmVCk',
        ],
      },
      {
        name: 'Pec Fly',
        sets: 4,
        reps: '8-12',
        videos: [
          'https://www.youtube.com/shorts/a9vQ_hwIksU',
          'https://www.youtube.com/shorts/fgXSA2-o0NM',
        ],
      },
      {
        name: 'Cable Fly',
        sets: 4,
        reps: '8-12',
        videos: ['https://www.youtube.com/shorts/I-Ue34qLxc4',
          'https://www.youtube.com/shorts/y4RJDSOBEl8',
        ],
      },
      {
        name: 'Dumbbell Shoulder Press',
        sets: 4,
        reps: '8-12',
        videos: [
          'https://www.youtube.com/shorts/k6tzKisR3NY',
          'https://www.youtube.com/shorts/6v4nrRVySj0',
        ],
      },
      {
        name: 'Lateral Raises',
        sets: 4,
        reps: '12-15',
        videos: [
          'https://www.youtube.com/shorts/Kl3LEzQ5Zqs',
          'https://www.youtube.com/shorts/dybxZJaWxCY',
          'https://www.youtube.com/shorts/lMJUXEvcMkQ',
        ],
      },
      {
        name: 'Triceps Extension',
        sets: 4,
        reps: '8-12',
        videos: [
          'https://www.youtube.com/shorts/b_r_LW4HEcM',
          'https://www.youtube.com/shorts/6Dh8sD6aNQE',
          'https://www.youtube.com/shorts/9Ark9S11uXw',
        ],
      },
    ],
  },
  {
    id: 'tue',
    dayName: 'Thứ 3',
    focus: 'Lưng xô, Tay trước',
    exercises: [
      {
        name: 'Lat Pulldowns',
        sets: 4,
        reps: '8-12',
        videos: ['https://www.youtube.com/shorts/bNmvKpJSWKM'],
      },
      {
        name: 'Seated Cable Row',
        sets: 4,
        reps: '8-12',
        videos: ['https://www.youtube.com/shorts/qD1WZ5pSuvk'],
      },
      {
        name: 'Barbell Row',
        sets: 4,
        reps: '8-12',
        videos: ['https://www.youtube.com/shorts/phVtqawIgbk'],
      },
      {
        name: 'Dumbbell Row',
        sets: 4,
        reps: '8-12',
        videos: [
          'https://www.youtube.com/shorts/WkFX6_GxAs8',
          'https://www.youtube.com/shorts/PilFW4QEFwc',
        ],
      },
      {
        name: 'Single Cable Lat Pulldown',
        sets: 4,
        reps: '8-12',
        videos: [
          'https://www.youtube.com/shorts/0VDkEX5RBC8',
          'https://www.youtube.com/watch?v=HBC5s98wXko',
          'https://www.youtube.com/shorts/_kj9qkFN5rQ',
        ],
      },
      {
        name: 'Barbell Curl',
        sets: 4,
        reps: '8-12',
        videos: [
          'https://www.youtube.com/shorts/54x2WF1_Suc',
          'https://www.youtube.com/shorts/ez3YoWf62Eg',
        ],
      },
      {
        name: 'Dumbbells Curl',
        sets: 4,
        reps: '8-12',
        videos: [
          'https://www.youtube.com/shorts/_aoad2yuP5w',
          'https://www.youtube.com/shorts/MCC0Wj9RErI',
          'https://www.youtube.com/shorts/iui51E31sX8',
        ],
      },
    ],
  },
  {
    id: 'wed',
    dayName: 'Thứ 4',
    focus: 'Chân, Bụng, Cardio hoặc Nghỉ',
    exercises: [
      {
        name: 'Nghỉ ngơi hoặc Cardio nhẹ',
        sets: 1,
        reps: '15-20 mins',
        videos: [],
      },
    ],
  },
  {
    id: 'thu',
    dayName: 'Thứ 5',
    focus: 'Lặp lại Thứ 2 (Ngực, Vai, Tay sau)',
    exercises: [], // Will be handled in logic to reuse Mon
  },
  {
    id: 'fri',
    dayName: 'Thứ 6',
    focus: 'Lặp lại Thứ 3 (Lưng xô, Tay trước)',
    exercises: [], // Will be handled in logic to reuse Tue
  },
  {
    id: 'sat',
    dayName: 'Thứ 7',
    focus: 'Nghỉ',
    exercises: [],
  },
  {
    id: 'sun',
    dayName: 'Chủ Nhật',
    focus: 'Nghỉ',
    exercises: [],
  },
];

// Helper to fill in repeated days
export const getFullSchedule = () => {
  const schedule = [...weeklySchedule];
  // Fill Thursday with Monday's exercises
  const mon = schedule.find(d => d.id === 'mon');
  const thu = schedule.find(d => d.id === 'thu');
  if (mon && thu && thu.exercises.length === 0) {
    thu.exercises = [...mon.exercises];
  }

  // Fill Friday with Tuesday's exercises
  const tue = schedule.find(d => d.id === 'tue');
  const fri = schedule.find(d => d.id === 'fri');
  if (tue && fri && fri.exercises.length === 0) {
    fri.exercises = [...tue.exercises];
  }
  return schedule;
};
