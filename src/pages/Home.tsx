import { useEffect, useState } from "react"
import { books } from "../api/books.api"
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

const Home = () => {
    const [AllBooks, setAllBooks] = useState<Book[]>([])
    const [page, setPage] = useState(1)
    const [count, setCount] = useState(1)
    const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
        setPage(value);
    };

    useEffect(() => {
        books.getAll({ page }).then(r => {
            setCount(r.data.pages)
            setAllBooks(r.data.results)
        }).catch(console.error)


    }, [page])

    return (
        <>
            <div>Home</div>
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
                        {AllBooks ? AllBooks.map(row => {
                            return (<TableRow
                                key={row.id}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">
                                    {row.title}
                                </TableCell>
                                <TableCell align="right">{row.author}</TableCell>
                                <TableCell align="right">{row.publisher}</TableCell>
                                <TableCell align="right">{row.year_publication}</TableCell>
                                <TableCell align="right">

                                </TableCell>
                                <TableCell align="right">
                                    <Button>Editar</Button>
                                    <Button>Eliminar</Button>
                                </TableCell>
                            </TableRow>

                            )


                        }) : ""}

                    </TableBody>
                </Table>
            </TableContainer>
            <Stack spacing={2}>
                <Typography>Page: {page}</Typography>
                <Pagination count={count} page={page} onChange={handleChange} />
            </Stack>
        </>
    )
}

export default Home