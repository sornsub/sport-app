import {
  RxCheckCircled,
  RxRocket,
  RxAccessibility,
  RxHeart,
  RxSewingPin 
} from "react-icons/rx";

import landingPage1 from "../../../public/images/landingPage1.jpg";
import landingPage2 from "../../../public/images/landingPage2.jpg";
import landingPage3 from "../../../public/images/landingPage3.jpg";
import landingPage4 from "../../../public/images/landingPage4.jpg";
import landingPage5 from "../../../public/images/landingPage5.jpg";

export const ServiceData = [
  {
    icon: RxSewingPin,
    title: "Workout anywhere",
    content:
      "You can do your workout at home without any equipment,outside or at the gym.",
    backgroundImage: landingPage1,
  },
  {
    icon: RxCheckCircled,
    title: "Learn techniques",
    content: "Our workout programs are madeby professionals.",
    backgroundImage: landingPage2,
  },
  {
    icon: RxHeart,
    title: "Recovery office syndrome",
    content: "Excercise by your problem to make your healthty..",
    backgroundImage: landingPage3,
  },
  {
    icon: RxRocket,
    title: "Start right now",
    content:
      "Simple, flexible, built for you. Discover personal training, reimagined. This time, fitness revolves around you. Your schedule, your workouts, your coach..",
    backgroundImage: landingPage4,
  },
  {
    icon: RxAccessibility,
    title: "Community Get reward",
    content: "Clear community missions to receive rewards.",
    backgroundImage: landingPage5,
  },
];
