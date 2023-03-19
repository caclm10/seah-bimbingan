import { Box, Heading, Text, useToast } from '@chakra-ui/react'
import { useNavigate, useParams } from 'react-router-dom'
import MeetingList from '../components/MeetingList/MeetingList'
import { useBackTo, useConfirm, useFabIcon, useFabTo, useMoreMenu } from '../hooks/use-app'
import { useFindConsultation } from '../hooks/use-consultation'
import { useConsultationStore } from '../stores/consultation-store'

const ConsultationPage = () => {
    const { consultationId } = useParams()
    useBackTo('/')
    useFabTo(`/consultations/${consultationId}/meetings/create`)
    useFabIcon("material-symbols:add")

    const navigate = useNavigate()
    const toast = useToast()
    const confirm = useConfirm()

    const deleteConsultation = useConsultationStore(state => state.delete)

    useMoreMenu([
        {
            label: 'Edit Bimbingan',
            to: `/consultations/${consultationId}/edit`
        },
        {
            label: 'Tambah Pertemuan',
            to: `/consultations/${consultationId}/meetings/create`,
        },
        {
            label: 'Hapus Bimbingan',
            action: () => confirm({
                title: "Hapus bimbingan ini?",
                isDelete: true,
                onConfirm: async () => {
                    await deleteConsultation(consultationId)

                    toast({
                        status: 'success',
                        title: 'Berhasil menghapus bimbingan.',
                        duration: 3000,
                        isClosable: true
                    })

                    navigate(`/`)

                }
            }),
            props: {
                color: 'red'
            }
        }
    ])

    const consultation = useFindConsultation(consultationId)

    if (!consultation) return <></>

    return (
        <>
            <Box mb={5}>
                <Heading as="h1" size="xl">Bimbingan {consultation.name}</Heading>
                <Text fontStyle="italic" color="gray.500">Pembimbing: {consultation.lecturer}</Text>
            </Box>
            <MeetingList consultation={consultation} />
        </>
    )
}

export default ConsultationPage