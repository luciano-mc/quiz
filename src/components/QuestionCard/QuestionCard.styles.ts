import styled from 'styled-components';
import { ButtonWrapperProps } from '../../types/types.ts';

export const CardWrapper = styled.div`
    max-width: 1100px;
    background: #cbdce7;
    border-radius: 10px;
    padding: 20px;
    box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.25);
    text-align: center;
    font-family: 'roboto';

    p {
        font-size: .9rem;
        font-weight: 600;
    }
`
export const ButtonWrapper = styled.div<ButtonWrapperProps>`
  transition: all .3s ease;

  :hover {
    opacity: 0.8;
  }

  button {
    cursor: pointer;
    user-select: none;
    font-size: 0.8rem;
    width: 100%;
    height: 40px;
    margin: 5px 0;
    background: ${({ correct, userClicked}) => 
        correct 
        ? 'linear-gradient(90deg, #56ffa4, #59bc86)'
        :   !correct && userClicked 
        ?   'linear-gradient(90deg, #ff5656, #c16868)'
        :   'linear-gradient(90deg, #424b6a, #363f60)'
        };
    border: 3px solid #fff;
    box-shadow: 1px 2px 0px rgba(0, 0, 0, 0.1);
    border-radius: 10px;
    color: #fff;
    text-shadow: 0px 1px 0px rgba(0, 0, 0, 0.25);
  }
`