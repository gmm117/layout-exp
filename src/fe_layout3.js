export function fe3_initialize(docTarget) {
    let guide_header_right1 = docTarget.querySelector('#guide_header_right1');
    let guide_header_right2 = docTarget.querySelector('#guide_header_right2');

    if(guide_header_right1) {
        let guide_content_1 = docTarget.querySelector('.guide_content_1');
        let guide_divide_1 = docTarget.querySelector('#guide_divide_1');
        guide_header_right1.addEventListener('click', (e) => {
            if(guide_content_1.style.display === "block") {
                guide_content_1.style.display = "none";
            } else {
                guide_content_1.style.display = "block";
            }

            if(guide_divide_1.style.display === "block") {
                guide_divide_1.style.display = "none";
            } else {
                guide_divide_1.style.display = "block";
            }
        });
    }

    if(guide_header_right2) {
        let guide_content_2 = docTarget.querySelector('.guide_content_2');
        guide_header_right2.addEventListener('click', (e) => {
            if(guide_content_2.style.display === "block") {
                guide_content_2.style.display = "none";
            } else {
                guide_content_2.style.display = "block";
            }            
        });
    }
}
