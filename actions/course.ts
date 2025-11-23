"use server";

import prisma from "@/lib/prisma";

export async function getCourses() {
    try {
        const courses = await prisma.course.findMany({
            orderBy: {
                createdAt: 'desc'
            }
        });

        return courses;
    } catch (error) {
        console.error("Error fetching courses:", error);
        return [];
    }
}
