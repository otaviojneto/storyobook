import { ClickAwayListener } from '@material-ui/core'
import React, { useState } from 'react'
import { HexColorPicker } from 'react-colorful'
import { arrowDownLabel, arrowUpLabel } from '../../Icons'
import { Container, ContentPicker, ContentPickerHero, HeroPicker, Icon, InputBorder, Label, Swatch } from './styles'

export type InputTypeColorProps = {
  onChange: () => void
  hex: string
  color?: string
  text: string
}

const InputTypeColor: React.FC<InputTypeColorProps> = ({ color, onChange, text }) => {
  const [openColorPicker, setOpenColorPicker] = useState(false)

  return (
    <Container>
      <ClickAwayListener onClickAway={() => setOpenColorPicker(false)}>
        <div>
          <Label>
            {text}

            <InputBorder onClick={() => setOpenColorPicker(!openColorPicker)}>
              <Swatch label style={{ backgroundColor: color }} />

              <input type="text" readOnly value={color} />

              <Icon src={openColorPicker ? arrowUpLabel : arrowDownLabel} alt="" />
            </InputBorder>
          </Label>

          {openColorPicker && (
            <ContentPicker>
              <ContentPickerHero>
                <HeroPicker>
                  <Swatch style={{ backgroundColor: color }} /> <p>{color}</p>
                </HeroPicker>

                <HexColorPicker color={color} onChange={onChange} />
              </ContentPickerHero>
            </ContentPicker>
          )}
        </div>
      </ClickAwayListener>
    </Container>
  )
}

export default InputTypeColor
