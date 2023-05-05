import { Button, TextField } from "@mui/material";
import { useForm, SubmitHandler } from "react-hook-form";
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
		if (id) {
			books.updateBook(data)
		}
	}


	const { register, handleSubmit, reset, formState: { errors } } = useForm<Inputs>();
	useEffect(() => {
		if (id) {
			books.getBook(id).then(r => {
				reset(r.data)
			}).catch(console.error)

		}
	}, [reset, id])

	return (
		/* "handleSubmit" will validate your inputs before invoking "onSubmit" */
		<form onSubmit={handleSubmit(onSubmit)}>
			<div style={{ display: "grid", gridGap: "1em" }}>
				<TextField  {...register("title", { required: true })}
					id="outlined-password-input"
					label="Title"
					defaultValue={id ? "..." : ""}
					type="text"

				/>
				{errors.title && <span>This field is required</span>}
				{/* errors will return when field validation fails  */}

				<TextField  {...register("author", { required: true })}
					id="outlined-password-input"
					label="Author"
					defaultValue={id ? "..." : ""}
					type="text"

				/>
				{errors.author && <span>This field is required</span>}

				<TextField  {...register("publisher", { required: true })}
					id="outlined-password-input"
					label="Publisher"
					defaultValue={id ? "..." : ""}
					type="text"

				/>
				{errors.publisher && <span>This field is required</span>}

				<TextField  {...register("year_publication", { required: true })}
					id="outlined-password-input"
					label="Year publication"
					defaultValue={id ? "..." : ""}
					type="text"

				/>
				{errors.year_publication && <span>This field is required</span>}

				<TextField  {...register("image_1", { required: true })}
					id="outlined-password-input"
					label="Image 1"
					defaultValue={id ? "..." : ""}
					type="text"

				/>
				{errors.image_1 && <span>This field is required</span>}
				<TextField  {...register("image_2", { required: true })}
					id="outlined-password-input"
					label="Image 2"
					defaultValue={id ? "..." : ""}
					type="text"

				/>
				{errors.image_2 && <span>This field is required</span>}
				<TextField  {...register("image_3", { required: true })}
					id="outlined-password-input"
					label="Image 3"
					defaultValue={id ? "..." : ""}
					type="text"

				/>
				{errors.image_3 && <span>This field is required</span>}

				<Button variant="outlined" type="submit">{id ? "Update" : "Create"}</Button>
			</div>
		</form>
	);
}


export default Form;
