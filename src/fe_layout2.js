export function fe2_initialize(docTarget) {
    let goods_buysort = docTarget.querySelector('#goods_buysort');
    let goods_buysort_list = docTarget.querySelector('#goods_buysort_list');

    if(goods_buysort && goods_buysort_list) {
        goods_buysort.addEventListener('click', (e) => {
            if(goods_buysort_list.style.display === "block") {
                goods_buysort_list.style.display = "none";
            } else {
                goods_buysort_list.style.display = "block";
            }
        });
    }
}
