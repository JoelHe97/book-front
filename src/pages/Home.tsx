import { useContext, useEffect, useState } from "react"
import { books } from '../api/books.api';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Book } from "../models/Books";
import { Button } from "@mui/material";
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { Modal } from "../components/Modal";
import ModalContext from "../context/modalContext";
import CrudContext from "../context/crudContext";


const Home = () => {
    // const [AllBooks, setAllBooks] = useState<Book[]>([])
    // const [page, setPage] = useState(1)
    // const [count, setCount] = useState(1)
    const { setPage, page, AllBooks, count, error } = useContext(CrudContext)
    const { setOpenModal } = useContext(ModalContext)
    const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
        setPage(value);
    };

    // useEffect(() => {
    //     books.getAll({ page }).then(r => {
    //         setCount(r.data.pages)
    //         setAllBooks(r.data.results)
    //     }).catch(console.error)


    // }, [page])
    const [selectedBook, setSelectedBook] = useState<string | undefined>("");
    const handleEditBook = (book: Book) => {
        setSelectedBook(book.id);
        setOpenModal(true)
    };

    return (
        <>
            <div>Home</div>
            {error ? error : (<>
                <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 650 }} aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell>Title</TableCell>
                                <TableCell align="right">Author</TableCell>
                                <TableCell align="right">Publisher</TableCell>
                                <TableCell align="right">Year publication</TableCell>
                                <TableCell align="right">Rating</TableCell>
                                <TableCell align="right">Actions</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {AllBooks ? AllBooks.map(book => {
                                return (<TableRow
                                    key={book.id}
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >
                                    <TableCell component="th" scope="row">
                                        {book.title}
                                    </TableCell>
                                    <TableCell align="right">{book.author}</TableCell>
                                    <TableCell align="right">{book.publisher}</TableCell>
                                    <TableCell align="right">{book.year_publication}</TableCell>
                                    <TableCell align="right">

                                    </TableCell>
                                    <TableCell align="right">
                                        <Button onClick={() => handleEditBook(book)}>Editar</Button>
                                        <Button>Eliminar</Button>
                                    </TableCell>
                                </TableRow>
                                )


                            }) : ""}

                        </TableBody>
                    </Table>
                </TableContainer>
                <Modal id={selectedBook}></Modal>

                <Stack spacing={2}>
                    <Typography>Page: {page}</Typography>
                    <Pagination count={count} page={page} onChange={handleChange} />
                </Stack>

            </>)}

        </>
    )
}

export default Home