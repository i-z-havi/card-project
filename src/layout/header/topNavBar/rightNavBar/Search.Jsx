import React from 'react'
import Input from "@mui/material/Input"
import { useTheme } from '../../../../providers/ThemeProvider'
import { useSearchParams } from 'react-router-dom';

export default function Search() {
  const {isDark} = useTheme();
  const [searchParams, setSearchParams] = useSearchParams();
  const handleChange =(e)=>{
    setSearchParams({titlesearch:e.target.value});
  }
  return (
    <Input sx={{backgroundColor: isDark ? "#D3D3D3" : "#e3f2fd",}} onChange={(e)=>handleChange(e)} />
  )
}
