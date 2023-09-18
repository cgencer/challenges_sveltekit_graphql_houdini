export interface Users {
  id: number;
  userName: string;
  firstName?: string;
  lastName?: string;
  email: string;
  password: string;
  birthday?: Date;
  wallet?: string;
  createdAt: Date;
  updatedAt: Date;
  bgg_id?: string;
  bga_id?: string;
  avatar?: string;
}