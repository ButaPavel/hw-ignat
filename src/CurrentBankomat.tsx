import React from 'react';
import {MoneyType} from "./App";
import styled from "styled-components";

type CurrentBankomatPropsType = {
    money: MoneyType
}
export const CurrentBankomat = (props: CurrentBankomatPropsType) => {

    return (

        <Banknote color={props.money.banknotes === 'Dollars' ? 'darkseagreen' : 'darkgray'}>
            <Name> {props.money.banknotes}</Name>
            <Nominal>{props.money.value}</Nominal>
        </Banknote>
    )

};

const Banknote = styled.div`
  background-color: ${props => {
    if (props.color === 'darkseagreen') {
      return 'darkseagreen';
    } else {
      return 'darkgray';
    }
  }};
  width: 400px;
  height: 200px;
  margin: 10px;
`


const Name = styled.div``
const Nominal = styled.div`
  margin-top: 40px;
  font-size: 50px;
  font-weight: 600;
`

const Green = styled.div`
  background-color: darkseagreen;
  width: 400px;
  height: 200px;
  margin: 10px;
`

const Brown = styled.div`
  background-color: darkgray;
  width: 400px;
  height: 200px;
  margin: 10px;
`