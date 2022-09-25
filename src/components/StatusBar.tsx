import React from 'react'
import { Box } from '@mui/material'

const StatusBar: React.FC = () => {
  return (
    <Box
      bgcolor='purple'
      flex={1}
      p={2}
      sx={{ display: { xs: 'none', sm: 'block' } }}
    >
      StatusBar
    </Box>
  )
}

export default StatusBar
