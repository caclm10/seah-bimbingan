import { useToast } from "@chakra-ui/react"
import { useNavigate } from "react-router-dom"
import ConsultationForm from "../components/ConsultationForm/ConsultationForm"
import { useBackTo, useFabTo, useMoreMenu } from "../hooks/use-app"
import { useConsultationStore } from "../stores/consultation-store"

const CreateConsultationPage = () => {
    useBackTo("/")
    useFabTo("")
    useMoreMenu([])
    const navigate = useNavigate()
    const toast = useToast()
    const addConsultation = useConsultationStore(state => state.add)

    const handleSubmit = async data => {
        const createdId = await addConsultation(data)

        toast({
            title: 'Berhasil menambah bimbingan.',
            status: 'success',
            duration: 3000,
            isClosable: true
        })

        navigate(`/consultations/${createdId}/edit`)
    }

    return (
        <ConsultationForm onSubmit={handleSubmit} />
    )
}

export default CreateConsultationPage