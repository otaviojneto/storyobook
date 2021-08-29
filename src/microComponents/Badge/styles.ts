import styled from 'styled-components'

interface BadgeProps {
    color: string
    colorText?: string
}

export const Container = styled.div<BadgeProps>`
    background-color: ${({ color }) => color};
    border-radius: 20px;
    color: ${({ colorText }) => colorText ?? '#fff'};
    cursor: default;
    display: inline-flex;
    font-size: 11px;
    font-weight: 600;
    line-height: 18px;
    padding: 5px 10px;
`
