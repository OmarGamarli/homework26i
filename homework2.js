1)
//как расшифровывается DOM?
Document Object Model

2)
//для чего нужен DOM?
С помощью HTML DOM JavaScript может получать доступ ко всем элементам НТМL-документа и изменять их.

3)
//измените содержимое тега 'p' на 'Новый текст'
const text=document.getElementById('txt')
text.innerText='another text'
<p id="txt">Some text</p>



4)
//выведите в консоли содержимое тега 'p'
const text=document.getElementById('txt')
console.log(text.innerText);
<p id="txt">Some text</p>


5)
//получите доступ к элементу с помощью (get...)
const get=document.getElementsByClassName('master')
<div class="master"></div>



6)
//получите доступ к элементу с помощью (get...)
const get=document.getElementById('master')

<div id="master"></div>

7)
//получите доступ к элементу с помощью (get...)
const empty=document.getElementsByTagName('div')
<div></div>

8)
//получите доступ к элементу с помощью (query...) через имя атрибута
<div title="someText"></div>

???

9)
//получите доступ к элементу с помощью (query...) через имя и значение атрибута
<div title="someText"></div>


???

10)
//получите доступ к элементу с помощью (query...) через тег, имя и значение атрибута
<div title="someText"></div>


???

11)
//получите доступ к элементу с помощью (query...) через имя класса
const stext =document.querySelector('.sometext')
<div class="someText"></div>

12)
//получите доступ к элементу с помощью (query...) через имя идентификатора
const stext2 =document.querySelector('#sometext')

<div id="someText"></div>

13)
//получите доступ к элементу с помощью (query...) через тег
const stext3 =document.querySelector('div')

<div></div>

14)
//измените значение атрибута 'type' на 'number' с помощью DOM метода
const inp=document.querySelector('input')
inp.type='number'
//<input type="text">

15)
//измените фоновый цвет блока div на красный с помощью DOM метода
const idd=document.getElementById('block')
idd.style.background='red'
<div id='block'></div>

16)

//добавьте атрибут 'title' со значением 'message' для блока нижу с помощью DOM метода
// ????
// 17)
//с помощью какого метода DOM можно создать элемент в javascript?
// ????

// 18)
//с помощью какого метода DOM можно удалить элемент в javascript?
// ????

// 19)
//с помощью какого метода DOM можно добавить элемент в javascript?
// ????

// 20)
//с помощью какого метода DOM можно заменить элемент в javascript?
// ????

// 21)
//с помощью какого метода DOM можно записать текст в элемент в javascript?
// ????
