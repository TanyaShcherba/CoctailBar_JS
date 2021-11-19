"use strict";

let coctailStorage = new barHashStorage();

coctailStorage.addValue('Голубая лагуна',{
    alcohol: true,
    recipe: "<br>"+"1. Водка Finlandia - 50 мл."+"<br>"+"2. Ликер блю кюрасао De Kuyper - 20 мл."+"<br>"+"3. Спрайт - 150 мл."+"<br>"+"4. Ананас - 30 г."+"<br>"+"5. Лед в кубиках - 200 г."
});

coctailStorage.addValue('Мохито',{
    alcohol: true,
    recipe: "<br>"+"1. Белый ром - 50 мл."+"<br>"+"2. Сахарный сироп - 15 мл."+"<br>"+"3. Содовая - 100 мл."+"<br>"+"4. Лайм - 80 г."+"<br>"+"5. Мята - 3 г."+"<br>"+"6. Дробленый лед - 200 г."
});

coctailStorage.addValue('Джин тоник',{
    alcohol: true,
    recipe: "<br>"+"1. Лондонский сухой джин - 50 мл."+"<br>"+"2. Тоник - 150 мл."+"<br>"+"3. Лайм - 20 г."+"<br>"+"4. Лед в кубиках - 180 г."
});

coctailStorage.addValue('Кровавая Мэри',{
    alcohol: true,
    recipe: "<br>"+"1. Водка Finlandia - 50 мл."+"<br>"+"2. Томатный сок - 120 мл."+"<br>"+"3. Лимонный сок - 10 мл."+"<br>"+"4. Сельдерей - 15 г."+"<br>"+"5. Табаско соус красный - 1 мл."+"<br>"+"6. Лед в кубиках - 380 г."
});

coctailStorage.addValue('Американо',{
    alcohol: true,
    recipe: "<br>"+"1. Красный вермут - 50 мл."+"<br>"+"2. Красный биттер Campari - 50 мл."+"<br>"+"3. Содовая - 50 мл."+"<br>"+"4. Апельсиновая цедра - 1 шт."+"<br>"+"5. Лед в кубиках - 180 г."
});

let coctailName = document.getElementById("coctailName");

coctailName.onclick = function() {
    let keyP = prompt("Напишите название напитка:");
    let valueC = {};

    valueC.alcohol = confirm(`${keyP} - алкогольный напиток?\nОК - алкогольный\nОтмена - безалкогольный`);
    valueC.recipe = prompt(`Напишите рецепт напитка ${keyP}:`);
    coctailStorage.addValue(keyP, valueC);
}

let coctailInfo = document.getElementById("coctailInfo");

coctailInfo.onclick = function() {
    let coctailInfoName = prompt("Напишите название напитка:");
    let coctailInfoAbout = document.getElementById("coctailInfoAbout");

    let information = coctailStorage.getValue(coctailInfoName);

    if(coctailStorage.getValue(coctailInfoName) !== undefined){
        coctailInfoAbout.innerHTML = `Напиток: ${coctailInfoName}` 
        + "<br>" + "Алкогольный: "+(information.alcohol === true ? "Да" : "Нет")
        + "<br>" + "Рецепт: " + (information.recipe ? information.recipe : "Рецепта нет");
    }
    else {
        coctailInfoAbout.innerHTML = "Такой напиток не найден";
    }
}

let coctailInfoDelete = document.getElementById("coctailInfoDelete");

coctailInfoDelete.onclick = function() {
    let coctailInfoDelete = prompt("Напишите название напитка, который хотите удалить:");
    let coctailInfoAbout = document.getElementById("coctailInfoAbout");

    if(coctailStorage.deleteValue(coctailInfoDelete) === true) {
        coctailInfoAbout.innerHTML = "Вы удалили напиток";
    }
    else {
        coctailInfoAbout.innerHTML = "Такой напиток не найден";
    }
}

let coctailList = document.getElementById("coctailList");

coctailList.onclick = function() {
    let coctailInfoAbout = document.getElementById("coctailInfoAbout");
    coctailInfoAbout.innerHTML = coctailStorage.getKeys();
}

