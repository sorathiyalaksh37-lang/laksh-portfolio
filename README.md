# Laksh Sorathiya - Portfolio

A modern, dark-themed portfolio website showcasing my work as a Software Engineer and AI/ML Engineer. Built with React, Framer Motion, and a Node.js backend with MongoDB for contact form submissions.

## 🎨 Design Features

- **Dark, minimal aesthetic** with bold typography
- **Smooth animations** using Framer Motion
- **Responsive design** that works on all devices
- **Interactive project cards** with hover effects
- **Working contact form** with database integration
- **Professional sections**: Hero, About, Projects, Skills, Contact

## 🚀 Tech Stack

### Frontend
- React 18
- Vite (build tool)
- TailwindCSS (styling)
- Framer Motion (animations)
- Lucide React (icons)

### Backend
- Node.js
- Express
- MongoDB (with Mongoose)
- CORS

## 📦 Installation

### Prerequisites
- Node.js (v18 or higher)
- MongoDB (local installation or MongoDB Atlas account)

### Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/sorathiyalaksh37-lang/laksh-portfolio.git
   cd laksh-portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Configure environment variables**
   ```bash
   cp .env.example .env
   ```
   
   Edit `.env` and add your MongoDB connection string:
   ```
   MONGODB_URI=mongodb://localhost:27017/portfolio
   PORT=5000
   ```

4. **Start MongoDB** (if running locally)
   ```bash
   mongod
   ```

5. **Run the development server**
   
   In one terminal (frontend):
   ```bash
   npm run dev
   ```
   
   In another terminal (backend):
   ```bash
   npm run server
   ```

6. **Open your browser**
   Navigate to `http://localhost:3000`

## 🗂️ Project Structure

```
laksh-portfolio/
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Projects.jsx
│   │   ├── Skills.jsx
│   │   ├── Contact.jsx
│   │   └── Footer.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── server/
│   └── index.js
├── public/
├── index.html
├── package.json
└── README.md
```

## 📊 Database Schema

### Contact Model
```javascript
{
  name: String,
  email: String,
  message: String,
  createdAt: Date,
  read: Boolean
}
```

## 🔧 API Endpoints

### Contact Form
- `POST /api/contact` - Submit contact form
- `GET /api/contacts` - Get all contact submissions (admin)
- `PATCH /api/contacts/:id/read` - Mark contact as read
- `DELETE /api/contacts/:id` - Delete a contact

### Health Check
- `GET /api/health` - Server health status

## 🎯 Features

### Hero Section
- Animated typography
- Smooth scroll navigation
- Social media links
- Call-to-action buttons

### Projects Section
- 6 major AI/ML projects
- Interactive project cards
- Tech stack tags
- Hover animations

### Skills Section
- Categorized technologies
- Languages: Python, TypeScript, JavaScript, SQL, C++
- AI/ML: PyTorch, TensorFlow, BERT, Whisper, RAG
- Backend: FastAPI, Node.js, PostgreSQL, MongoDB
- MLOps: Docker, Kubernetes, CI/CD, AWS

### Contact Form
- Real-time validation
- Database storage
- Success/error feedback
- Direct email fallback

## 🌐 Deployment

### Frontend (Vercel/Netlify)
```bash
npm run build
```

### Backend (Render/Railway/Heroku)
Set environment variables:
- `MONGODB_URI`
- `PORT`

### MongoDB Atlas Setup
1. Create a free cluster at [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
2. Get your connection string
3. Update `MONGODB_URI` in `.env`

## 📱 Contact

- **Email**: sorathiyalaksh37@gmail.com
- **GitHub**: [@sorathiyalaksh37-lang](https://github.com/sorathiyalaksh37-lang)
- **LinkedIn**: [Laksh Sorathiya](https://www.linkedin.com/in/laksh-sorathiya-2a895632b)

## 📄 License

MIT License - feel free to use this portfolio as inspiration for your own!

## 🙏 Acknowledgments

- Design inspired by modern portfolio trends
- Animations powered by Framer Motion
- Icons from Lucide React
- Fonts: Playfair Display, Inter, JetBrains Mono

---

Built with 💛 by Laksh Sorathiya
