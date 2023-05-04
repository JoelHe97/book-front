import { Button, TextField } from "@mui/material";
import { useForm, SubmitHandler } from "react-hook-form";
import { Book } from '../../models/Books';
import { useEffect, useState } from 'react';
import { books } from "../../api/books.api";


type Inputs = {
	title: string,
	author: string,
	publisher: string,
	year_publication: string,
	image_1: string,
	image_2: string,
	image_3: string,
};

export type ModalProps = {
	id: string | undefined
}
const Form: React.FC<ModalProps> = ({ id }) => {
	const onSubmit: SubmitHandler<Inputs> = (data) => {
		console.log(data)
		if (id) {
			books.updateBook(book)
		}
	}
	const [book, setBook] = useState<Book>({
		title: "",
		author: "",
		publisher: "",
		year_publication: "",
		image_1: "",
		image_2: "",
		image_3: "",
	});

	const { register, handleSubmit, watch, formState: { errors } } = useForm<Inputs>({
		defaultValues: book
	});
	useEffect(() => {
		if (id) {
			books.getBook(id).then(r => {
				setBook(r.data)
			}).catch(console.error)

		}
	}, [id])

	return (
		/* "handleSubmit" will validate your inputs before invoking "onSubmit" */
		<form onSubmit={handleSubmit(onSubmit)}>
			<div style={{ display: "grid", gridGap: "1em" }}>
				<TextField  {...register("title", { required: true, value: book.title })}
					id="outlined-password-input"
					label="Title"
					type="text"
				/>
				{errors.title && <span>This field is required</span>}
				{/* errors will return when field validation fails  */}

				<TextField  {...register("author", { required: true })}
					id="outlined-password-input"
					label="Author"
					type="text"
					value={book?.author}

				/>
				{errors.author && <span>This field is required</span>}

				<TextField  {...register("publisher", { required: true })}
					id="outlined-password-input"
					label="Publisher"
					type="text"
					value={book?.publisher}

				/>
				{errors.publisher && <span>This field is required</span>}

				<TextField  {...register("year_publication", { required: true })}
					id="outlined-password-input"
					label="Year publication"
					type="text"
					value={book?.year_publication}

				/>
				{errors.year_publication && <span>This field is required</span>}

				<TextField  {...register("image_1", { required: true })}
					id="outlined-password-input"
					label="Image 1"
					type="text"
					value={book?.image_1}

				/>
				{errors.image_1 && <span>This field is required</span>}
				<TextField  {...register("image_2", { required: true })}
					id="outlined-password-input"
					label="Image 2"
					type="text"
					value={book?.image_2}

				/>
				{errors.image_2 && <span>This field is required</span>}
				<TextField  {...register("image_3", { required: true })}
					id="outlined-password-input"
					label="Image 3"
					type="text"
					value={book?.image_3}

				/>
				{errors.image_3 && <span>This field is required</span>}

				<Button variant="outlined" type="submit">{id ? "Update" : "Create"}</Button>
			</div>
		</form>
	);
}


export default Form;
