export interface Project {
    name: string,
    slug: {
        current: string
    },
    type: 'client' | 'personal',
    link: string,
    tags: string[],
    image_teaser: {
        asset: {
            _ref: string
        }
    },
    image: {
        asset: {
            _ref: string
        }
    },
    description: [],
    frontend_tech: string[],
    backend_tech: string[],
    content: []
}