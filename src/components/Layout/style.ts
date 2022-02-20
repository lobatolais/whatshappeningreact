import styled from "styled-components"
import { color } from "theme/colors"

export const Container = styled.main`
  position: relative;
  padding-top: 2rem;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
export const SelectContainer = styled.div`
  margin-bottom: 36px;

  .select {
    width: 280px;
  }
`

export const Header = styled.header`
  margin-bottom: 20px;
  max-width: 450px;
  padding: 0 1rem;

  h1 {
    font-weight: 600;
    color: ${color.gray[900]};
    text-align: center;
    line-height: 40px;
  }

  p {
    margin-top: 1.75rem;
    text-align: center;
  }
`
