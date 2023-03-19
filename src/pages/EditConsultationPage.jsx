import { useToast } from "@chakra-ui/react"
import { useParams } from "react-router-dom"
import ConsultationForm from "../components/ConsultationForm/ConsultationForm"
import { useBackTo, useFabTo } from "../hooks/use-app"
import { useFindConsultation } from "../hooks/use-consultation"
import { useConsultationStore } from "../stores/consultation-store"

const EditConsultationPage = () => {
    const { consultationId } = useParams()

    useBackTo(`/consultations/${consultationId}`)
    useFabTo("")

    const toast = useToast()
    const consultation = useFindConsultation(consultationId)
    const updateConsultation = useConsultationStore(state => state.update)

    const handleSubmit = async data => {
        await updateConsultation(consultationId, data)

        toast({
            title: 'Berhasil mengubah data bimbingan.',
            status: 'success',
            duration: 3000,
            isClosable: true
        })
    }

    return (
        <ConsultationForm
            defaultValues={consultation}
            onSubmit={handleSubmit}
        />
    )
}

export default EditConsultationPage