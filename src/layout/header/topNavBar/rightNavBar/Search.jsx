import React from 'react'
import {Input, InputAdornment} from "@mui/material"
import { useTheme } from '../../../../providers/ThemeProvider'
import SearchIcon from '@mui/icons-material/Search';
import { useSearchParams } from 'react-router-dom';

export default function Search() {
  const {isDark} = useTheme();
  const [searchParams, setSearchParams] = useSearchParams();
  const handleChange =(e)=>{
    setSearchParams({titlesearch:e.target.value});
  }
  return (
    <Input 
    placeholder='Search...'
    startAdornment={
      <InputAdornment position="start">
        <SearchIcon sx={{pl:"5px"}} />
      </InputAdornment>
    } 
    sx={{backgroundColor: isDark ? "#D3D3D3" : "#e3f2fd", borderRadius:"5px"}} onChange={(e)=>handleChange(e)} />
  )
}
