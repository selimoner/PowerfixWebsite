# PowerFix Construction Adhesive Company Website

## Overview

This is a full-stack web application for PowerFix, a construction adhesive manufacturing company based in Rwanda. The application serves as a professional corporate website showcasing their product portfolio, company information, and providing contact capabilities for potential customers and partners.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Styling**: Tailwind CSS with custom CSS variables for brand colors
- **UI Components**: Radix UI primitives with shadcn/ui component library
- **Routing**: Wouter for client-side routing
- **State Management**: React Query (TanStack Query) for server state management
- **Forms**: React Hook Form with Zod validation
- **Build Tool**: Vite for development and production builds

### Backend Architecture
- **Runtime**: Node.js with Express.js server
- **Language**: TypeScript with ES modules
- **Database**: PostgreSQL with Drizzle ORM
- **Database Provider**: Neon Database (@neondatabase/serverless)
- **Session Management**: PostgreSQL-based sessions with connect-pg-simple
- **API Design**: RESTful API endpoints under `/api` prefix

### Database Schema
- **ORM**: Drizzle ORM with PostgreSQL dialect
- **Migration Strategy**: Schema-first approach with migrations in `/migrations` directory
- **Current Schema**: Basic user management system with users table containing id, username, and password fields
- **Validation**: Zod schemas for type-safe database operations

## Key Components

### Frontend Components
- **Layout Components**: Header with navigation, Footer with company info and links
- **Page Components**: Home, About, Products, Contact, and 404 pages
- **UI Components**: Comprehensive set of accessible components from shadcn/ui
- **Special Features**: WhatsApp floating button for direct customer communication

### Backend Components
- **Route Handlers**: Contact form submission endpoint with validation
- **Storage Layer**: Abstracted storage interface with in-memory implementation
- **Error Handling**: Centralized error handling middleware
- **Development Tools**: Request logging and response timing

### Brand Implementation
- **Color System**: Custom PowerFix brand colors (yellow, red, dark gray) integrated into Tailwind CSS
- **Typography**: Professional typography system with consistent spacing
- **Logo**: Text-based logo using brand colors (POWER in red, FIX in dark)

## Data Flow

1. **Frontend to Backend**: Form submissions use fetch API with JSON payloads
2. **Validation**: Client-side validation with React Hook Form + Zod, server-side validation with Zod
3. **Database Operations**: Drizzle ORM handles all database interactions
4. **State Management**: React Query manages server state caching and synchronization
5. **Error Handling**: Errors propagate through the system with proper HTTP status codes

## External Dependencies

### Production Dependencies
- **UI Framework**: React ecosystem with Radix UI primitives
- **Database**: PostgreSQL via Neon Database serverless
- **Styling**: Tailwind CSS with PostCSS processing
- **Form Management**: React Hook Form with Zod validation
- **Date Handling**: date-fns for date formatting
- **Icons**: Lucide React for consistent iconography

### Development Dependencies
- **Build System**: Vite with TypeScript support
- **Development Server**: Express with Vite middleware integration
- **Code Quality**: TypeScript strict mode enabled
- **Runtime**: tsx for TypeScript execution in development

## Deployment Strategy

### Build Process
1. **Frontend Build**: Vite builds React application to `dist/public`
2. **Backend Build**: esbuild bundles server code to `dist/index.js`
3. **Database**: Drizzle migrations deployed via `db:push` command

### Environment Configuration
- **Development**: Uses NODE_ENV=development with tsx for hot reloading
- **Production**: NODE_ENV=production with compiled JavaScript
- **Database**: Requires DATABASE_URL environment variable for PostgreSQL connection

### Server Setup
- **Static Files**: Express serves built frontend from `dist/public`
- **API Routes**: All API endpoints prefixed with `/api`
- **Development**: Vite dev server integrated with Express for HMR
- **Production**: Standalone Express server serving static files and API

### Key Features
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Contact Form**: Functional contact form with validation and submission
- **Product Showcase**: Professional product catalog with detailed specifications
- **Company Information**: Complete company profile with mission, vision, and contact details
- **WhatsApp Integration**: Direct customer communication via floating WhatsApp button
- **Professional Branding**: Consistent brand implementation throughout the application