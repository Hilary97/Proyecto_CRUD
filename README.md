# My Library — CRUD App

A lightweight, client-side CRUD application for managing a personal book collection. Built with vanilla JavaScript, Bootstrap 5, and the browser's `localStorage`, with no backend or build step required.

**Live demo:** https://hilary97.github.io/Proyecto_CRUD/

## Features

- **Create** — add a book with title, author, publication year, and genre
- **Read** — view all saved books in a responsive table
- **Update** — edit any book's details in place
- **Delete** — remove a book with a confirmation prompt
- Data persists across page reloads via `localStorage`
- Dark-themed, responsive UI powered by Bootstrap 5

## Tech Stack

- HTML5
- CSS3
- JavaScript (ES6+, DOM APIs)
- [Bootstrap 5](https://getbootstrap.com/) for layout and styling
- Browser `localStorage` for data persistence

## Project Structure

```
.
├── index.html      # Markup and form
├── styles.css       # Custom styles
└── script.js         # CRUD logic and localStorage handling
```

## Getting Started

No installation or dependencies needed — it's a static site.

1. Clone the repository
   ```bash
   git clone https://github.com/Hilary97/Proyecto_CRUD.git
   ```
2. Open `index.html` in your browser

## What I Learned

This project was built as a practical exercise in implementing full CRUD operations purely on the client side — managing application state in `localStorage`, dynamically rendering tables from data, and handling form validation without any framework.

## Author

**Hilario Nava Jimenez**
Built as part of UCAMP 2024.
