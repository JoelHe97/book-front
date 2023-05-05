import { Button, TextField } from "@mui/material";
import { useForm, SubmitHandler } from "react-hook-form";
import { useContext, useEffect } from 'react';
import CrudContext from "../../context/crudContext";


type Inputs = {
	title: string,
	author: string,
	publisher: string,
	year_publication: string,
	image_1: string,
	image_2: string,
	image_3: string,
};

export type ModalProps = object
const Form: React.FC<ModalProps> = () => {
	const { updatedData, selectedBook } = useContext(CrudContext)
	const onSubmit: SubmitHandler<Inputs> = (data) => {
		if (selectedBook) {
			updatedData(data)
		}
	}


	const { register, handleSubmit, reset, formState: { errors } } = useForm<Inputs>();
	useEffect(() => {
		if (selectedBook) {
			reset(selectedBook)
		}
	}, [reset, selectedBook])

	return (

		<form onSubmit={handleSubmit(onSubmit)}>
			<div style={{ display: "grid", gridGap: "1em" }}>
				<TextField  {...register("title", { required: true })}
					id="outlined-password-input"
					label="Title"
					defaultValue={selectedBook ? "..." : ""}
					type="text"

				/>
				{errors.title && <span>This field is required</span>}
				{/* errors will return when field validation fails  */}

				<TextField  {...register("author", { required: true })}
					id="outlined-password-input"
					label="Author"
					disabled={selectedBook ? true : false}
					defaultValue={selectedBook ? "..." : ""}
					type="text"

				/>
				{errors.author && <span>This field is required</span>}

				<TextField  {...register("publisher", { required: true })}
					id="outlined-password-input"
					label="Publisher"
					defaultValue={selectedBook ? "..." : ""}
					disabled={selectedBook ? true : false}
					type="text"

				/>
				{errors.publisher && <span>This field is required</span>}

				<TextField  {...register("year_publication", { required: true })}
					id="outlined-password-input"
					label="Year publication"
					defaultValue={selectedBook ? "..." : ""}
					disabled={selectedBook ? true : false}
					type="text"

				/>
				{errors.year_publication && <span>This field is required</span>}

				<TextField  {...register("image_1", { required: true })}
					id="outlined-password-input"
					label="Image 1"
					defaultValue={selectedBook ? "..." : ""}
					disabled={selectedBook ? true : false}
					type="text"

				/>
				{errors.image_1 && <span>This field is required</span>}
				<TextField  {...register("image_2", { required: true })}
					id="outlined-password-input"
					label="Image 2"
					defaultValue={selectedBook ? "..." : ""}
					disabled={selectedBook ? true : false}
					type="text"

				/>
				{errors.image_2 && <span>This field is required</span>}
				<TextField  {...register("image_3", { required: true })}
					id="outlined-password-input"
					label="Image 3"
					defaultValue={selectedBook ? "..." : ""}
					disabled={selectedBook ? true : false}
					type="text"

				/>
				{errors.image_3 && <span>This field is required</span>}

				<Button variant="outlined" type="submit">{selectedBook ? "Update" : "Create"}</Button>
			</div>
		</form>
	);
}


export default Form;
