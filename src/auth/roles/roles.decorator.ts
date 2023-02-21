import { SetMetadata } from '@nestjs/common';
import { Role } from 'src/common/types/common.types';

export const Roles = (...args: Role[]) => SetMetadata('roles', args);
