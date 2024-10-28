import styled from 'styled-components';



export const Container = styled.section`
  display: flex;
  align-items: center;
 

`
export const TabelTime = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
   padding: 10px;
  background-color: #242424;
  width: 27%;
  height: 100vh;
  div{
   display: grid;
    grid-template-columns: 100px 100px;
    gap: 20px;
  }
   
 

`
export const OtherButton = styled.button`
 background-color: transparent;
    border: 1px solid #fff;
    color: #fff;
    padding: 8px 12px;
    margin-top: 16px;
    cursor: pointer;
    border-radius: 20px;

`

export const SectionTime = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  margin-left: 30%;


`

export const ButtonTime = styled.button`
  border-radius: 8px;
  border: 1px solid transparent;
  padding: 0.6em 1.2em;
  font-size: 1em;
  font-weight: 500;
  font-family: inherit;
  background-color: #3590c7;
  cursor: pointer;
  transition: border-color 0.25s;
  color: #fff;
  margin-left: 15px;


  :hover{
    border: 1px solid #ffff;
  }
`