import { Link, useLocation } from 'react-router-dom'
import { Box, Flex, Heading, HStack, IconButton, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react'
import { Icon } from '@iconify/react'
import { useAppStore } from '../../../stores/app-store'

const AppBar = () => {
    const location = useLocation()
    const backTo = useAppStore(state => state.backTo)
    const moreMenu = useAppStore(state => state.moreMenu)

    return (
        <Flex
            justify="space-between"
            align="center"
            h={16}
            px={3}
        >
            <HStack spacing={3}>
                {location.pathname !== "/" &&
                    <IconButton
                        as={Link}
                        to={backTo}
                        replace
                        variant="ghost"
                        colorScheme="purple"
                        rounded="full"
                        icon={<Icon icon="material-symbols:arrow-back" />}
                    />
                }

                <Heading as="h3" size="md">Seah Bimbingan</Heading>
            </HStack>

            {moreMenu && moreMenu.length > 0 &&
                <Box>
                    <Menu>
                        <MenuButton
                            as={IconButton}
                            icon={<Icon icon="material-symbols:more-vert" />}
                            variant="ghost"
                        />
                        <MenuList>
                            {moreMenu.map(menu =>
                                <MenuItem
                                    as={menu.action ? 'button' : Link}
                                    key={menu.label}
                                    to={menu.action ? undefined : menu.to}
                                    onClick={menu.action}
                                    {...(menu.props || {})}
                                >
                                    {menu.label}
                                </MenuItem>
                            )}
                        </MenuList>
                    </Menu>
                </Box>
            }
        </Flex>
    )
}

export default AppBar