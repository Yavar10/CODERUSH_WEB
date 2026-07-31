export interface TimelineEvent {
  time: string;
  title: string;
}

export interface TimelineDay {
  day: string;
  events: TimelineEvent[];
}

export const timelineData: TimelineDay[] = [
  {
    day: "21 August 2026",
    events: [
      { time: "10:00 AM", title: "Registration" },
      { time: "12:00 PM", title: "Inaugural Ceremony" },
      { time: "1:00 PM – 2:00 PM", title: "Lunch" },
      { time: "2:00 PM – 5:00 PM", title: "Relay Race" },
      { time: "6:00 PM – 8:00 PM", title: "Elimination (3v3) – Round 1 & 2" },
      { time: "8:00 PM – 10:00 PM", title: "Dinner" },
      { time: "10:00 PM – 12:00 AM", title: "Elimination (3v3) – Round 3 & 4" },
    ],
  },
  {
    day: "22 August 2026",
    events: [
      { time: "12:00 AM – 2:00 AM", title: "Jamming Session" },
      { time: "7:00 AM – 8:00 AM", title: "Breakfast" },
      { time: "9:00 AM – 12:00 PM", title: "Javelin" },
      { time: "12:00 PM – 2:00 PM", title: "Lunch" },
      { time: "2:00 PM – 4:00 PM", title: "Speaker Session & Elimination (3v1)" },
      { time: "4:00 PM – 5:00 PM", title: "Closing Ceremony + Felicitation" },
    ],
  },
];
