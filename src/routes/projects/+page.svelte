<script lang="ts">

    import { onMount } from 'svelte';

    import { PortableText } from '@portabletext/svelte';
    import { gsap } from "gsap";
    import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
    
    import type { Project } from "$lib/types/types";
    import type { Data } from "./+page.server";
    
    import TextContent from "$lib/components/TextContent.svelte";
    import ProjectCard from '$lib/components/ProjectCard.svelte';

    export let data : { content: Data, projects: Project[] };

    const clientProjects = data.projects.filter(project => project.type === 'client');
    const personalProjects = data.projects.filter(project => project.type === 'personal');


    //Animations

    gsap.registerPlugin(ScrollTrigger);

    onMount(() => {
        
        ScrollTrigger.batch("[data-txt]", {
            start: "top 90%",
            onEnter: batch => {
                gsap.fromTo(batch, {autoAlpha: 0, x: -50}, {
                    autoAlpha: 1,
                    x: 0,
                    stagger: 0
                })
            }
        })

        ScrollTrigger.batch("[data-project]", {
            start: "top 90%",
            onEnter: batch => {
                gsap.to(batch, {
                    autoAlpha: 1,
                    stagger: .3
                })
            }
        })

    })

</script>

<svelte:head>

    <title>Project Portfolio</title>
    <meta name="description" content="A collection of my work, both client and personal projects." />

</svelte:head>

<main id="main">

    <section>

        <h1 class="mb-5" data-txt>
            {data.content.title}
        </h1>

        <TextContent>
            <div data-txt>
                <PortableText value={data.content.intro_txt} components={{}} />
            </div>
        </TextContent>

    </section>

    <section>

        <h2 class="flex mb-5 md:mb-8" data-txt>
            <span>Client</span>
            <span class="mt-5 ml-2 text-orange">work</span>
        </h2>

        <div class="grid grid-cols-1 gap-3 justify-items-center md:grid-cols-2 md:gap-5 lg:grid-cols-3">

            {#each clientProjects as project}

                <ProjectCard project={project} />

            {/each}

        </div>

    </section>

    <section>

        <h2 class="flex mb-5 md:mb-8" data-txt>
            <span>Personal</span>
            <span class="mt-5 ml-2 text-orange">projects</span>
        </h2>

        <div class="grid grid-cols-1 gap-3 justify-items-center md:grid-cols-2 md:gap-5 lg:grid-cols-3">

            {#each personalProjects as project}

                <ProjectCard project={project} />

            {/each}

        </div>

    </section>

</main>

<style>

    #main [data-txt] {
        opacity: 0;
    }

</style>