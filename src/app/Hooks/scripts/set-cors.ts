// const admin = require('firebase-admin');
import admin from 'firebase-admin';
const serviceAccount = require('../firebase-admin-config.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET
});

async function setCors() {
  await admin.storage().bucket().setCorsConfiguration([{
    origin: [
      process.env.NEXT_PUBLIC_ORIGIN || 'http://localhost:3000',
      'https://your-production-domain.com'
    ],
    method: ['GET', 'PUT', 'POST', 'DELETE', 'OPTIONS'],
    maxAgeSeconds: 3600
  }]);
  console.log('CORS configured successfully');
}

setCors().catch(console.error);