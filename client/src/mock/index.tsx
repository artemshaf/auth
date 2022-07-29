import Img from "../assets/imgs/cards/img1.png";
import Img2 from "../assets/imgs/cards/img2.png";
import Img3 from "../assets/imgs/cards/img3.png";
import Img4 from "../assets/imgs/cards/img4.png";
import Img5 from "../assets/imgs/cards/img5.png";
import Img6 from "../assets/imgs/cards/img6.png";
import Img7 from "../assets/imgs/cards/img7.png";
import Img8 from "../assets/imgs/avatars/user1.png";
import tesla from "../assets/imgs/company/tesla.svg";
import nike from "../assets/imgs/company/nike.svg";
import apple from "../assets/imgs/company/apple.svg";
import sony from "../assets/imgs/company/sony.svg";
import reebok from "../assets/imgs/company/reebok.svg";
import Icon from "../components/UI/Icon/Icon";
import CompanyAvatar from "../components/Plain/CompanyAvatar/CompanyAvatar";
import AvatarStack from "../components/Plain/AvatarStack/AvatarStack";
import { IProjectRow } from "../components/Bussiness/ProjectList/ProjectRow/ProjectRow.props";
import { string } from "joi";

export const dashboardCards = [
  {
    img: [Img, Img2, Img3, Img4, Img5, Img6, Img7],
    title: "Boston family home",
    description:
      "A beautiful townhouse in the heart of Miami’s downtown district. With 3 bedrooms and a heated pool.",
    metadata: [
      {
        icon: <Icon icon="business" />,
        text: "Boston",
      },
      {
        icon: <Icon icon="business" />,
        text: "Boston",
      },
      {
        icon: <Icon icon="business" />,
        text: "Boston",
      },
    ],
    id: 1,
  },
  {
    img: [Img, Img2, Img3, Img4, Img5, Img6, Img7],
    title: "Boston family home",
    description:
      "A beautiful townhouse in the heart of Miami’s downtown district. With 3 bedrooms and a heated pool.",
    metadata: [
      {
        icon: <Icon icon="business" />,
        text: "Boston",
      },
      {
        icon: <Icon icon="business" />,
        text: "Boston",
      },
      {
        icon: <Icon icon="business" />,
        text: "Boston",
      },
    ],
    id: 2,
  },
  {
    img: [Img, Img2, Img3, Img4, Img5, Img6, Img7],
    title: "Boston family home",
    description:
      "A beautiful townhouse in the heart of Miami’s downtown district. With 3 bedrooms and a heated pool.",
    metadata: [
      {
        icon: <Icon icon="business" />,
        text: "Boston",
      },
      {
        icon: <Icon icon="business" />,
        text: "Boston",
      },
      {
        icon: <Icon icon="business" />,
        text: "Boston",
      },
    ],
    id: 3,
  },
  {
    img: [Img, Img2, Img3, Img4, Img5, Img6, Img7],
    title: "Boston family home",
    description:
      "A beautiful townhouse in the heart of Miami’s downtown district. With 3 bedrooms and a heated pool.",
    metadata: [
      {
        icon: <Icon icon="business" />,
        text: "Boston",
      },
      {
        icon: <Icon icon="business" />,
        text: "Boston",
      },
      {
        icon: <Icon icon="business" />,
        text: "Boston",
      },
    ],
    id: 4,
  },
  {
    img: [Img, Img2, Img3, Img4, Img5, Img6, Img7],
    title: "Boston family home",
    description:
      "A beautiful townhouse in the heart of Miami’s downtown district. With 3 bedrooms and a heated pool.",
    metadata: [
      {
        icon: <Icon icon="business" />,
        text: "Boston",
      },
      {
        icon: <Icon icon="business" />,
        text: "Boston",
      },
      {
        icon: <Icon icon="business" />,
        text: "Boston",
      },
    ],
    id: 5,
  },
  {
    img: [Img, Img2, Img3, Img4, Img5, Img6, Img7],
    title: "Boston family home",
    description:
      "A beautiful townhouse in the heart of Miami’s downtown district. With 3 bedrooms and a heated pool.",
    metadata: [
      {
        icon: <Icon icon="business" />,
        text: "Boston",
      },
      {
        icon: <Icon icon="business" />,
        text: "Boston",
      },
      {
        icon: <Icon icon="business" />,
        text: "Boston",
      },
    ],
    id: 6,
  },
  {
    img: [Img, Img2, Img3, Img4, Img5, Img6, Img7],
    title: "Boston family home",
    description:
      "A beautiful townhouse in the heart of Miami’s downtown district. With 3 bedrooms and a heated pool.",
    metadata: [
      {
        icon: <Icon icon="business" />,
        text: "Boston",
      },
      {
        icon: <Icon icon="business" />,
        text: "Boston",
      },
      {
        icon: <Icon icon="business" />,
        text: "Boston",
      },
    ],
    id: 7,
  },
  {
    img: [Img, Img2, Img3, Img4, Img5, Img6, Img7],
    title: "Boston family home",
    description:
      "A beautiful townhouse in the heart of Miami’s downtown district. With 3 bedrooms and a heated pool.",
    metadata: [
      {
        icon: <Icon icon="business" />,
        text: "Boston",
      },
      {
        icon: <Icon icon="business" />,
        text: "Boston",
      },
      {
        icon: <Icon icon="business" />,
        text: "Boston",
      },
    ],
    id: 8,
  },
];

