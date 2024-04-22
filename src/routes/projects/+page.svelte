<script lang="ts">

    import { PortableText } from '@portabletext/svelte';
    
    import type { Project } from "$lib/types/types";
    import type { Data } from "./+page.server";
    
    import { urlFor } from '$lib/sanity'; 
    import TextContent from "$lib/components/TextContent.svelte";

    export let data : { content: Data, projects: Project[] };

    const clientProjects = data.projects.filter(project => project.type === 'client');
    const personalProjects = data.projects.filter(project => project.type === 'personal');

</script>

<svelte:head>

    <title>Project Portfolio</title>
    <meta name="description" content="A collection of my work, both client and personal projects." />

</svelte:head>

<main>

    <section>

        <h1 class="mb-5">
            {data.content.title}
        </h1>

        <TextContent>
            <div>
                <PortableText value={data.content.intro_txt} components={{}} />
            </div>
        </TextContent>

    </section>

    <section>

        <h2 class="flex mb-5 md:mb-8">
            <span>Client</span>
            <span class="mt-5 ml-2 text-orange">work</span>
        </h2>

        <div class="grid grid-cols-1 gap-3 justify-items-center md:grid-cols-2 md:gap-5 lg:grid-cols-3">

            {#each clientProjects as project}

                <a href={`/projects/${project.slug.current}`} class="w-full aspect-[1/1] max-w-[450px] relative text-white no-underline p-6 flex flex-col md:max-w-none group">

                    <h3 class="mt-auto mb-2">
                        {project.name}
                    </h3>

                    <div class="flex gap-3">
                        {#each project.tags as tag}
                            <p class="border-orange border-2 py-1 px-2 bg-black/[.3]">
                                {tag}
                            </p>
                        {/each}
                    </div>

                    <img src={urlFor(project.image_teaser.asset._ref).width(600).height(600).url()} alt="" width={300} height={300} class="object-cover h-full w-full absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 -z-20" />
                
                    <div class="absolute -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2 w-full h-full bg-black/[.6] opacity-0 flex justify-center items-center group-hover:opacity-100 transition">
                        <div>
                            <p class="font-roboto text-3xl text-center text-orange">check</p>
                            <p class="font-roboto text-3xl text-center text-orange">it</p>
                            <p class="font-roboto text-3xl text-center text-orange">out</p>
                            <img src="/arrow-top-right.svg" alt="" width={40} height={40} class="mx-auto mt-2" />
                        </div>
                    </div>

                </a>

            {/each}

        </div>

    </section>

    <section>

        <h2 class="flex mb-5 md:mb-8">
            <span>Personal</span>
            <span class="mt-5 ml-2 text-orange">projects</span>
        </h2>

        <div class="grid grid-cols-1 gap-3 justify-items-center md:grid-cols-2 md:gap-5 lg:grid-cols-3">

            {#each personalProjects as project}

            <a href={`/projects/${project.slug.current}`} class="w-full aspect-[1/1] max-w-[450px] relative text-white no-underline p-6 flex flex-col md:max-w-none group">

                <h3 class="mt-auto mb-2">
                    {project.name}
                </h3>

                <div class="flex gap-3">
                    {#each project.tags as tag}
                        <p class="border-orange border-2 py-1 px-2 bg-black/[.3]">
                            {tag}
                        </p>
                    {/each}
                </div>

                <img src={urlFor(project.image_teaser.asset._ref).width(600).height(600).url()} alt="" width={300} height={300} class="object-cover h-full w-full absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 -z-20" />
            
                <div class="absolute -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2 w-full h-full bg-black/[.6] opacity-0 flex justify-center items-center group-hover:opacity-100 transition">
                    <div>
                        <p class="font-roboto text-3xl text-center text-orange">check</p>
                        <p class="font-roboto text-3xl text-center text-orange">it</p>
                        <p class="font-roboto text-3xl text-center text-orange">out</p>
                        <img src="/arrow-top-right.svg" alt="" width={40} height={40} class="mx-auto mt-2" />
                    </div>
                </div>

            </a>

        {/each}

        </div>

    </section>

</main>