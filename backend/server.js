// server.js - UPDATED FOR VITE
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

// Middleware - ALLOW VITE (5173)
app.use(cors({
  origin: 'http://localhost:5173',  // Vite port
  methods: ['GET', 'POST'],
  credentials: true
}));

app.use(express.json());

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/contact_form_db')
  .then(() => console.log('✅ MongoDB Connected!'))
  .catch(err => console.log('❌ MongoDB Error:', err));

// Contact Schema
const contactSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  subject: { type: String, required: true },
  message: { type: String, required: true },
  date: { type: Date, default: Date.now }
});

const Contact = mongoose.model('Contact', contactSchema);

// Save Contact
app.post('/api/contact', async (req, res) => {
  console.log('📨 Received contact form:', req.body);
  
  try {
    const contact = new Contact(req.body);
    await contact.save();
    
    console.log('💾 Saved to MongoDB:', contact._id);
    res.json({ 
      success: true, 
      message: 'Message saved to database!',
      id: contact._id 
    });
    
  } catch (error) {
    console.log('❌ Save error:', error);
    res.status(500).json({ 
      success: false, 
      error: error.message 
    });
  }
});

// Test Route
app.get('/api/test', (req, res) => {
  console.log('✅ Test endpoint called');
  res.json({ 
    message: 'Backend is working with Vite!',
    port: 3000,
    database: 'contact_form_db'
  });
});

// Health check
app.get('/api/health', (req, res) => {
  res.json({
    status: 'healthy',
    backend: 'running on port 3000',
    database: mongoose.connection.readyState === 1 ? 'connected' : 'disconnected'
  });
});

// Start Server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`🚀 Backend Server: http://localhost:${PORT}`);
  console.log(`✅ Ready for Vite on port 5173`);
  console.log(`🔗 Test: http://localhost:${PORT}/api/test`);
  console.log(`❤️  Health: http://localhost:${PORT}/api/health`);
});