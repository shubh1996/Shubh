
funcc = function(x){
  

}

$(document).ready(function(){

if (!('Notification' in window)) {
  console.log('This browser does not support notifications!');
  return;
}
Notification.requestPermission(function(status) {
  console.log('Notification permission status:', status);
});

displayNotification = function(){

if (Notification.permission == 'granted') {
  navigator.serviceWorker.getRegistration().then(function(reg) {

    // TODO 2.4 - Add 'options' object to configure the notification
    var options = {
  body: 'Notifications!!! Cool noe??',
  icon: 'images/favicon.png',
  vibrate: [100, 50, 100],
  data: {
    primaryKey: 1
  }
};

    reg.showNotification('SHUBH',options);
  });
}
};
 noti = function(){
  displayNotification();
  };
});

(function(){
      if(!'serviceWorker' in navigator)
      {
        alert('Service Worker not supported. Use a different browser');
        return;
      }
      navigator.serviceWorker.register('serviceWorker.js')
      .then(function(registration){
        console.log('Registered Service Worker');
      })
      .catch(function(error){
        console.log('Registration Failed. Error - '+error);
      });
})();