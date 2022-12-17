import React from 'react';
import {City} from "./City";
import {BanknotsType, MoneyType} from "./App";

type CountryPropsType = {
    data: MoneyType[]
    setFilter: (filter:BanknotsType)=>void // давайте подумаем, setFilter -это гузчик, у которого всегда в руках товар
    filter: BanknotsType
}

export const Country = (props: CountryPropsType) => {
    //console.log(props.data)

    const setAll = () => {
        props.setFilter('All')
        // засетаем 'All'
    }
    const setDollars = () => {
        props.setFilter('Dollars')
        // засетаем 'Dollars'
    }
    const setRUBLS = () => {
        props.setFilter('RUBLS')
        // засетаем 'RUBLS'
    }

    return (
        <div>
            <button onClick={setAll}>All</button>
            <button onClick={setDollars}>Dollars</button>
            <button onClick={setRUBLS}>RUBLS</button>
            <City data={props.data}/>
        </div>
    );
};

