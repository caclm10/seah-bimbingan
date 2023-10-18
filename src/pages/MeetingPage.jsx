import { DateTime } from 'luxon'
import { useNavigate, useParams } from 'react-router-dom'
import { Heading, Text, useToast } from '@chakra-ui/react'
import { useFindConsultation, useFindMeeting } from '../hooks/use-consultation'
import { useBackTo, useConfirm, useFabTo, useMoreMenu } from '../hooks/use-app'
import { useConsultationStore } from '../stores/consultation-store'

const MeetingPage = () => {
    const { consultationId, meetingId } = useParams()
    useBackTo(`/consultations/${consultationId}`)
    useFabTo("")

    const navigate = useNavigate()
    const toast = useToast()
    const confirm = useConfirm()

    const deleteMeeting = useConsultationStore(state => state.deleteMeeting)

    useMoreMenu([
        {
            label: "Edit Pertemuan",
            to: `/consultations/${consultationId}/meetings/${meetingId}/edit`
        },
        {
            label: 'Hapus Pertemuan',
            action: () => confirm({
                title: 'Hapus pertemuan ini?',
                isDelete: true,
                onConfirm: async () => {
                    await deleteMeeting(consultationId, meetingId)

                    toast({
                        title: "Berhasil menghapus pertemuan.",
                        isClosable: true,
                        status: 'success',
                        duration: 3000
                    })

                    navigate(`/consultations/${consultationId}`, { replace: true })
                }
            }),
            props: {
                color: 'red'
            }
        }
    ])

    const consultation = useFindConsultation(consultationId)
    const meeting = useFindMeeting(consultationId, meetingId)

    return (
        <>
            <Text color="gray.500" fontStyle="italic">{DateTime.fromISO(meeting.date, { locale: 'id' }).toLocaleString(DateTime.DATETIME_FULL)}</Text>
            <Heading as="h1">{meeting.topic}</Heading>

            <Text mt={5}>{meeting.note}</Text>
        </>
    )
}

export default MeetingPage