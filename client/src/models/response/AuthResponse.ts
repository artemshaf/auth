import {IUser} from "../dtos/IUser";

export interface AuthResponse {
    accessToken: string;
    refreshToken: string;
    user: IUser;
}
