<script lang="ts">

    import { onMount } from 'svelte';

    import { PortableText } from '@portabletext/svelte';
    import { gsap } from "gsap";

    import type { Project } from "$lib/types/types";
    import {urlFor} from "$lib/sanity";

    import SectionTitle from '$lib/components/SectionTitle.svelte';
    import TextContent from '$lib/components/TextContent.svelte';
    import CTALink from '$lib/components/CTALink.svelte';

    export let data : { props: Project };

    //Animations

    onMount(() => {
        
        gsap.fromTo('main', {x: -35}, {
            x: 0,
            autoAlpha: 1,
        })

    })

</script>

<svelte:head>

    <title>Project Portfolio - {data.props.name}</title>
    <meta name="description" content="A collection of my work, both client and personal projects." />

</svelte:head>

<main class="invisible">

    <section>

        <h1 class="mb-2 md:mb-8">
            {data.props.name}
        </h1>

        <div class="relative w-full h-[200px] mb-7 md:mb-10 md:h-[350px] lg:h-[400px]  xl:h-[450px]">
            <img 
                src={urlFor(data.props.image.asset._ref).url()} 
                alt={data.props.name} 
                width="300" 
                height="175" 
                fetchpriority="high"
                loading="eager"
                class="w-full h-full object-cover"
            />
        </div>

        <TextContent>
            <PortableText value={data.props.description} components={{}} />
        </TextContent>

        <CTALink href={data.props.link} additionalStyles={'mt-5 md:mt-8'} newTab={true}>
            View project
        </CTALink>

    </section>

    <section>

        <SectionTitle txt_1="Tech" txt_2="stack" />

        <div class="flex flex-col gap-5 items-center justify-center md:flex-row md:gap-8">

            <div class="w-full self-stretch max-w-[350px] py-4 px-10 border-orange border-2 md:py-8 md:px-14 md:max-w-[400px]">
                <h3 class="mb-4 text-center">Front-end</h3>
                <ol>
                    {#if !data.props.frontend_tech }
                        <li>
                            No backend tech used
                        </li>
                    {:else }
                        {#each data.props.frontend_tech as el}
                            <li>
                                {el}
                            </li>
                        {/each}
                    {/if}
                </ol>
            </div>

            <div class="w-full self-stretch max-w-[350px] py-4 px-10 border-orange border-2 md:py-8 md:px-14 md:max-w-[400px]">
                <h3 class="mb-4 text-center">Backend-end</h3>
                <ol>
                    {#if !data.props.backend_tech}
                        <li>
                            No backend tech used
                        </li>
                    {:else }
                        {#each data.props.backend_tech as el}
                            <li>
                                {el}
                            </li>
                        {/each}
                    {/if}
                </ol>
            </div>

        </div>

    </section>

    <section>

        <TextContent>
            <PortableText value={data.props.content} components={{}} />
        </TextContent>

    </section>

    <CTALink href="/projects" additionalStyles={'mt-5 md:mt-8'}>
        Back to projects
    </CTALink>

</main>