function iniciar(){
    Navegar.login();

    //instalación del service worker
        if ('serviceWorker' in navigator) {
          window.addEventListener('load', () =>
         navigator.serviceWorker.register('sw.js')
          .then(registration => console.log('Service Worker registered'))
          .catch(err => 'SW registration failed'));
        };
        
        requestPermission();
      }
      
      if ('Notification' in window) {};
      
      function requestPermission() {
        if (!('Notification' in window)) {
          console.log('Notification API not supported!');
          return;
        }
        
        Notification.requestPermission(function (result) {
          //$status.innerText = result;
        });
      
        document.getElementById('btnLogOut').addEventListener('click',()=>{
            funciones.Confirmacion('¿Está seguro que desea salir?')
            .then((value)=>{
              if(value==true){
                  Navegar.login();
                }
              })
        })
};


iniciar();


funciones.instalationHandlers('btnInstalarApp');