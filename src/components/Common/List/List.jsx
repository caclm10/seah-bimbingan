import { VStack } from '@chakra-ui/react'

const List = ({ children }) => {
    return (
        <VStack spacing={3} align="stretch">
            {children}
        </VStack>
    )
}

export default List