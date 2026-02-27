# Ecosopis - Product Landing Page

## Overview
A product landing page for "Ecosopis" promoting an artisanal "Saffron and Dolomite Soap" (Sabonete de Açafrão e Dolomita). Includes an AI-powered virtual assistant named "Lia" built with Groq's LLaMA model.

## Architecture

### Frontend (client/)
- React 18 + TypeScript
- Vite for build tooling
- Tailwind CSS v3 for styling
- Radix UI primitives for accessible UI components
- Framer Motion for animations
- TanStack React Query for server state
- Wouter for routing

### Backend (server/)
- Node.js + Express v5
- In-memory storage (MemStorage) for inquiries
- Groq API integration for AI chat (Lia assistant)
- Vite dev server integration in development

### Shared (shared/)
- Drizzle ORM schema definitions
- Zod validation schemas
- Shared API route definitions

## Key Features
- Marketing sections: Hero, Benefits, Ingredients, How To Use, Technical Specs
- AI chat assistant "Lia" powered by Groq's llama-3.3-70b-versatile model
- Inquiry submission form
- Responsive mobile-friendly design

## Environment Variables
- `GROQ_API_KEY` - Required for the Lia AI assistant chat feature

## Running the App
- Development: `npm run dev` (uses tsx to run server/index.ts, serves Vite dev server)
- Production: `npm run build && npm start`

## Port
- Server listens on port 5000 (or `PORT` env variable)
- Host: 0.0.0.0 for Replit compatibility
