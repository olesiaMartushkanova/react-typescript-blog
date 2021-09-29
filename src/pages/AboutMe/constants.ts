import {
  faDog,
  faHome,
  faKiwiBird,
  faLaptopCode,
  faMugHot,
  faRunning,
} from '@fortawesome/free-solid-svg-icons';
import { TextListItemType } from './components/TextList/components/TextListItem';

export const SOFT_SKILLS: Array<TextListItemType> = [
  { itemText: 'Team-player' },
  { itemText: 'Critical thinking' },
  { itemText: 'Solve challenges' },
  { itemText: 'Find solutions' },
];

export const TECH_SKILLS: Array<TextListItemType> = [
  { itemText: 'JavaScript / HTM, CSS/ React' },
  { itemText: 'Automation Testing' },
  { itemText: 'Experience in DevOps' },
  { itemText: 'Professional in googling' },
];

export const ABOUT_ME_TITLE = `Hello! I'm Olesia!`;

export const ABOUT_ME_ASIDE =
  'I am a Software Engineer based in a beautiful New Zealand';

export const RANDOM_FACTS: Array<TextListItemType> = [
  {
    itemText: 'Programming is my passion',
    icon: faLaptopCode,
  },
  { itemText: 'I grew up in Ukraine', icon: faHome },
  {
    itemText: 'New Zealand is my home now',
    icon: faKiwiBird,
  },
  { itemText: 'My mornings start with coffee', icon: faMugHot },
  { itemText: 'I love sport (especially running)', icon: faRunning },
  { itemText: 'My biggest dream is to have a dog', icon: faDog },
];
