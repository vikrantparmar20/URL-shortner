import Modal from '@mui/material/Modal';
import React from 'react'
import CreateNewShorten from './CreateNewShorten';
import { useStoreContext } from '../../contextApi/ContextApi';

const ShortenPopUp = ({ open, setOpen}) => {
    const {token} = useStoreContext(); 

    const handleClose = () => {
        setOpen(false);
    };

  return (
    <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <div className='flex justify-center items-center h-full w-full'>
            <CreateNewShorten setOpen={setOpen} />
        </div>
      </Modal>
  )
}

export default ShortenPopUp;