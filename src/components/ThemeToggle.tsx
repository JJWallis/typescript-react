import React, { useState, useContext, useEffect } from 'react'
import { AppState, Context } from '../App'
import styled from 'styled-components'
import Input from './Input'
import Icon from './Icon'
import moon from '../assets/icon-moon.svg'
import sun from '../assets/icon-sun.svg'

interface ThemeActions {
   determineTheme: AppState['determineTheme']
}

const Label = styled.label`
   display: block;
   position: relative;
   cursor: pointer;
`

const ThemeToggle: React.FC = () => {
   const [theme, setTheme] = useState(false)
   const context: any = useContext(Context)
   const determineTheme: ThemeActions['determineTheme'] = context.themeChange

   useEffect(() => determineTheme(theme))

   return (
      <Label htmlFor="theme-switch" aria-label="Theme switcher toggle.">
         <Input
            checkboxTheme
            checked={theme}
            id="theme-switch"
            type="checkbox"
            onChange={(e) => setTheme(e.target.checked)}
         />
         <Icon src={theme ? sun : moon} />
      </Label>
   )
}

export default ThemeToggle
