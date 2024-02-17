// Example cloud function using Firebase Functions
const functions = require('firebase-functions');
const admin = require('firebase-admin');
admin.initializeApp();

const MAX_MESSAGE_AGE_DAYS = 30; // Maximum age of messages in days

exports.deleteOldMessages = functions.pubsub.schedule('every 24 hours').onRun(async (context) => {
  const messagesRef = admin.database().ref('messages');

  const snapshot = await messagesRef.once('value');
  const messages = snapshot.val();

  const currentTime = Date.now();
  const maxAgeMillis = MAX_MESSAGE_AGE_DAYS * 24 * 60 * 60 * 1000;

  for (const messageId in messages) {
    const messageTime = messages[messageId].timestamp;
    if (currentTime - messageTime > maxAgeMillis) {
      await messagesRef.child(messageId).remove();
    }
  }

  return null;
});
