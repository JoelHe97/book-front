import { createContext, useState, useEffect } from "react";
import { Book } from "../models/Books";
import { books } from "../api/books.api";
interface Props {
    children: React.ReactNode
}
interface ICrudContext {
    AllBooks: Book[],
    page: number,
    setPage: React.Dispatch<React.SetStateAction<number>>,
    count: number,
    setCount: React.Dispatch<React.SetStateAction<number>>,
    error: string,
}
const defaultState: ICrudContext = {
    AllBooks: [],
    page: 1,
    setPage: () => console.log("Modal Context"),
    count: 1,
    setCount: () => console.log("Modal Context"),
    error: "",
}

const CrudContext = createContext<ICrudContext>(defaultState);
const CrudProvider = ({ children }: Props) => {
    const [AllBooks, setAllBooks] = useState<Book[]>([])
    const [error, setError] = useState<string>("");
    const [count, setCount] = useState(1)
    const [page, setPage] = useState(1)
    useEffect(() => {
        books.getAll({ page }).then(r => {
            setCount(r.data.pages)
            setAllBooks(r.data.results)
        }).catch(e => {
            setError(e.message)
        })
    }, [page]);

    const data = {
        AllBooks,
        page,
        setPage,
        count,
        setCount,
        error

    };
    return (<CrudContext.Provider value={data}>{children}</CrudContext.Provider>);
};
export { CrudProvider }
export default CrudContext;
