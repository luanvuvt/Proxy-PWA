if ('serviceWorker' in navigator) {
  window.addEventListener('load', function() {
    navigator.serviceWorker.register('/sw.js').then(function(registration) {
      // Registration was successful
      console.log('ServiceWorker registration successful with scope: ', registration.scope);
    }, function(err) {
      // registration failed :(
      console.log('ServiceWorker registration failed: ', err);
    });

    Array.from(document.querySelectorAll('a')).forEach(el => {
      if (el.href.includes('vnexpress.net')) {
        el.href = el.href.replace("vnexpress.net", "localhost:8866");
  
        fetch(el.href)
        .then(res => {
          console.log(res);
        })
      }
    });
  });
}