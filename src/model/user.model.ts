export interface User {
    username?: string;
    email?: string;
    roles?: string[];
}

export interface Admin extends User {
    password: string;
}
