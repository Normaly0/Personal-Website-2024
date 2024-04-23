<script lang="ts">

    import type { Project } from "$lib/types/types";
    import { urlFor } from "$lib/sanity";

    export let project : Project;
    export let loadPriority = false;

</script>

<a href={`/projects/${project.slug.current}`} class="w-full aspect-[1/1] max-w-[450px] relative text-white no-underline p-6 flex flex-col md:max-w-none group invisible" data-project>

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

    <img 
        src={urlFor(project.image_teaser.asset._ref).width(600).height(600).url()} 
        alt="" 
        width={300} 
        height={300} 
        fetchpriority={loadPriority ? 'high' : 'low'} 
        loading={loadPriority ? 'eager' : 'lazy'}
        class="object-cover h-full w-full absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 -z-20" 
    />

    <div class="absolute -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2 w-full h-full bg-black/[.6] opacity-0 flex justify-center items-center group-hover:opacity-100 transition">
        <div>
            <p class="font-roboto text-3xl text-center text-orange">check</p>
            <p class="font-roboto text-3xl text-center text-orange">it</p>
            <p class="font-roboto text-3xl text-center text-orange">out</p>
            <img src="/arrow-top-right.svg" alt="" width={40} height={40} class="mx-auto mt-2" />
        </div>
    </div>

</a>