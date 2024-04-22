import { client } from '$lib/sanity';
import type { Project } from '$lib/types/types';


export interface Data {
    title: string,
    intro_txt: []
}

export async function load() {

    try {

        const resContent = await client.fetch(`*[_type == "project_overview"]`);
        const resProjects = await client.fetch(`*[_type == "project"]{
            name,
            slug,
            image_teaser,
            tags,
            type}`
        );

        return {
            content: resContent[0] as Data,
            projects: resProjects as Project[]
        }

    } catch (e) {
        console.log(e)
    }

}