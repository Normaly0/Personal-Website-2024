import { createClient } from "@sanity/client";
import imageUrlBuilder from '@sanity/image-url'

export const client = createClient({
    projectId: "4flsuu73",
    dataset: "production",
    apiVersion: "2024-04-18",
    useCdn: false
});

const builder = imageUrlBuilder(client);

export function urlFor(source : string) {
    return builder.image(source)
}