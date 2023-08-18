export type Client =
  typeof import("../../public/data-sources/clients.json")["data"][number];
export type History =
  typeof import("../../public/data-sources/history.json")["data"][number];

export type MenuItem = {
  label?: string;
  to?: string;
  route?: string;
  href?: string;
  target?: string;
  icon?: string;
  color?: ColorVariant;
  menu?: MenuItem[];

  isCurrentUser?: boolean;
  isDesktopNoLabel?: boolean;
  isDivider?: boolean;
  isLogout?: boolean;
  isToggleLightDark?: boolean;
};
