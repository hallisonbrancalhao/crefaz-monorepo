export interface UserSession {
  token: string;
  expires: number;
  models: Models[];
}

export interface Models {
  route: string;
  icon: string;
  label: string;
  permission: number;
}
