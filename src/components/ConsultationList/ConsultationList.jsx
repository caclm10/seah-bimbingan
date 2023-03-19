import { Text, VStack } from '@chakra-ui/react'
import { useConsultationStore } from '../../stores/consultation-store'
import ConsultationListItem from './ConsultationListItem'

const ConsultationList = () => {
    const consultationList = useConsultationStore(state => state.list)

    if (!consultationList || consultationList.length === 0) return (
        <Text align="center" color="gray.400" fontSize="xl" mt={16}>Belum ada bimbingan</Text>
    )

    return (
        <VStack spacing={3} align="stretch">
            {consultationList.map(consultation => <ConsultationListItem key={consultation.id} consultation={consultation} />)}
        </VStack>
    )
}

export default ConsultationList