export interface Book {
    id?: string
    ratings?: Rating[]
    title: string
    author: string
    year_publication: string
    publisher: string
    image_1: string
    image_2: string
    image_3: string
}

export interface Rating {
    id: number
    rating: number
    user: string
    book: string
}