export const taskCards = [
  {
    img: Img6,
    title: "Wireframing exercise",
    date: "23 Dec, 2022",
    peoples: [
      {
        icon: <Icon icon="bookMarks" />,
      },
    ],
    id: 1,
  },
  {
    img: Img7,
    title: "Wireframing exercise",
    date: "23 Dec, 2022",
    peoples: [
      {
        icon: <Icon icon="bookMarks" />,
      },
    ],
    id: 2,
  },
  {
    img: Img8,
    title: "Wireframing exercise",
    date: "23 Dec, 2022",
    peoples: [
      {
        icon: <Icon icon="bookMarks" />,
      },
    ],
    id: 3,
  },
  {
    img: Img2,
    title: "Wireframing exercise",
    date: "23 Dec, 2022",
    peoples: [
      {
        icon: <Icon icon="bookMarks" />,
      },
    ],
    id: 4,
  },
  {
    img: Img4,
    title: "Wireframing exercise",
    date: "23 Dec, 2022",
    peoples: [
      {
        icon: <Icon icon="bookMarks" />,
      },
    ],
    id: 5,
  },
  {
    img: Img5,
    title: "Wireframing exercise",
    date: "23 Dec, 2022",
    peoples: [
      {
        icon: <Icon icon="bookMarks" />,
      },
    ],
    id: 6,
  },
  {
    img: Img6,
    title: "Wireframing exercise",
    date: "23 Dec, 2022",
    peoples: [
      {
        icon: <Icon icon="bookMarks" />,
      },
    ],
    id: 7,
  },
  {
    img: Img7,
    title: "Wireframing exercise",
    date: "23 Dec, 2022",
    peoples: [
      {
        icon: <Icon icon="bookMarks" />,
      },
    ],
    id: 8,
  },
  {
    img: Img8,
    title: "Wireframing exercise",
    date: "23 Dec, 2022",
    peoples: [
      {
        icon: <Icon icon="bookMarks" />,
      },
    ],
    id: 91,
  },
];

export const microCard = [
  {
    img: Img2,
    title: "Shoreditfasafsasfch Apt",
    date: "1mfasasfber 2022",
  },
  {
    img: Img3,
    title: "Shoredifasfasfastch Apt",
    date: "10 Decemfassfsafber 2022",
  },
  {
    img: Img4,
    title: "Shoredfasfsaasfitch Apt",
    date: "asafsember 2022",
  },
  {
    img: Img5,
    title: "Shoredifsafssfafsatch Apt",
    date: "10 December 2022",
  },
  {
    img: Img6,
    title: "Shore42214421421ditch Apt",
    date: "4214242421421422",
  },
];

export const userCard = {
  img: Img3,
  name: "Robert Whistable",
  position: "Product manager",
  metadata: [
    {
      title: "Projects",
      count: 24,
    },
    {
      title: "Tasks",
      count: 24,
    },
    {
      title: "Insights",
      count: 24,
    },
    {
      title: "Insights",
      count: 24,
    },
    {
      title: "Insights",
      count: 24,
    },
    {
      title: "Insights",
      count: 24,
    },
  ],
};

