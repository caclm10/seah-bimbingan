import { Outlet } from 'react-router-dom'
import { Box } from '@chakra-ui/react'
import AppBar from './components/Common/AppBar/AppBar'
import Fab from './components/Common/Fab/Fab'
import Confirm from './components/Common/Confirm/Confirm'
import { useEffect } from 'react'
import { useConsultationStore } from './stores/consultation-store'

function App() {
  const initConsultationStore = useConsultationStore(state => state.init)

  useEffect(() => {
    initConsultationStore()
  }, [])

  return (
    <Box minH="100vh" bg="gray.100">
      <AppBar />

      <Box px={3} py={5}>
        <Outlet />
      </Box>

      <Fab />

      <Confirm />
    </Box>
  )
}

export default App
