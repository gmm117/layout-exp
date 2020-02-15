import fe_layout1_html from '../public/fe_layout1.html';
import fe_layout2_html from '../public/fe_layout2.html';
import fe_layout3_html from '../public/fe_layout3.html';
import {fe2_initialize} from '/src/fe_layout2';
import {fe3_initialize} from '/src/fe_layout3';

let layout1 = fe_layout1_html;
let layout2 = fe_layout2_html;
let layout3 = fe_layout3_html;
let main_iframe = document.querySelector('#main_frame');
let main_element = main_iframe.contentDocument || main_iframe.contentWindow.document;
const fe_layout1 = document.querySelector('#fe_layout1');
const fe_layout2 = document.querySelector('#fe_layout2');
const fe_layout3 = document.querySelector('#fe_layout3');

function changeFrame(target, initfunc) {
    main_element.lastChild.style.display = "none";
    main_element.lastChild.innerHTML = target;
    main_iframe.style.height = main_element.lastChild.height;

    if(initfunc) {
        initfunc(main_element);
    }

    setTimeout(function() {
        main_element.lastChild.style.display = "block";
    }, 100);
}

fe_layout1.addEventListener('click', (e) => {
    changeFrame(layout1, null);
});

fe_layout2.addEventListener('click', (e) => {
    changeFrame(layout2, fe2_initialize);
});

fe_layout3.addEventListener('click', (e) => {
    changeFrame(layout3, fe3_initialize);
});

changeFrame(layout1);
