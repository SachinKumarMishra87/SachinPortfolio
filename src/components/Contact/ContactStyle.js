import styled from "styled-components";
import _default from "../../themes/default";



// Styled Components
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  z-index: 1;
  padding: 0px 0px 60px 0px;
  @media (max-width: 960px) {
    padding: 0px 20px;
  }
;
`
export const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  width: 100%;
  max-width: 1350px;
  padding: 40px 20px 0px 20px;
  gap: 12px;
  @media (max-width: 960px) {
    flex-direction: column;
  }
;`

export const Title = styled.div`
  font-size: 42px;
  text-align: center;
  font-weight: 600;
  margin-top: 20px;
  color: ${({ theme }) => theme.text_primary};
  @media (max-width: 768px) {
    margin-top: 12px;
    font-size: 32px;
  }
;`

export const Desc = styled.div`
  font-size: 18px;
  text-align: center;
  max-width: 600px;
  color: ${({ theme }) => theme.text_secondary};
  @media (max-width: 768px) {
    margin-top: 12px;
    font-size: 16px;
  }
;`

export const Card = styled.div`
  max-height: 600px;
  width: 90%;
  max-width: 700px;
  border-radius: 20px;
  display: flex;
  /* margin-bottom: 30px; */
  justify-content: center;
  padding: 20px;
  /* box-shadow: 5px 5px 22px rgba(0, 0, 0, 0.3); */
  box-shadow: 0px 0px 4px #854CE6;
  @media (max-width: 768px) {
    min-height: auto;
    padding: 10px;
    margin-bottom: 30px;
  }
  @media (max-width: 965px) {
    min-height: auto;
    padding: 10px;
    margin-bottom: 30px;
  }
;`

export const Form = styled.form`
  width: 100%;
  display: flex;
  background-color: transparent;
  flex-direction: column;
  gap: 20px;
  
;
`
export const InputTitle = styled.label`
  font-size: 15px;
  font-weight: 500;
  color: ${({ theme }) => theme.text_secondary};
;
`
export const Input = styled.input`
  border-radius: 10px;
  border: 1px solid ${({ theme }) => theme.text_secondary};
  outline: none;
  padding: 10px;
  font-size: 16px;
  width: 100%;
;
`
export const TextArea = styled.textarea`
  height: 150px;
  border-radius: 12px;
  border: 1px solid ${({ theme }) => theme.text_secondary};
  padding: 10px;
  font-size: 16px;
  width: 100%;
  resize: none;
  outline: none;`
;

export const Button = styled.button`
  padding: 10px 120px;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.button};
  color: #fff;
  font-size: 16px;
  border: none;
  cursor: pointer;
  margin-top: 30px;
  align-self: center;
  transition: 0.1s ease-in;
  &:hover {
    background-color: ${({ theme }) => theme.button_hover};
  }
  &:disabled {
    cursor: not-allowed;
    background-color: ${({ theme }) => theme.button_disabled};
  }
  @media (max-width: 450px) {
    padding: 10px 60px;
  }
;`

export const Div = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3px;
;`

export const FormBg = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 1360px;
  padding: 0 30px;
  top: 50%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);
  @media (max-width: 960px) {
    justify-content: center;
    padding: 0 0px;
  }
;`

const formErrorStyle = {
  color:"red",
}