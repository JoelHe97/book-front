import { instance } from "./base.api"

const endpoint = "books/"
export const books = {
    getAll: function ({ page }: { page?: number }) {
        return instance.get(endpoint, {
            params: {
                page
            }
        })
    }
}