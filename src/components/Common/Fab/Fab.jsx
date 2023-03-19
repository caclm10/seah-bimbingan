import { IconButton } from '@chakra-ui/react'
import { Icon } from '@iconify/react'
import { Link } from 'react-router-dom'
import { useAppStore } from '../../../stores/app-store'

const Fab = () => {
    const fabTo = useAppStore(state => state.fabTo)
    const fabIcon = useAppStore(state => state.fabIcon)

    if (!fabTo) return <></>

    return (
        <IconButton
            as={Link}
            to={fabTo}
            colorScheme='purple'
            aria-label='Add'
            icon={<Icon icon={fabIcon} />}
            rounded="full"
            size="lg"
            position="fixed"
            bottom={10}
            right={8}
        />
    )
}

export default Fab