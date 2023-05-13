export interface User {
  id: number;
  name: string;
}

export interface UserSession {
  token: string;
  expires: number;
  models: Array<Models>;
}

export interface Models {
  route: string;
  icon: string;
  label: string;
  permission: number;
}
