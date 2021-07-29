import {
  faDog,
  faFlag,
  faHome,
  faKiwiBird,
  faLaptopCode,
  faMugHot,
  faRunning,
} from '@fortawesome/free-solid-svg-icons';
import { ListItemType } from '../../components/List/components/ListItem';

export const SOFT_SKILLS: Array<ListItemType> = [
  { itemText: 'Awesome team-player' },
  { itemText: 'Have critical thinking' },
  { itemText: 'Solve challenges' },
  { itemText: 'Always look for solutions' },
];

export const TECH_SKILLS: Array<ListItemType> = [
  { itemText: 'Automation Testing' },
  { itemText: 'JavaScript/ Typescript' },
  { itemText: 'Experience in DevOps' },
  { itemText: 'Front-end development' },
];

export const ABOUT_ME_TITLE = `Hello! I'm Olesia!`;

export const ABOUT_ME_ASIDE =
  'I am a Software Engineer based in a beautiful New Zealand';

export const ABOUT_ME_TEXT = `I had to describe myself I would say: "I love programming. I care a lot about what I do (because I love it!). I aim to write clean code, not just working code. I am not perfect and I don't know everything. But I always
work hard to achieve the best results and I am not scared of challenges. 
My main life motto is to grow
and improve every day."`;

export const RANDOM_FACTS: Array<ListItemType> = [
  {
    itemText: 'I enjoy coding and happy to work extra hours',
    icon: faLaptopCode,
  },
  { itemText: `I'm originally from Ukraine`, icon: faHome },
  { itemText: 'I consider New Zealand my home', icon: faKiwiBird },
  { itemText: 'I love sport', icon: faRunning },
  { itemText: 'I need coffee, every day and a lot', icon: faMugHot },
  { itemText: 'My biggest dream is to have a dog', icon: faDog },
];
