import {
  Clapperboard,
  Clock5,
  Film,
  Flame,
  History,
  House,
  ListVideo,
  Music,
  Radio,
  Scissors,
  ShoppingBag,
  SquarePlay,
  ThumbsUp,
  TvMinimalPlay,
} from "lucide-react";

export const sidebarData = [
  {
    id: 1,
    sectionName: undefined,
    items: [
      {
        id: 11,
        itemName: "Home",
        navigateTo: "",
        icon: {
          filled: "",
          unfilled: <House size={20} strokeWidth={1.75} />,
        },
      },
      {
        id: 12,
        itemName: "Shorts",
        navigateTo: "",
        icon: {
          filled: "",
          unfilled: <Film size={20} strokeWidth={1.75} />,
        },
      },
      {
        id: 13,
        itemName: "Subscriptions",
        navigateTo: "",
        icon: {
          filled: "",
          unfilled: <TvMinimalPlay size={20} strokeWidth={1.75} />,
        },
      },
    ],
  },
  {
    id: 2,
    sectionName: "You",
    items: [
      {
        id: 21,
        itemName: "History",
        navigateTo: "",
        icon: {
          filled: "",
          unfilled: <History size={20} strokeWidth={1.75} />,
        },
      },
      {
        id: 22,
        itemName: "Playlist",
        navigateTo: "",
        icon: {
          filled: "",
          unfilled: <ListVideo size={20} strokeWidth={1.75} />,
        },
      },
      {
        id: 23,
        itemName: "Your videos",
        navigateTo: "",
        icon: {
          filled: "",
          unfilled: <SquarePlay size={20} strokeWidth={1.75} />,
        },
      },
      {
        id: 24,
        itemName: "Watch later",
        navigateTo: "",
        icon: {
          filled: "",
          unfilled: <Clock5 size={20} strokeWidth={1.75} />,
        },
      },
      {
        id: 25,
        itemName: "Liked videos",
        navigateTo: "",
        icon: {
          filled: "",
          unfilled: <ThumbsUp size={20} strokeWidth={1.75} />,
        },
      },
      {
        id: 26,
        itemName: "Your clips",
        navigateTo: "",
        icon: {
          filled: "",
          unfilled: <Scissors size={20} strokeWidth={1.75} />,
        },
      },
    ],
  },
  {
    id: 3,
    sectionName: "Explore",
    items: [
      {
        id: 31,
        itemName: "trending",
        navigateTo: "",
        icon: {
          filled: "",
          unfilled: <Flame size={20} strokeWidth={1.75} />,
        },
      },
      {
        id: 32,
        itemName: "Shopping",
        navigateTo: "",
        icon: {
          filled: "",
          unfilled: <ShoppingBag size={20} strokeWidth={1.75} />,
        },
      },
      {
        id: 33,
        itemName: "Music",
        navigateTo: "",
        icon: {
          filled: "",
          unfilled: <Music size={20} strokeWidth={1.75} />,
        },
      },
      {
        id: 34,
        itemName: "Films",
        navigateTo: "",
        icon: {
          filled: "",
          unfilled: <Clapperboard size={20} strokeWidth={1.75} />,
        },
      },
      {
        id: 35,
        itemName: "Live",
        navigateTo: "",
        icon: {
          filled: "",
          unfilled: <Radio size={20} strokeWidth={1.75} />,
        },
      },
    ],
  },
];
