export type Client = {
  id: number;
  avatar: string;
  login: string;
  name: string;
  company: string;
  city: string;
  progress: number;
  created: string;
  created_mm_dd_yyyy: string;
};

export type Transaction = {
  amount: number;
  account: string;
  name: string;
  date: string;
  type: "deposit" | "payment" | "invoice" | "withdrawal";
  business: string;
};

export type MenuItem = {
  label?: string;
  to?: string;
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
