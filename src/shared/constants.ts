import { User } from '../model/user.model';

export const ANONYMOUS_USER: User = {
    email: undefined,
    roles: []
};

export enum UserRoles {
    Admin = 'ADMIN'
}

