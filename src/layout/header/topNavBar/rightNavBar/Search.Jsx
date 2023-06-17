import React from 'react'
import Input from "@mui/material/Input"
import { useTheme } from '../../../../providers/ThemeProvider'

export default function Search() {
  const {isDark} = useTheme();
  return (
    <Input sx={{backgroundColor: isDark ? "#D3D3D3" : "#e3f2fd",}}/>
  )
}
