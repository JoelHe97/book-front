import { Book } from "../models/Books"
import { instance } from "./base.api"

const endpoint = "books/"
export const books = {
    getAll: function ({ page }: { page?: number }) {
        return instance.get(endpoint, {
            params: {
                page
            }
        })
    },
    getBook: function (bookId: string) {
        return instance.get(endpoint + bookId)
    },
    updateBook: function (data: Book) {
        return instance.put(`${endpoint}${data.id}/`, data)
    },
    createBook: function (data: Book): Promise<Book> {
        return instance.post(`${endpoint}`, data)
    },

}