import React, {useState} from 'react';
import './App.css';
import {Country} from "./Country";

export type BanknotsType = 'Dollars' | 'RUBLS' | 'All'
export type MoneyType = {
    banknotes: BanknotsType
    value: number
    number: string
}

let defaultMoney: MoneyType[] = [  // типизируем
    {banknotes: 'Dollars', value: 100, number: ' a1234567890'}, //0
    {banknotes: 'Dollars', value: 50, number: ' z1234567890'}, //1
    {banknotes: 'RUBLS', value: 100, number: ' w1234567890'}, //2
    {banknotes: 'Dollars', value: 100, number: ' e1234567890'},
    {banknotes: 'Dollars', value: 50, number: ' c1234567890'},
    {banknotes: 'RUBLS', value: 100, number: ' r1234567890'},
    {banknotes: 'Dollars', value: 50, number: ' x1234567890'},
    {banknotes: 'RUBLS', value: 50, number: ' v1234567890'},
]



export const moneyFilter = (money: MoneyType[], filter: BanknotsType): MoneyType[] => {
    if (filter === 'All') {
        return money
    } // ? money
    return money.filter(el => el.banknotes === filter)

}

function App() {
    // убираем заглушки в типизации и вставляем в качестве инициализационного значения defaultMoney
    const [money, setMoney] = useState<MoneyType[]>(defaultMoney)

    const [filter, setFilter] = useState<BanknotsType>('All')   // по умолчанию указываем все банкноты

    const filteredMoney = moneyFilter(money, filter)

    return (
        <div className="App">
            <Country
                data={filteredMoney}   //отрисовать будем деньги после фильтрации
                setFilter={setFilter}  //useState передаем? Так можно было?!
                filter={filter}       //если не будем использовать, может вообще не передавать?
            />
        </div>
    );
}

// Итого: в этой компоненте у нас мозги. А вот отрисовка где-то глубже. Погружаемся в Country


export default App;
