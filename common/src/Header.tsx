import React from 'react'
import { useNavigate } from 'react-router-dom'
import { AppBar, Toolbar } from '@mui/material'
const Header: React.FC = () => {
    const navigate=useNavigate()
    const click=()=>{}
    return (
        <div style={{height:"54.2px",overflow:"hidden"}}>
        <AppBar position='static'style={{backgroundColor:"#017AFF"}}>
            <Toolbar />
        </AppBar>
        </div>
    )
}

export default Header