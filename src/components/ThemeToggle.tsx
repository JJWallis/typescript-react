import React, { useState } from 'react'
import styled from 'styled-components'
import Input from './Input'
import Icon from './Icon'
import moon from '../assets/icon-moon.svg'
// import sun from '../assets/icon-sun.svg'

const Label = styled.label`
   display: block;
   position: relative;
   cursor: pointer;
   outline: 2px solid white;
`

const ThemeToggle: React.FC = () => {
   const [theme, setTheme] = useState<boolean>(false)
   return (
      <Label htmlFor="theme-switch" aria-label="Theme switcher toggle.">
         <Input
            checkbox
            checked={theme}
            id="theme-switch"
            type="checkbox"
            onChange={(e) => setTheme(e.target.checked)}
         />
         <Icon src={moon} />
      </Label>
   )
}

export default ThemeToggle
