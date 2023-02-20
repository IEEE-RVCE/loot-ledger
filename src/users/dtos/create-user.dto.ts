import { Role, UserType } from 'src/common/types/common.types';

export type userParams = {
  email: string;
  name: string;
  phone: string;
  type: UserType;
  department: string;
  active: boolean;
  password: string;
};
