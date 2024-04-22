import { error } from '@sveltejs/kit';
import { client } from '$lib/sanity';
import type { Project } from '$lib/types/types';

export async function load({ params }) {

    const res = await client.fetch(`*[_type == "project" && slug.current == "${params.slug}"]`);

    if (res.length === 0) {
        error(404, {
            message: `Project not found`
        });
    }

    return {
        props: res[0] as Project
    }

}

export const prerender = true;