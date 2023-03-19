import { Link } from 'react-router-dom'
import { Card, CardBody, Heading, Text } from '@chakra-ui/react'

const ConsultationListItem = ({ consultation }) => {
    return (
        <Card as={Link} to={`/consultations/${consultation.id}`}>
            <CardBody>
                <Heading as="h3" size="md" mb={1}>Bimbingan {consultation.name}</Heading>
                <Text color="gray.600" fontSize="sm">Pembimbing: {consultation.lecturer}</Text>
            </CardBody>
        </Card>
    )
}

export default ConsultationListItem