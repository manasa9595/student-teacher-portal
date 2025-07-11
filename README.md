## About

Student teacher assessment portal

## TechStack

- **Mockup:** [Figma](https://www.figma.com/design/pNGRifrziQXP28LyQ16OTZ/Manasa-Natukula-s-team-library?node-id=3311-2&m=dev&t=B64bi0o3dIlDNhE8-1)
- **Frontend:** React, Tailwind CSS
- **Backend:** Firebase Firestore
- **Hosting:** TBD
- **Charting:** ApexCharts for data visualization
- **State Management:** React Hooks for reactive UI

## Contribution & Feedback

Open to feedback and feature requests! If you want me to add specific features or improvements, please let me know.

### Setup Firebase

1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Create a new project
3. Enable **Firestore Database**
4. Get your Firebase config (`apiKey`, `projectId`, etc.)
5. Add your Firebase credentials in a file:

```env
FIREBASE_API_KEY=your_key
FIREBASE_PROJECT_ID=your_project
FIREBASE_CLIENT_EMAIL=your_client_email
FIREBASE_PRIVATE_KEY=your_private_key (make sure to replace \n with actual newlines)
```

## 🧑‍💻 Frontend Setup (React)

### 🔧 Prerequisites

- Node.js (>= 18)
- NPM

### ▶️ Run Frontend

```bash
npm install
npm run dev
```
