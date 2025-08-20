# Binal Studio - Professional Photography Website

## Overview

Binal Studio is a premium photography website featuring immersive 3D galleries and professional services by photographer Gopal Bhai Gohel. The application combines cutting-edge web technologies with artistic presentation to showcase wedding, fashion, corporate, and baby photography services. The site features interactive 3D photo galleries, real-time pricing calculators, and a comprehensive portfolio management system.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **React 18 + TypeScript**: Modern component-based architecture with type safety
- **Vite Build System**: Fast development and optimized production builds
- **Tailwind CSS + Radix UI**: Utility-first styling with accessible component primitives
- **3D Graphics**: Three.js ecosystem (@react-three/fiber, @react-three/drei, @react-three/postprocessing) for immersive photo galleries
- **Animation**: Framer Motion for smooth transitions and interactive elements
- **State Management**: Zustand stores for audio, pricing, and game state management
- **Data Fetching**: TanStack Query for server state management

### Backend Architecture
- **Express.js**: RESTful API server with middleware for logging and error handling
- **TypeScript**: Type-safe server development
- **Modular Route System**: Centralized route registration in `server/routes.ts`
- **Development Integration**: Vite middleware for hot module replacement in development
- **Storage Interface**: Abstracted storage layer supporting both memory and database implementations

### Database Layer
- **Drizzle ORM**: Type-safe database operations with PostgreSQL dialect
- **Schema Management**: Centralized schema definitions in `shared/schema.ts`
- **Migration System**: Automated database migrations via Drizzle Kit
- **Connection**: Neon Database serverless PostgreSQL integration

### Design System
- **Component Library**: Custom UI components built on Radix primitives
- **Theme System**: CSS custom properties with dark mode support
- **Typography**: Inter font with cinematic and luxury text styles
- **Glass Morphism**: Modern glassmorphic design elements
- **Responsive Design**: Mobile-first approach with Tailwind breakpoints

### 3D Gallery System
- **WebGL Rendering**: Hardware-accelerated 3D graphics via Three.js
- **Interactive Photo Frames**: Hover effects and smooth animations
- **Asset Loading**: Support for GLTF, GLB models and various media formats
- **Shader Support**: GLSL shader integration for advanced visual effects
- **Performance Optimization**: Lazy loading and efficient rendering

### Content Management
- **Portfolio Categories**: Structured data organization for different photography types
- **Service Packages**: Configurable pricing tiers with feature lists
- **Dynamic Galleries**: Category-based photo organization and filtering
- **Pricing Calculator**: Real-time cost estimation with customizable options

### Development Workflow
- **Monorepo Structure**: Shared types and schemas between client and server
- **Hot Reloading**: Development server with instant feedback
- **Type Safety**: End-to-end TypeScript coverage
- **Build Optimization**: Production builds with code splitting and asset optimization
- **Error Handling**: Runtime error overlays in development

## External Dependencies

### Database Services
- **Neon Database**: Serverless PostgreSQL hosting with connection pooling
- **Drizzle Kit**: Database migration and schema management tools

### Media & Assets
- **Pixabay API**: Stock photography for portfolio demonstrations
- **Google Fonts**: Inter font family for typography
- **GLSL Shaders**: Custom shader support for 3D effects

### UI Framework
- **Radix UI**: Accessible component primitives for forms, dialogs, and navigation
- **Lucide React**: Consistent icon library
- **Framer Motion**: Animation and gesture library

### 3D Graphics
- **Three.js**: Core 3D rendering engine
- **React Three Fiber**: React renderer for Three.js
- **React Three Drei**: Utility components for common 3D patterns
- **React Three Postprocessing**: Visual effects and post-processing

### Development Tools
- **Vite**: Build tool with fast HMR and optimized bundling
- **TypeScript**: Static type checking and development tooling
- **ESBuild**: Fast JavaScript bundler for server-side builds
- **Replit Integration**: Runtime error modal for development feedback

### Styling & Design
- **Tailwind CSS**: Utility-first CSS framework
- **PostCSS**: CSS processing with Autoprefixer
- **Class Variance Authority**: Component variant management
- **CLSX & Tailwind Merge**: Conditional styling utilities

### State & Data Management
- **Zustand**: Lightweight state management for client-side stores
- **TanStack Query**: Server state management with caching and synchronization
- **React Hook Form**: Form state management and validation
- **Zod**: Runtime type validation and schema definition