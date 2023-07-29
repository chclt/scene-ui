document.addEventListener('DOMContentLoaded',function(){
    document.body.addEventListener('sceneraisin', (event) => {
        console.log('sceneraisin', event.detail);
        const raisin = document.createElement('scene-raisin');
        raisin.text = event.detail.text;
        document.body.appendChild(raisin);
    });
});