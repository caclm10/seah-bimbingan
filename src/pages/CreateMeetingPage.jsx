import { useToast } from "@chakra-ui/react"
import { useNavigate, useParams } from "react-router-dom"
import MeetingForm from "../components/MeetingForm/MeetingForm"
import { useBackTo, useFabTo, useMoreMenu } from "../hooks/use-app"
import { useConsultationStore } from "../stores/consultation-store"

const CreateMeetingPage = () => {
    const { consultationId } = useParams()
    useFabTo("")
    useBackTo(`/consultations/${consultationId}`)
    useMoreMenu()

    const navigate = useNavigate()
    const toast = useToast()
    const addMeeting = useConsultationStore(state => state.addMeeting)

    const handleSubmit = async data => {
        const createdId = await addMeeting(consultationId, data)

        toast({
            title: createdId ? 'Berhasil menambah pertemuan.' : 'Terjadi Kesalahan.',
            status: createdId ? 'success' : 'error',
            duration: 3000,
            isClosable: true
        })

        if (createdId) navigate(`/consultations/${consultationId}/meetings/${createdId}`)
    }


    return (
        <>
            <MeetingForm onSubmit={handleSubmit} />
        </>
    )
}

export default CreateMeetingPage