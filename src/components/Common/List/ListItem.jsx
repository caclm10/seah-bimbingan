import { Link } from 'react-router-dom'
import { Card, CardBody, Heading, Text } from '@chakra-ui/react'

const ListItem = ({ to = "/", title = "", body = "" }) => {
    return (
        <Card as={Link} to={to}>
            <CardBody>
                <Heading as="h3" size="md" mb={1}>{title}</Heading>
                <Text color="gray.600" fontSize="sm">{body}</Text>
            </CardBody>
        </Card>
    )
}

export default ListItem