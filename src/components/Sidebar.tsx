import React from 'react'
import { Box } from '@mui/material'

const Sidebar: React.FC = () => {
  return (
    <Box
      bgcolor='violet'
      flex={1}
      p={2}
      sx={{ display: { xs: 'none', sm: 'block' } }}
    >
      Sidebar
    </Box>
  )
}

export default Sidebar
