# safe-submit
safe-submit 
Guidelines:
Installation:

Ensure you have Node.js and npm installed.

Install Nuxt.js:

bash
Copy code
npx create-nuxt-app safe-submit
cd safe-submit
npm install
Project Structure:

Create a pages directory in the Nuxt.js project to organize your pages.
Inside the pages directory, create index.vue for the landing page and submissions.vue for the submissions page.
Server-side Rendering:

Use Nuxt.js to create server-side rendered pages.
Client-side App:

Create a Vue.js component for the submission form.
Data Storage:

Use a simple backend (e.g., Firebase) to store submitted messages.
Automatic Message Deletion:

Implement a script (e.g., using a cloud function) to delete old messages.
