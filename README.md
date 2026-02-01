# BookScope

BookScope is a book discovery web application that allows users to explore books by category, search for titles, view ratings, and read detailed information before deciding what to read next.  
The application uses real-time data from the Google Books API and focuses on a smooth, modern user experience.

**Tagline:** *Book nerds can explore books before they read them.*

---

## Live Demo

https://book-scope.vercel.app/
---

## Features

- Browse books by predefined categories (Fiction, Fantasy, Romance, Mystery, Thriller)
- Search books by title
- View book details including author, description, categories, and ratings (when available)
- Star-based rating display
- Skeleton loading for better perceived performance
- Smooth scrolling and in-page navigation
- Responsive layout for mobile and desktop
- Client-side routing with deep-link support
- Deployed on Vercel

---

## Tech Stack

- React (Vite)
- Tailwind CSS
- React Router v6
- Motion (animations)
- Google Books API
- Vercel (deployment)

---

## Project Structure

```bash
src/
├─ assets/              # Images and static assets
├─ components/
│  ├─ book/             # Book card and book-related components
│  ├─ layout/           # Navbar and layout components
│  ├─ skeletons/        # Skeleton loading components
│  └─ ui/               # Reusable UI components
├─ pages/               # Route-based pages
├─ services/            # API services
├─ utils/               # Helper and normalization functions
└─ main.jsx             # Application entry point
