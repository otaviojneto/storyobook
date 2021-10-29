import { theme } from 'styled-tools'
import styled from 'styled-components'

interface InputTypeColorProps {
  label?: boolean
}

export const Container = styled.div`
  .react-colorful {
    background: ${theme('colors.white')};
  }

  .react-colorful__pointer {
    /*bullet*/
    border: 1px solid ${theme('colors.white')};
    height: 12px;
    width: 12px;
  }

  .react-colorful__saturation {
    border-bottom: 1px solid #000;
    border-radius: 0;
  }

  .react-colorful__alpha,
  .react-colorful__hue {
    margin: 10px 6px 10px;
    height: 2px;
  }
`

export const Label = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
  font-size: 11px;
  padding: 0 20px;
`

export const Swatch = styled.div<InputTypeColorProps>`
  box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.1), inset 0 0 0 1px rgba(0, 0, 0, 0.1);
  border-radius: ${({ label }) => (label ? '2px' : '')};
  cursor: pointer;
  height: ${({ label }) => (label ? '14px' : '34px')};
  margin-right: 9px;
  width: ${({ label }) => (label ? '14px' : '41px')};
`
export const ContentPicker = styled.div`
  position: relative;
`

export const HeroPicker = styled.div`
  align-items: center;
  background-color: ${theme('colors.white')};
  display: flex;
  position: relative;
  width: 100%;

  p {
    color: ${theme('colors.text')};
    font-size: 11px;
    line-height: 15px;
  }
`
export const ContentPickerHero = styled.div`
  max-width: 200px;
  position: absolute;
  left: calc(100% - 220px);
`

export const InputBorder = styled.div`
  background-color: ${theme('colors.white')};
  border: 1px solid ${theme('colors.gray4')};
  border-radius: 2px;
  cursor: pointer;
  display: flex;
  position: relative;
  height: 32px;
  padding: 9px;

  input {
    cursor: pointer;
    max-width: 80px;
  }
`
export const Icon = styled.img`
  height: 20px;
  position: absolute;
  right: 9px;
  top: calc(100% - 25px);
  width: 20px;
`
