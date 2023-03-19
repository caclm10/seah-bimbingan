import { useToast } from "@chakra-ui/react"
import { useParams } from "react-router-dom"
import MeetingForm from "../components/MeetingForm/MeetingForm"
import { useBackTo, useFabTo, useMoreMenu } from "../hooks/use-app"
import { useFindMeeting } from "../hooks/use-consultation"
import { useConsultationStore } from "../stores/consultation-store"

const EditMeetingPage = () => {
    const { consultationId, meetingId } = useParams()
    useFabTo("")
    useBackTo(`/consultations/${consultationId}/meetings/${meetingId}`)
    useMoreMenu()

    const toast = useToast()
    const updateMeeting = useConsultationStore(state => state.updateMeeting)
    const meeting = useFindMeeting(consultationId, meetingId)

    const handleSubmit = async data => {
        await updateMeeting(consultationId, meetingId, data)

        toast({
            title: 'Berhasil mengubah data pertemuan.',
            status: 'success',
            duration: 3000,
            isClosable: true
        })
    }

    return (
        <>
            <MeetingForm defaultValues={meeting} onSubmit={handleSubmit} />
        </>
    )
}

export default EditMeetingPage