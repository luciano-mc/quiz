import styled from 'styled-components';
import { ButtonWrapperProps } from '@/types/types.ts';

export const ButtonWrapper = styled.div<ButtonWrapperProps>`
  transition: all .3s ease;

  :hover {
    opacity: 0.8;
  }

  .card__button {
    cursor: pointer;
    user-select: none;
    font-size: 0.8rem;
    max-width: 400px;
    height: 40px;
    margin: 5px 0;
    background: ${({ correct, userClicked}) => 
        correct 
        ? 'linear-gradient(90deg, #56ffa4, #59bc86)'
        :   !correct && userClicked 
        ?   'linear-gradient(90deg, #ff5656, #c16868)'
        :   'rgb(26, 26, 26)'
        };
    box-shadow: 1px 2px 0px rgba(0, 0, 0, 0.1);
    border-radius: 10px;
    color: #fff;
    text-shadow: 0px 1px 0px rgba(0, 0, 0, 0.25);
  }
`