export const tableMock = [
  {
    name: "1t",
    status: "cancel",
    brand: <CompanyAvatar name="Tesla" avatar={tesla} />,
    peoples: <AvatarStack />,
    type: "build",
    date: "Wed 24 Dec",
    id: 1,
  },
  {
    name: "2",
    status: "review",
    brand: <CompanyAvatar name="Nike Athletic" avatar={nike} />,
    peoples: <AvatarStack />,
    type: "residential",
    date: "Wed 06 Nov",
    id: 2,
  },
  {
    name: "4",
    status: "cancel",
    brand: <CompanyAvatar name="Sony" avatar={sony} />,
    peoples: <AvatarStack />,
    date: "Wed 12 Dec",
    type: "build",
    id: 3,
  },
  {
    name: "Paris apartment blocks",
    status: "approved",
    brand: <CompanyAvatar name="Reebok" avatar={reebok} />,
    peoples: <AvatarStack />,
    type: "residential",
    date: "Wed 07 Dec",
    id: 4,
  },
  {
    name: "6",
    status: "review",
    brand: <CompanyAvatar name="Apple" avatar={apple} />,
    peoples: <AvatarStack />,
    type: "commercial",
    date: "Wed 04 Dec",
    id: 5,
  },
  {
    name: "7",
    status: "review",
    brand: <CompanyAvatar name="Tesla" avatar={tesla} />,
    peoples: <AvatarStack />,
    type: "build",
    date: "Wed 24 Dec",
    id: 6,
  },
  {
    name: "14",
    status: "review",
    brand: <CompanyAvatar name="Nike Athletic" avatar={nike} />,
    peoples: <AvatarStack />,
    type: "residential",
    date: "Wed 06 Nov",
    id: 7,
  },
  {
    name: "8",
    status: "review",
    brand: <CompanyAvatar name="Sony" avatar={sony} />,
    peoples: <AvatarStack />,
    date: "Wed 12 Dec",
    type: "build",
    id: 8,
  },
  {
    name: "12",
    status: "progress",
    brand: <CompanyAvatar name="Reebok" avatar={reebok} />,
    peoples: <AvatarStack />,
    type: "commercial",
    date: "Wed 07 Dec",
    id: 9,
  },
  {
    name: "9",
    status: "cancel",
    brand: <CompanyAvatar name="Apple" avatar={apple} />,
    peoples: <AvatarStack />,
    type: "commercial",
    date: "Wed 04 Dec",
    id: 10,
  },
] as IProjectRow[];

export interface IQuestionCard {
  icon?: string;
  title: string;
  description: string;
  to?: string;
}

export const questionCardsMock: IQuestionCard[] = [
  {
    icon: Img2,
    title: "Profile and settings",
    description: `Learn how to configure your profile, 
set up notificaions and customise.`,
    to: "/",
  },
  {
    icon: Img3,
    title: "Property listings",
    description: `How our listings work, how to post new
listings and how to respond to others.`,
    to: "/",
  },
  {
    icon: Img4,
    title: "Messaging",
    description: `How our listings work, how to post new
listings and how to respond to others.`,
    to: "/",
  },
  {
    icon: Img5,
    title: "Projects",
    description: `How our listings work, how to post new
listings and how to respond to others.`,
    to: "/",
  },
  {
    icon: Img6,
    title: "Integrations",
    description: `How to set up and manage your unique
integration environment.`,
    to: "/",
  },
  {
    icon: Img2,
    title: "Social media",
    description: `How to use social media in conjunction
with investly to maximise efficacy.`,
    to: "/",
  },
  {
    icon: Img4,
    title: "Invoices",
    description: `How to set up, manage, pay and send
invoices within your application.`,
    to: "/",
  },
  {
    icon: Img6,
    title: "Dashboard",
    description: `How to configure and personalise
the dashboard experience.`,
    to: "/",
  },
];

export const quickStartCards: IQuestionCard[] = [
  {
    title: "Post a property listing",
    description: `How to set up and manage your unique integration environment.`,
  },
  {
    title: "Post a property listing",
    description: `How to set up and manage your unique integration environment.`,
  },
  {
    title: "Post a property listing",
    description: `How to set up and manage your unique integration environment.`,
  },
  {
    title: "Post a property listing",
    description: `How to set up and manage your unique integration environment.`,
  },
  {
    title: "Post a property listing",
    description: `How to set up and manage your unique integration environment.`,
  },
  {
    title: "Post a property listing",
    description: `How to set up and manage your unique integration environment.`,
  },
  {
    title: "Post a property listing",
    description: `How to set up and manage your unique integration environment.`,
  },
  {
    title: "Post a property listing",
    description: `How to set up and manage your unique integration environment.`,
  },
];

export const monthNames: string[] = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
export const weekDayNames: string[] = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturdau",
  "Sunday",
];
