import fe_layout1_html from './public/fe_layout1.html';
import fe_layout2_html from './public/fe_layout2.html';

let layout1 = fe_layout1_html;
let layout2 = fe_layout2_html;
let main_iframe = document.querySelector('#main_frame');
let main_element = main_iframe.contentDocument || main_iframe.contentWindow.document;
const fe_layout1 = document.querySelector('#fe_layout1');
const fe_layout2 = document.querySelector('#fe_layout2');


function changeFrame(target) {
    main_element.lastChild.style.display = "none";
    main_element.lastChild.innerHTML = target;

    setTimeout(function() {
        main_element.lastChild.style.display = "block";
    }, 100);
}

fe_layout1.addEventListener('click', (e) => {
    changeFrame(layout1);
});

fe_layout2.addEventListener('click', (e) => {
    changeFrame(layout2);
});
