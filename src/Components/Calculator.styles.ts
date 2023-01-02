import styled from "styled-components";

export const Wrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: rgba(0,0,0,0.3);
    height: 100vh;
    
`
export const Container = styled.main`
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 10px;
    justify-content: center;
    border: 1px solid grey;
    background: white;
    padding-top: 10px;
    height: 350px;
    width: 850px;
    padding-top: 30px;
    padding-bottom: 30px;
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.12);
`
export const Heading = styled.h1`
    font-family: Poppins;
    font-weight: bolder;
    font-size: 30px;
    color: white;
    letter-spacing: 3px;
`
export const SpendingWrapper = styled.h3`
    font-family: Poppins;
    letter-spacing: 4px;
    color: white;

    span{
        color: blue;
        font-weight: 900;
        padding: 2px;
        margin-left: 5px;
    }

`
export const ListWrapper = styled.ul`
    overflow-y: scroll;
    overflow-x: hidden;
    
`
export const ListItem = styled.li`
    list-style: none;
    width: 700px;
    padding-left: 5px;
    padding-right: 10px;
    margin-right: 15px;
    transition: all 400ms ease-in-out;

    &:hover{
        transform: scale(1.03);
        border: 1px inset #76e6f5;
    }
`
export const ListItemContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-top: 10px;
    padding-left: 5px;
    padding-right: 7px;
    align-items: center;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12);
    height: 30px;
    .charge{
        font-family: Poppins;
        font-weight: 700;
    }
    .amount{
        font-weight: bold;
        }
    .btns{
        display: flex;
        span{
            .btn-edit{
                color: green;
                background: none;
                border: none;
                font-size: 1.2rem;
                outline: none;
                cursor: pointer;
            }
            .btn-delete{
                color: red;
                background: none;
                border: none;
                font-size: 1.2rem;
                outline: none;
                cursor: pointer;
            }
        }
    }
`


export const FormWrapper = styled.form`
    width: 80%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

`
export const FormContainer = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 50px;

    div{
        display: flex;
        flex-direction: column;
        gap: 10px;
        width: 100%;
    }
`

export const FormControl = styled.input`
    background-color: transparent;
    border: none;
    border-radius: 0;
    border-bottom: 2px solid grey;
    outline: none;
    height: 3rem;
    width: 100%;
    font-size: 16px;
    margin: 0 0 8px 0;
    padding: 0;
`
export const FormLabel = styled.label`
    font-size: 20px;
    font-weight: 600;

`
export const Button = styled.button`
    margin-top: 10px;
    height: 35px;
    width: 150px;
    font-size: 18px;
    background: #76e6f5;
    color: black;
    border-radius: 8px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 5px;
    .submit-edit{
        font-size: 22px;
    }
`