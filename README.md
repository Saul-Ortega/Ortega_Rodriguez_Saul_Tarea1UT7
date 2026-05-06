# NUI (NATURAL USER INTERFACE)

Project that reads gestures and voice commands to do certain actions in the page.

## 🛠️ Stack & Tools

[![React](https://img.shields.io/badge/React-%2320232a.svg?logo=react&logoColor=%2361DAFB)](#)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=000)](#)
[![Postman](https://img.shields.io/badge/Postman-FF6C37?logo=postman&logoColor=white)](#)

## 📁 Project Structure

```
src/
├── components/
│   ├── ar/
│   │   ├── EjAR.jsx
│   │   ├── XrCube.jsx
│   │   └── XrIcosahedron.jsx
│   ├── gestos/
│   │   ├── EjGestos.jsx
│   │   └── Texto.jsx
│   ├── voz/
│   │   ├── EjVoz.jsx
│   │   ├── EjVozComandos.jsx
│   │   └── VozLibrosComandos.jsx
│   ├── AR.jsx
│   ├── ARSaul.jsx
│   ├── BookCard.jsx
│   ├── Dashboard.jsx
│   ├── Gestos.jsx
│   ├── Home.jsx
│   ├── VozEj1.jsx
│   ├── VozEj2.jsx
│   └── VozLibros.jsx
└── controller/
    ├── searchByAuthor.js
    └── searchByCategory.js
```

## ▶️ Installation

1. Clone the project

   ```bash
      git clone https://github.com/Saul-Ortega/Ortega_Rodriguez_Saul_Tarea1UT7.git
   ```

2. Move to the created folder

   ```bash
      cd PATH_TO_THE_FOLDER
   ```

3. Install the necessary dependencies

   ```bash
      npm install
   ```

4. Create a dotenv file in the project root

   ```bash
      touch .env
   ```

5. Add the corresponding values to the dotenv file

   ```bash
      VITE_BIG_BOOK_API=VALUE
   ```

6. Run the project

   ```bash
      npm run dev
   ```

7. Navigate to the following url:

    ```bash
      http://localhost:5173/
   ```