// Service Worker file required for Background Web Push Notifications
importScripts('https://www.gstatic.com/firebasejs/10.8.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.8.0/firebase-messaging-compat.js');

const firebaseConfig = {
    apiKey: "AIzaSyC0Ugl8OiCZwWKr2PkgztZKALdEz-gmLSY",
    authDomain: "nafis-foods.firebaseapp.com",
    projectId: "nafis-foods",
    storageBucket: "nafis-foods.firebasestorage.app",
    messagingSenderId: "856645833481",
    appId: "1:856645833481:web:f18f1d582b280d083239d8"
};

firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging();

// Handle showing the popup card when the browser tab is closed/backgrounded
messaging.onBackgroundMessage((payload) => {
    const notificationTitle = payload.notification.title;
    const notificationOptions = {
        body: payload.notification.body,
        icon: 'logo.jpg'
    };
    self.registration.showNotification(notificationTitle, notificationOptions);
});
