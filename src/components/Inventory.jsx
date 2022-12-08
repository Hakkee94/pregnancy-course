import React from 'react';
import InventoryStyle from './InventoryStyle.css'

const Inventory = () => {
    return (
        <div className='inventory-container-full'>

            <div className='inventory-container'>


                <h1>какой&nbsp;инвентарь нужен?&nbsp;👇</h1>

                <div className='ul-list'>
                    <ul>
                        <li>Коврик</li>
                        <li>Фитбол 55-60 см</li>
                        <li>Фитнес-резинка или ремень для йоги</li>
                        <li>2 гантели весом 1-2 кг</li>
                        <li>Мяч для пилатеса</li>
                        <li>Ролл для пилатеса</li>
                        <li>Шипованный мяч</li>
                        <li>Блоки для йоги (можно заменить толстыми книгами)</li>
                        <li className='line-none'>Плед</li>
                    </ul>
                </div>
            </div>
        </div>


    );
};

export default Inventory;