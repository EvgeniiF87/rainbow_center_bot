const commands = `
/start - Перезапустить
/help - Помощь
`

const teachers = `
Фёдорова Анастасия
`

//Логопедические занятия
const course1 = `
- Диагностика уровня речевого развития.

- Коррекция звукопроизношения, нарушений лексико-грамматического строя речи, слоговой структуры слова.

- Развитие фонематического слуха, внимания, восприятия, памяти, связной речи, мелкой моторики, речевого дыхания.

- Обогащение словарного запаса.

<b>Длительность занятия - 30 минут</b>
<b>Стоимость - 3 000 тнг</b>
<b>Диагностика - 2 000 тнг</b>
`;

//Скорочтение
const course2 = `
- Обучение приёмам "быстрого чтения"

- Разбор основных "ошибок" чтения

- Обучение приёмам анализа текста

- Упражнения для развития памяти и внимания

<b>Длительность занятия - 60 минут</b>
<b>Стоимость - 2 500 тнг</b>
`;

//Индивидуальные занятия
const course3 = `
<b>Длительность занятия - 60 минут</b>
<b>Стоимость - 2 500 тнг</b>
`;


//Подготовка к школе(6-7 лет) на государственном языке
/*const course4_kaz = `

`;*/

//Подготовка к школе(6-7 лет) на русском языке
const course4_rus = `
<b>- "Чтение и грамматика"</b> - обучение чтению, обогащение словарного запаса, звуко - буквенный анализ слова, формирование грамотности

<b>- "Счёт"</b> - формирование математических представлений о числах и цифрах, овладение вычислительными навыками

<b>- "Логика"</b> - развитие интеллектуальных способностей, гибкости мыслительных процессов

<b>- "Письмо"</b> - развитие мелкой моторики, постановка руки, развитие зрительного анализа, письмо под диктовку

<b>- "Развитие речи"</b> - развитие фонематического слуха, пополнение активного и пассивного словарного запаса, развитие выразительной связной речи
`;


//Подготовка к школе(5-6 лет) на государственном языке
/*const course4_kaz = `

`;*/


//Подготовка к школе(5-6 лет) на русском языке
/*const course5_rus = `
<b>- "Чтение и грамматика"</b> - обучение чтению, обогащение словарного запаса, звуко - буквенный анализ слова, формирование грамотности

<b>- "Счёт"</b> - формирование математических представлений о числах и цифрах, овладение вычислительными навыками

<b>- "Логика"</b> - развитие интеллектуальных способностей, гибкости мыслительных процессов

<b>- "Письмо"</b> - развитие мелкой моторики, постановка руки, развитие зрительного анализа, письмо под диктовку

<b>- "Развитие речи"</b> - развитие фонематического слуха, пополнение активного и пассивного словарного запаса, развитие выразительной связной речи
`;*/


//Наше местоположение
const mapinfo = `
<b>Улица Камзина 171</b>

<b>Новый Караван, 3 этаж</b>

<b>Кабинеты: 302А, 304А</b>

<a href="https://yandex.kz/MAPS/-/CCUmiXeCCB">Посмотреть на карте</a>
`;

module.exports.commands = commands
module.exports.teachers = teachers
module.exports.course1 = course1
module.exports.course2 = course2
module.exports.course3 = course3
module.exports.course4_rus = course4_rus
// module.exports.course5_rus = course5_rus
module.exports.mapinfo = mapinfo