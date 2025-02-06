// types.ts
export interface Feature {
    title: string;
    content: string;
}

export interface Image {
    src: string;
    alt: string;
}


export interface Project {
    title: string;
    subtitle: string;
    desc: string;
    feat: {
        f1: Feature;
        f2: Feature;
        f3: Feature;
        f4: Feature;
    };
    images: {
        i1: Image,
    };
}

// This ensures TypeScript recognizes the full object
export type ProjectsData = Record<string, Project>;