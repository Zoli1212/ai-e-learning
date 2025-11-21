'use server';

import { prisma } from '@/lib/prisma';

export async function createNewUser(clerkId: string) {
    try {
        const user = await prisma.user.upsert({
            where: { clerkId },
            update: {},
            create: { clerkId },
        });

        return user;
    } catch (error) {
        console.error('Error creating user:', error);
        throw error;
    }
}
