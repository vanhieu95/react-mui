import './App.css'
import Feed from './components/Feed'
import StatusBar from './components/StatusBar'
import Sidebar from './components/Sidebar'
import { Box } from '@mui/system'
import { Stack } from '@mui/material'
import Navbar from './components/Navbar'

const App: React.FC = () => {
  return (
    <Box>
      <Navbar />
      <Stack
        component='main'
        direction='row'
        spacing={2}
        justifyContent='space-between'
      >
        <Sidebar />
        <Feed />
        <StatusBar />
      </Stack>
    </Box>
  )
}

export default App
