<script lang="ts">

    export let href: string;
    export let additionalStyles : string = '';
    export let newTab : boolean = false;

</script>

<a href={href} class={`py-1 px-3 bg-orange inline-block text-white no-underline font-roboto md:text-lg ${additionalStyles}`} target={newTab ? '__blank' : ''} data-txt> 
    <slot />
</a>