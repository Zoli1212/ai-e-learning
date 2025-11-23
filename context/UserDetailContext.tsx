import { createContext, Dispatch, SetStateAction } from "react";
import { User } from '@/lib/generated/prisma/client';

interface UserDetailContextType {
    userDetail: User | undefined;
    setUserDetail: Dispatch<SetStateAction<User | undefined>>;
}

export const UserDetailContext = createContext<UserDetailContextType>({
    userDetail: undefined,
    setUserDetail: () => { }
});