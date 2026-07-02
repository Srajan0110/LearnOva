# LearnOva

A Learning Management System (LMS) dashboard built with React + Vite + Bootstrap.

## Getting started

```bash
npm install
npm run dev
```

## Features

- Dashboard with stat cards, a weekly-hours chart and a calendar
- Sidebar navigation + a functional Navbar (search box, notifications dropdown)
- Course catalog with search, category filter and a course-details modal
- Student list with add / remove student, search and course filter
- Assignments, Quizzes, Live Classes, Notes, Messages, Certificates, Calendar
- Profile and Settings pages with editable form state

## Concepts used

- **Props** — components like `CourseCard`, `Card`, and `Calendar` are all driven by props
- **useState** — search boxes, filters, the add/remove student form, the notification dropdown, settings toggles
- **map()** — rendering every list: courses, students, assignments, quizzes, notes, messages
- **filter()** — course search + category filter, student search + course filter, assignment status filter
- **Bootstrap Grid** — `container` / `row` / `col-*` layout on Courses, Students, Assignments, Quizzes, Live Classes, Notes, Certificates, Profile and Settings, plus Bootstrap form/table/badge components

## Structure

- `src/components` — reusable UI pieces (Navbar, Sidebar, Card, CourseCard, Chart, Calendar, Loader)
- `src/layouts` — page shells (MainLayout wraps Sidebar + Navbar around routed pages)
- `src/pages` — one folder per route, including the new `Students` page
- `src/data/mockData.js` — shared dummy data (courses, students, assignments, quizzes, live classes, messages, notes, certificates) so every page references consistent, logically-linked content
- `src/routes/AppRoutes.jsx` — route definitions
- `src/services/api.js` — fetch wrapper for a real backend, ready to swap in for `mockData.js`
- `src/styles` — global tokens (variables, typography, global, responsive)
