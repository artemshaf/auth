import { ReactComponent as oclock } from "../../../assets/imgs/icons/oclock.svg";
import { ReactComponent as add } from "../../../assets/imgs/icons/add.svg";
import { ReactComponent as addCircle } from "../../../assets/imgs/icons/add-circle.svg";
import { ReactComponent as attachment } from "../../../assets/imgs/icons/attachment.svg";
import { ReactComponent as attachMoney } from "../../../assets/imgs/icons/attach-money.svg";
import { ReactComponent as bookMarks } from "../../../assets/imgs/icons/bookmarks.svg";
import { ReactComponent as business } from "../../../assets/imgs/icons/business.svg";
import { ReactComponent as calendarToday } from "../../../assets/imgs/icons/calendar-today.svg";
import { ReactComponent as checkCirlce } from "../../../assets/imgs/icons/check-circle.svg";
import { ReactComponent as code } from "../../../assets/imgs/icons/code.svg";
import { ReactComponent as dashboard } from "../../../assets/imgs/icons/dashboard.svg";
import { ReactComponent as dateRange } from "../../../assets/imgs/icons/date-range.svg";
import { ReactComponent as done } from "../../../assets/imgs/icons/done.svg";
import { ReactComponent as errorCircle } from "../../../assets/imgs/icons/error-circle.svg";
import { ReactComponent as feedback } from "../../../assets/imgs/icons/feedback.svg";
import { ReactComponent as folderShared } from "../../../assets/imgs/icons/folder-shared.svg";
import { ReactComponent as share } from "../../../assets/imgs/icons/share.svg";
import { ReactComponent as helpCircle } from "../../../assets/imgs/icons/help-circle.svg";
import { ReactComponent as history } from "../../../assets/imgs/icons/history.svg";
import { ReactComponent as like } from "../../../assets/imgs/icons/like.svg";
import { ReactComponent as notifications } from "../../../assets/imgs/icons/notifications.svg";
import { ReactComponent as phone } from "../../../assets/imgs/icons/phone.svg";
import { ReactComponent as refresh } from "../../../assets/imgs/icons/refresh.svg";
import { ReactComponent as rotateRight } from "../../../assets/imgs/icons/rotate-right.svg";
import { ReactComponent as search } from "../../../assets/imgs/icons/search.svg";
import { ReactComponent as settings } from "../../../assets/imgs/icons/settings.svg";
import { ReactComponent as tab } from "../../../assets/imgs/icons/tab.svg";
import { ReactComponent as tabUnselected } from "../../../assets/imgs/icons/tab-unselected.svg";
import { ReactComponent as timeline } from "../../../assets/imgs/icons/timeline.svg";
import { ReactComponent as translate } from "../../../assets/imgs/icons/translate.svg";
import { ReactComponent as trendingDown } from "../../../assets/imgs/icons/trending-down.svg";
import { ReactComponent as trendingFlat } from "../../../assets/imgs/icons/trending-flat.svg";
import { ReactComponent as trendingUp } from "../../../assets/imgs/icons/trending-up.svg";
import { ReactComponent as verified } from "../../../assets/imgs/icons/verified.svg";
import { ReactComponent as warning } from "../../../assets/imgs/icons/warning.svg";
import { ReactComponent as work } from "../../../assets/imgs/icons/work.svg";
import { ReactComponent as Logo } from "../../../assets/imgs/icons/Logo.svg";
import { ReactComponent as sort } from "../../../assets/imgs/icons/sort.svg";
import { ReactComponent as eye } from "../../../assets/imgs/icons/eye.svg";
import { ReactComponent as filterList } from "../../../assets/imgs/icons/filter-list.svg";
import { ReactComponent as flag } from "../../../assets/imgs/icons/flag.svg";
import { ReactComponent as group } from "../../../assets/imgs/icons/group.svg";
import { ReactComponent as person } from "../../../assets/imgs/icons/person.svg";
import { ReactComponent as more } from "../../../assets/imgs/icons/more.svg";
import { ReactComponent as unfold } from "../../../assets/imgs/icons/unfold.svg";
import { ReactComponent as gesture } from "../../../assets/imgs/icons/gesture.svg";
import { ReactComponent as arrowDown } from "../../../assets/imgs/icons/arrow-down.svg";
import { ReactComponent as arrowDrop } from "../../../assets/imgs/icons/arrow-drop.svg";

import { SVGAttributes } from "react";

export const icons = {
  filterList,
  flag,
  group,
  person,
  more,
  unfold,
  gesture,
  arrowDown,
  arrowDrop,
  eye,
  sort,
  Logo,
  share,
  like,
  notifications,
  phone,
  refresh,
  rotateRight,
  search,
  settings,
  tab,
  tabUnselected,
  timeline,
  translate,
  trendingDown,
  trendingFlat,
  trendingUp,
  verified,
  warning,
  work,
  oclock,
  add,
  addCircle,
  attachMoney,
  attachment,
  bookMarks,
  business,
  calendarToday,
  checkCirlce,
  code,
  dashboard,
  dateRange,
  done,
  errorCircle,
  feedback,
  folderShared,
  helpCircle,
  history,
};

export type IconNames = keyof typeof icons;

type IconAppearence = "rounded" | "filled" | "sharp" | "outlined" | "two-tone";

export interface IIconProps extends SVGAttributes<SVGSVGElement> {
  icon: IconNames;
  appearence?: IconAppearence;
}
