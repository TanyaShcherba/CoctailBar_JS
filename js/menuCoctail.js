`use strict`;

let coctailStorage = new barHashStorage();

coctailStorage.addValue(`Голубая лагуна`, {
    alcohol: true,
    recipe: 
    `1. Водка Finlandia - 50 мл.
    2. Ликер блю кюрасао De Kuyper - 20 мл.
    3. Спрайт - 150 мл.
    4. Ананас - 30 г.
    5. Лед в кубиках - 200 г.`
});

coctailStorage.addValue(`Мохито`, {
    alcohol: true,
    recipe: 
    `1. Белый ром - 50 мл.
    2. Сахарный сироп - 15 мл.
    3. Содовая - 100 мл.
    4. Лайм - 80 г.
    5. Мята - 3 г.
    6. Дробленый лед - 200 г.`
});

coctailStorage.addValue(`Джин тоник`, {
    alcohol: true,
    recipe: 
    `1. Лондонский сухой джин - 50 мл.
    2. Тоник - 150 мл.
    3. Лайм - 20 г.
    4. Лед в кубиках - 180 г.`
});

coctailStorage.addValue(`Кровавая Мэри`, {
    alcohol: true,
    recipe: `1. Водка Finlandia - 50 мл.
    2. Томатный сок - 120 мл.
    3. Лимонный сок - 10 мл.
    4. Сельдерей - 15 г.
    5. Табаско соус красный - 1 мл.
    6. Лед в кубиках - 380 г.`
});

coctailStorage.addValue(`Американо`, {
    alcohol: true,
    recipe: `1. Красный вермут - 50 мл.
    2. Красный биттер Campari - 50 мл.
    3. Содовая - 50 мл.
    4. Апельсиновая цедра - 1 шт.
    5. Лед в кубиках - 180 г.`
});

let coctailName = document.getElementById(`coctailName`);

coctailName.onclick = function() {
    let keyP = prompt(`Напишите название напитка:`);
    let valueC = { };

    valueC.alcohol = confirm(`${keyP} - алкогольный напиток?
    ОК - алкогольный
    Отмена - безалкогольный`);
    valueC.recipe = prompt(`Напишите рецепт напитка ${keyP}:`);
    coctailStorage.addValue(keyP, valueC);
}

let coctailInfo = document.getElementById(`coctailInfo`);

coctailInfo.onclick = function() {
    let coctailInfoName = prompt(`Напишите название напитка:`);
    let coctailInfoAbout = document.getElementById(`coctailInfoAbout`);

    let information = coctailStorage.getValue(coctailInfoName);

    if(coctailStorage.getValue(coctailInfoName) !== undefined) {
        coctailInfoAbout.innerHTML = `Напиток: ${coctailInfoName}` 
        + `<br>` + `Алкогольный: `+(information.alcohol === true ? `Да` : `Нет`)
        + `<br>` + `Рецепт: ` + (information.recipe ? information.recipe : `Рецепта нет`);
    }
    else {
        coctailInfoAbout.innerHTML = `Напиток не найден`;
    }
}

let coctailInfoDelete = document.getElementById(`coctailInfoDelete`);

coctailInfoDelete.onclick = function() {
    let coctailInfoDelete = prompt(`Напишите название напитка, который хотите удалить:`);
    let coctailInfoAbout = document.getElementById(`coctailInfoAbout`);

    if(coctailStorage.deleteValue(coctailInfoDelete) === true) {
        coctailInfoAbout.innerHTML = `Вы удалили напиток`;
    }
    else {
        coctailInfoAbout.innerHTML = `Напиток не найден`;
    }
}

let coctailList = document.getElementById(`coctailList`);

coctailList.onclick = function() {
    let coctailInfoAbout = document.getElementById(`coctailInfoAbout`);
    coctailInfoAbout.innerHTML = coctailStorage.getKeys();
}

