"use client";
import React, { useEffect, useState } from 'react'
import { ThemeProvider as NextThemesProvider, useTheme } from "next-themes"
import { useUser } from '@clerk/nextjs';
import { UserDetailContext } from '@/context/UserDetailContext';
import { createNewUser } from '../actions/user';
import Header from './_components/Header';
import { User } from '@/lib/generated/prisma';

function Provider({
    children,
    ...props
}: React.ComponentProps<typeof NextThemesProvider>) {

    const { user } = useUser();
    const [userDetail, setUserDetail] = useState<User | undefined>();

    useEffect(() => {
        const initUser = async () => {
            if (user?.id) {
                try {
                    const result = await createNewUser(user.id);
                    console.log(result);
                    setUserDetail(result);
                } catch (error) {
                    console.error('Failed to create user:', error);
                }
            }
        };

        initUser();
    }, [user])

    return (
        <NextThemesProvider
            {...props}>
            <UserDetailContext.Provider value={{ userDetail, setUserDetail }}>
                {/* Header / Navbar */}
                <div className='flex flex-col items-center'>
                    <Header />
                </div>
                {children}

            </UserDetailContext.Provider>
        </NextThemesProvider>
    )
}

export default Provider