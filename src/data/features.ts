export type Feature = {
  id: number;
  title: string;
  body: string;
  image: string;
  points: string[];
};

export const features: Feature[] = [
  {
    id: 1,
    title: "24x7 Care Team",
    body: "Get instant help from our care team any time of the day with just a tap.",
    image: "/feature1.png",
    points: [
      "Instant help from care team anytime",
      "Available 24/7 with one tap",
      "No waiting, connect immediately",
      "Care that adapts to your needs",
    ],
  },
  {
    id: 2,
    title: "Smart Reminders",
    body: "Never miss a medication or appointment again with intelligent reminders.",
    image: "/feature2.png",
    points: [
      "Custom medication schedules",
      "Doctor appointment alerts",
      "Daily routine nudges",
      "Easy to manage notifications",
    ],
  },
  {
    id: 3,
    title: "Vitals Tracking",
    body: "Track your vitals with clean charts and export them for your doctor.",
    image: "/feature3.png",
    points: [
      "Track blood pressure & sugar",
      "View clean interactive charts",
      "Export reports for doctors",
      "History stored securely",
    ],
  },
  {
    id: 4,
    title: "Family Sharing",
    body: "Share updates securely with your family and caregivers in one place.",
    image: "/feature4.png",
    points: [
      "Invite family & caregivers",
      "Share vitals and updates",
      "Secure & private channels",
      "Collaborative care in one app",
    ],
  },
  {
    id: 5,
    title: "Privacy First",
    body: "Your health data is encrypted and stored securely. You control access.",
    image: "/feature5.png",
    points: [
      "End-to-end encryption",
      "Control who sees your data",
      "Compliant with regulations",
      "Your privacy is the priority",
    ],
  },
];
