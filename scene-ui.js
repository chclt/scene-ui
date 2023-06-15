document.addEventListener('DOMContentLoaded',function(){
    document.body.addEventListener('scenetoast', (event) => {
        console.log('scenetoast', event.detail);
        const toast = document.createElement('scene-toast');
        toast.text = event.detail.text;
        document.body.appendChild(toast);
    });
});