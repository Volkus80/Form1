"use strict";

const text = document.querySelector('#text');
const func = {
    getElem: function(elem) {return document.querySelector(elem)},
    addElem: function(tag) {return document.createElement(tag)},


};
 let check1 = func.getElem('#check1');
 let check2 = func.getElem('#check2');
 let check3 = func.getElem('#check3');
 let check4 = func.getElem('#check4');

 


text.addEventListener('blur', function() {
    let str = text.value.toLowerCase();
    
    if (check1.checked) {
        let result = func.addElem('p');
        result.innerHTML = 'Количество слов -' + str.split(' ').length;
        text.parentElement.lastElementChild.append(result);
        
    }
    
    if (check2.checked) {
        let result = func.addElem('p');
        result.innerHTML = 'Количество символов -' + str.length;
        text.parentElement.lastElementChild.append(result);
        
    }

    if (check3.checked) {
        let result = func.addElem('p');
        result.innerHTML = 'Количество символов без пробелов -' + str.split(' ').join('').length;
        text.parentElement.lastElementChild.append(result);
        
    }
    
    if (check4.checked) {
        let count = {};
        for (let i = 0; i < str.length; i++) {
            if (count[str[i]]) {
                count[str[i]]++;
            } else {
                count[str[i]] = 1;
            }
        }
        let result = document.createElement('p');
        result.innerHTML = 'Строка содержит';
        for (let key in count) {
            result.innerHTML+= ` символов <q>${key}</q> \-\ ${(count[key]*100/str.length).toFixed(2)}%;`;
        }
        text.parentElement.lastElementChild.append(result);
        
    }

    text.addEventListener('focus', function() {
        let results = document.querySelectorAll('p');
        for (let result of results) {
            result.remove();
        }
    })
});

