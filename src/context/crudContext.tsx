import { createContext, useState, useEffect, useContext } from "react";
import { Book } from "../models/Books";
import { books } from "../api/books.api";
import ModalContext from "./modalContext";
interface Props {
    children: React.ReactNode
}
const defaultData = {
    title: "",
    author: "",
    publisher: "",
    year_publication: "",
    image_1: "",
    image_2: "",
    image_3: "",
};

interface ICrudContext {
    AllBooks: Book[],
    page: number,
    setPage: React.Dispatch<React.SetStateAction<number>>,
    count: number,
    setCount: React.Dispatch<React.SetStateAction<number>>,
    error: string,
    setSelectedBook: React.Dispatch<React.SetStateAction<Book | null>>,
    selectedBook: Book | null,
    updatedData: (data: Book) => void,
    createData: (data: Book) => void,
}
const defaultState: ICrudContext = {
    AllBooks: [],
    page: 1,
    setPage: () => console.log("Modal Context"),
    count: 1,
    setCount: () => console.log("Modal Context"),
    error: "",
    setSelectedBook: () => console.log("Modal Context"),
    selectedBook: defaultData,
    updatedData: () => console.log("Modal Context"),
    createData: () => console.log("Modal Context")
}

const CrudContext = createContext<ICrudContext>(defaultState);
const CrudProvider = ({ children }: Props) => {
    const [AllBooks, setAllBooks] = useState<Book[]>([])
    const [error, setError] = useState<string>("");
    const [count, setCount] = useState(1)
    const [selectedBook, setSelectedBook] = useState<Book | null>(defaultData);
    const [page, setPage] = useState(1)
    const { setOpenModal } = useContext(ModalContext)
    useEffect(() => {
        books.getAll({ page }).then(r => {
            setCount(r.data.pages)
            setAllBooks(r.data.results)
        }).catch(e => {
            setError(e.message)
        })
    }, [page]);
    const updatedData = (data: Book) => {
        books.updateBook(data).then((res) => {
            const newBook = AllBooks.map((el) => (el.id === data.id ? data : el));
            setAllBooks(newBook);
            setOpenModal(false)
        }).catch(e => {
            setError(e.message)
        })

    };
    const createData = (data: Book) => {
        books.createBook(data).then((res) => {
            setAllBooks([...AllBooks, res]);
            setOpenModal(false)
        }).catch(e => {
            setError(e.message)
        })

    };
    const data = {
        AllBooks,
        page,
        setPage,
        count,
        setCount,
        error,
        updatedData,
        selectedBook,
        setSelectedBook,
        createData
    };
    return (<CrudContext.Provider value={data}>{children}</CrudContext.Provider>);
};
export { CrudProvider }
export default CrudContext;
