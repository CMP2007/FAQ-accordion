const details = document.querySelectorAll('details');
const icon = document.querySelectorAll('.icon')

details.forEach(function(item){
    item.addEventListener('click', function(e) {
        const clickedItem = this;

        let id = clickedItem.getAttribute('id');

        if(clickedItem.hasAttribute('open')){
            icon[id].setAttribute('src', './assets/images/icon-plus.svg' )
            console.log('Details collapsed');
        } else {
            console.log('Details open'); 
            icon[id].setAttribute('src', './assets/images/icon-minus.svg' )
        }   
    });
});