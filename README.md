# 🌐 Translation API

A **simple and scalable Language Translation API** built with **Express.js** and **Google Translate API**.  
Translate any text into multiple languages effortlessly! 🚀

---

## 🚀 Features

- Translate text to **any supported language**
- **RESTful API** built with Express.js
- Modular structure: **routes, controllers, utils**
- Easy to extend for other translation services
- Ready for production or quick prototyping

---

## 🛠️ Tech Stack

- **Node.js** & **Express.js** – backend server  
- **Axios** – for HTTP requests to Google Translate  
- **dotenv** – for environment variables  
- **Nodemon** – for development auto-reload  

---

## ⚡ Getting Started

### 1️⃣ Clone the repository

```bash
git clone https://github.com/blaxkmiradev/translation-api.git
cd translation-api
2️⃣ Install dependencies
npm install
3️⃣ Setup environment variables

Create a .env file in the root directory:

GOOGLE_API_KEY=YOUR_GOOGLE_TRANSLATE_API_KEY
PORT=3000

Get your API key from Google Cloud Console
.

4️⃣ Run the server
npm run dev

Server will run on: http://localhost:3000

📝 API Usage
POST /api/translate

Request Body:

{
  "text": "Hello World",
  "targetLang": "es"
}

Response:

{
  "translatedText": "Hola Mundo"
}

Supported Languages:
Check Google Translate API Languages
 for full list.

🧩 Project Structure
translation-api/
│
├── server.js                # Main server file
├── routes/
│   └── translate.js         # Route definitions
├── controllers/
│   └── translateController.js
├── utils/
│   └── googleTranslate.js   # Google Translate helper
├── .env                     # Environment variables
├── package.json
└── README.md
💡 Example with cURL
curl -X POST http://localhost:3000/api/translate \
-H "Content-Type: application/json" \
-d '{"text": "Good morning", "targetLang": "fr"}'

Response:

{
  "translatedText": "Bonjour"
}
✨ Future Enhancements
Add OpenAI GPT-based translation for context-aware translations
Add language detection endpoint
Rate limiting and caching for faster responses
📜 License

MIT License © 2026
