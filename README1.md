Safe Submit
Safe Submit is a lightweight solution for hosting submission messages without the need for server access. This application is designed for websites that lack server capabilities or those that cannot afford traditional server hosting. Safe Submit offers a simple submission form, analytics, and automated deletion of old messages.

Features
Submission Form:

Collect user feedback and queries with a simplified form.
Fields include fieldName, userName, clientQueryName, userEmail, userPhone, and userQuery.
Analytics:

Gather data on submitted messages, including timestamp and other relevant statistics.
Use the analytics to gain insights into user interactions.
Automatic Deletion:

Automatically delete messages older than a specified age to maintain simplicity and optimize storage.
Client-Side App:

Provides a client-side app for users to view submitted queries and user feedback.
App allows users to improve their product based on received queries.
Server-Side Rendering with Nuxt.js
This application is built with Nuxt.js, a framework for server-side rendering in Vue.js. The server-side rendering enhances performance and improves search engine optimization.

Project Structure
pages/index.vue: Landing page.
pages/submissions.vue: Page for viewing submitted messages.
plugins/firebase.js: Firebase configuration for data storage.
Firebase Setup
Create a Firebase project on the Firebase Console.
Set up the Firebase Realtime Database to store submission messages.
Configure the plugins/firebase.js file with your Firebase project details.
Deployment
Install dependencies:

bash
Copy code
npm install
Deploy the app:

bash
Copy code
npm run generate
This will generate the static files in the dist directory.

Host the static files on any static hosting service (e.g., Netlify, Vercel) or deploy them to a server.

Contributing
We welcome contributions to enhance and improve Safe Submit. If you have suggestions, bug fixes, or new features:

Fork the repository.

Create a new branch for your changes:

bash
Copy code
git checkout -b feature/your-feature
Make your changes and commit:

bash
Copy code
git commit -m "Add your commit message"
Push your changes to your fork:

bash
Copy code
git push origin feature/your-feature
Create a pull request on the main repository.

Security Considerations
Ensure that you follow security best practices, especially if you plan to store sensitive information. If you use Firebase, configure Firebase Security Rules accordingly.

License
This project is licensed under the MIT License.

Happy submitting!
