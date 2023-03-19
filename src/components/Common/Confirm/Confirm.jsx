import {
    AlertDialog,
    AlertDialogBody,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogContent,
    AlertDialogOverlay,
    Button,
} from '@chakra-ui/react'
import { useRef } from 'react'
import { useAppStore } from '../../../stores/app-store'

const Confirm = () => {
    const { isOpen, isDelete, title, onConfirm } = useAppStore(state => state.confirm)
    const setConfirm = useAppStore(state => state.setConfirm)
    const cancelRef = useRef()

    const handleClose = () => {
        setConfirm({
            isOpen: false,
            title: '',
            isDelete: false,
            onConfirm: () => { }
        })
    }

    const handleConfirm = () => {
        handleClose()

        onConfirm()
    }

    return (
        <AlertDialog
            isOpen={isOpen}
            leastDestructiveRef={cancelRef}
            onClose={handleClose}
        >
            <AlertDialogOverlay>
                <AlertDialogContent>
                    <AlertDialogHeader fontSize='lg' fontWeight='bold'>
                        {title}
                    </AlertDialogHeader>

                    <AlertDialogFooter>
                        <Button ref={cancelRef} onClick={handleClose}>
                            Batal
                        </Button>
                        <Button colorScheme={isDelete ? 'red' : 'purple'} onClick={handleConfirm} ml={3}>
                            {isDelete ? 'Hapus' : 'Okay'}
                        </Button>
                    </AlertDialogFooter>
                </AlertDialogContent>
            </AlertDialogOverlay>
        </AlertDialog>
    )
}

export default Confirm