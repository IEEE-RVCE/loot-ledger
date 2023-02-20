import { Role } from '../types/common.types';

export interface ActiveUserData {
  id: string;
  email: string;
  tokenId: string;
  role: Role;
}
