import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import dotenv from 'dotenv'

dotenv.config()

const app = express()
const PORT = process.env.PORT || 5000

// Middleware
app.use(cors())
app.use(express.json())

// MongoDB Connection
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/portfolio'

mongoose.connect(MONGODB_URI)
  .then(() => console.log('✓ Connected to MongoDB'))
  .catch((err) => console.error('✗ MongoDB connection error:', err))

// Contact Schema
const contactSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  email: {
    type: String,
    required: true,
    trim: true,
    lowercase: true
  },
  message: {
    type: String,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  read: {
    type: Boolean,
    default: false
  }
})

const Contact = mongoose.model('Contact', contactSchema)

// Routes

// Health check
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', message: 'Server is running' })
})

// Submit contact form
app.post('/api/contact', async (req, res) => {
  try {
    const { name, email, message } = req.body

    // Validation
    if (!name || !email || !message) {
      return res.status(400).json({
        success: false,
        message: 'All fields are required'
      })
    }

    // Create new contact entry
    const contact = new Contact({
      name,
      email,
      message
    })

    await contact.save()

    res.status(201).json({
      success: true,
      message: 'Message received! Thank you for reaching out.',
      data: {
        id: contact._id,
        name: contact.name,
        email: contact.email
      }
    })
  } catch (error) {
    console.error('Error saving contact:', error)
    res.status(500).json({
      success: false,
      message: 'Failed to save message. Please try again.'
    })
  }
})

// Get all contacts (for admin/viewing)
app.get('/api/contacts', async (req, res) => {
  try {
    const contacts = await Contact.find().sort({ createdAt: -1 })
    res.json({
      success: true,
      count: contacts.length,
      data: contacts
    })
  } catch (error) {
    console.error('Error fetching contacts:', error)
    res.status(500).json({
      success: false,
      message: 'Failed to fetch contacts'
    })
  }
})

// Mark contact as read
app.patch('/api/contacts/:id/read', async (req, res) => {
  try {
    const contact = await Contact.findByIdAndUpdate(
      req.params.id,
      { read: true },
      { new: true }
    )

    if (!contact) {
      return res.status(404).json({
        success: false,
        message: 'Contact not found'
      })
    }

    res.json({
      success: true,
      data: contact
    })
  } catch (error) {
    console.error('Error updating contact:', error)
    res.status(500).json({
      success: false,
      message: 'Failed to update contact'
    })
  }
})

// Delete contact
app.delete('/api/contacts/:id', async (req, res) => {
  try {
    const contact = await Contact.findByIdAndDelete(req.params.id)

    if (!contact) {
      return res.status(404).json({
        success: false,
        message: 'Contact not found'
      })
    }

    res.json({
      success: true,
      message: 'Contact deleted successfully'
    })
  } catch (error) {
    console.error('Error deleting contact:', error)
    res.status(500).json({
      success: false,
      message: 'Failed to delete contact'
    })
  }
})

// Start server
app.listen(PORT, () => {
  console.log(`✓ Server running on port ${PORT}`)
  console.log(`✓ API available at http://localhost:${PORT}/api`)
})
