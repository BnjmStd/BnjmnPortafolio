import { defineCollection, z } from "astro:content";

const basics = defineCollection({
    schema: z.object({
        name: z.string(),
        label: z.string(),
        availableForWork: z.string(),
        image: z.string(),
        email: z.string(),
        phone: z.string(),
        url: z.string(),
        summary: z.string(),
        location: z.object({
            address: z.string(),
            postalCode: z.string(),
            city: z.string(),
            countryCode: z.string(),
            region: z.string(),
        }),
        profiles: z.array(
            z.object({
                network: z.string(),
                username: z.string(),
                url: z.string(),
            })
        ),
    }),
});

const work = defineCollection({
    schema: z.array(
        z.object({
            name: z.string(),
            position: z.string(),
            url: z.string(),
            startDate: z.string(),
            endDate: z.string().nullable(),
            summary: z.string(),
            highlights: z.array(z.string()),
        })
    ),
});

const volunteer = defineCollection({
    schema: z.array(
        z.object({
            organization: z.string(),
            position: z.string(),
            url: z.string(),
            startDate: z.string(),
            endDate: z.string(),
            summary: z.string(),
            highlights: z.array(z.string()),
        })
    ),
});

const education = defineCollection({
    schema: z.array(
        z.object({
            institution: z.string(),
            url: z.string(),
            area: z.string(),
            studyType: z.string(),
            startDate: z.string(),
            endDate: z.string(),
            score: z.string(),
            courses: z.array(z.string()),
        })
    ),
});

const skills = defineCollection({
    schema: z.array(
        z.object({
            name: z.string(),
            level: z.string(),
            keywords: z.array(z.string()),
            icon: z.string(),
        })
    ),
});

const languages = defineCollection({
    schema: z.array(
        z.object({
            language: z.string(),
            fluency: z.string(),
        })
    ),
});

const references = defineCollection({
    schema: z.array(
        z.object({
            name: z.string(),
            reference: z.string(),
        })
    ),
});

const projects = defineCollection({
    schema: z.array(
        z.object({
            name: z.string(),
            isActive: z.boolean(),
            description: z.string(),
            highlights: z.array(z.string()),
            url: z.string(),
        })
    ),
});

export const collections = { basics, work, volunteer, education, skills, languages, references, projects };
