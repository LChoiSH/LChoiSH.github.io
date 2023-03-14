export type ProjectTag = 'FrontEnd' | 'Flutter' | 'Application' | 'React' | 'C++' | 'Team' | 'Google Analytics' | string;

export interface Project {
    name: string,
    summary: string,
    thumbnailSrc?: string,
    date: string,
    tag: ProjectTag[],
    detail: ProjectDetail[]
}

export interface ProjectDetail {
    title: string,
    info: string,
    imageSrc: string
}