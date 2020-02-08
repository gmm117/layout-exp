import fe_layout1_html from './public/fe_layout1.html';
import fe_layout2_html from './public/fe_layout2.html';

let layout1 = fe_layout1_html;
let layout2 = fe_layout2_html;
let main_iframe = document.querySelector('#main_frame');
const fe_layout1 = document.querySelector('#fe_layout1');
const fe_layout2 = document.querySelector('#fe_layout2');

if(layout1) {
    main_iframe.contentDocument.documentElement.innerHTML = layout1;
}

fe_layout1.addEventListener('click', function(e) {
    main_iframe.contentDocument.documentElement.innerHTML = layout1;
});

fe_layout2.addEventListener('click', (e) => {
    main_iframe.contentDocument.documentElement.innerHTML = layout2;
});