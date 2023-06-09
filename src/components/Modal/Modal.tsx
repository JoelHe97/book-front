import { useContext } from 'react';
import './Modal.css';
import { Modal as MuiModal } from '@mui/material';
import ModalContext from '../../context/modalContext';
import Box from '@mui/material/Box';
import { Form } from '..';

export type ModalProps = object
const style = {
	position: 'absolute',
	top: '50%',
	left: '50%',
	transform: 'translate(-50%, -50%)',
	width: 400,
	bgcolor: 'background.paper',
	border: '2px solid #000',
	boxShadow: 24,
	p: 4,
};
const Modal: React.FC<ModalProps> = () => {
	const { openModal, setOpenModal } = useContext(ModalContext)
	const handleClose = () => setOpenModal(false);
	return (
		<div>
			<MuiModal
				open={openModal}
				onClose={handleClose}
				aria-labelledby="modal-modal-title"
				aria-describedby="modal-modal-description"
			>
				<Box sx={style}>
					<Form></Form>
				</Box>
			</MuiModal>
		</div>
	);
};

export default Modal;
