## Демо-версия проекта

-   [Смотреть](https://whoosh-frontend.netlify.app)

## Запуск проекта

```
npm install - устанавливаем зависимости
npm run start:dev или npm run start:dev:vite - запуск сервера + frontend проекта в dev режиме
```

---

## Скрипты

-   `npm run start` - Запуск frontend проекта
-   `npm run start:dev` - Запуск frontend проекта c сервером
-   `npm run build` - Сборка в dev режиме (не минимизирован)
-   `npm run lint:ts` - Проверка ts файлов линтером
-   `npm run lint:ts:fix` - Исправление ts файлов линтером
-   `npm run lint:scss` - Проверка scss файлов style линтером
-   `npm run lint:scss:fix` - Исправление scss файлов style линтером

---

## Архитектура проекта

Проект написан в соответствии с методологией Feature sliced design

Ссылка на документацию - [feature sliced design](https://feature-sliced.design/docs/get-started/tutorial)

---

## Линтинг

В проекте используется eslint для проверки typescript кода и stylelint для проверки файлов со стилями.

Также для строгого контроля главных архитектурных принципов
используется eslint plugin _eslint-plugin-ulbi-tv-plugin_,
который содержит 3 правила

1. path-checker - запрещает использовать абсолютные импорты в рамках одного модуля
2. layer-imports - проверяет корректность использования слоев с точки зрения FSD
   (например widgets нельзя использовать в features и entitites)
3. public-api-imports - разрешает импорт из других модулей только из public api. Имеет auto fix

##### Запуск линтеров

-   `npm run lint:ts` - Проверка ts файлов линтером
-   `npm run lint:ts:fix` - Исправление ts файлов линтером
-   `npm run lint:scss` - Проверка scss файлов style линтером
-   `npm run lint:scss:fix` - Исправление scss файлов style линтером

---

## Сущности (entities)

-   [FirstSection](/src/entities/FirstSection)
-   [SecondSection](/src/entities/SecondSection)
-   [OurPartners](/src/entities/OurPartners)
-   [WhatWeDo](/src/entities/WhatWeDo)
-   [Location](/src/entities/Location)
-   [Payment](/src/entities/Payment)
-   [TextSection](/src/entities/TextSection)
-   [SendParcel](/src/entities/SendParcel)

## Фичи (features)
