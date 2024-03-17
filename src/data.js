import exercise from "./assets/icon-exercise.svg";
import play from "./assets/icon-play.svg";
import selfcare from "./assets/icon-self-care.svg";
import social from "./assets/icon-social.svg";
import work from "./assets/icon-work.svg";
import study from "./assets/icon-study.svg";

export const data = [
  {
    id: 1,
    title: "Work",
    image: work,
    color: "bg-[#ff8b64]",
    timeframes: {
      daily: {
        current: 5,
        previous: 7,
      },
      weekly: {
        current: 32,
        previous: 36,
      },
      monthly: {
        current: 103,
        previous: 128,
      },
    },
  },
  {
    id: 2,
    title: "Play",
    image: play,
    color: "bg-[#56c2e6]",
    timeframes: {
      daily: {
        current: 1,
        previous: 2,
      },
      weekly: {
        current: 10,
        previous: 8,
      },
      monthly: {
        current: 23,
        previous: 29,
      },
    },
  },
  {
    id: 3,
    title: "Study",
    image: study,
    color: "bg-[#fe5f7d]",
    timeframes: {
      daily: {
        current: 0,
        previous: 1,
      },
      weekly: {
        current: 4,
        previous: 7,
      },
      monthly: {
        current: 13,
        previous: 19,
      },
    },
  },
  {
    id: 4,
    title: "Exercise",
    image: exercise,
    color: "bg-[#4bcf83]",
    timeframes: {
      daily: {
        current: 1,
        previous: 1,
      },
      weekly: {
        current: 4,
        previous: 5,
      },
      monthly: {
        current: 11,
        previous: 18,
      },
    },
  },
  {
    id: 5,
    title: "Social",
    image: social,
    color: "bg-[#7235d1]",
    timeframes: {
      daily: {
        current: 1,
        previous: 3,
      },
      weekly: {
        current: 5,
        previous: 10,
      },
      monthly: {
        current: 21,
        previous: 23,
      },
    },
  },
  {
    id: 6,
    title: "Self Care",
    image: selfcare,
    color: "bg-[#f1c75b]",
    timeframes: {
      daily: {
        current: 0,
        previous: 1,
      },
      weekly: {
        current: 2,
        previous: 2,
      },
      monthly: {
        current: 7,
        previous: 11,
      },
    },
  },
];
