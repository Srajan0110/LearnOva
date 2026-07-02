// Central mock data. In a real app this would come from services/api.js.
// Keeping it here means every page (Dashboard, Courses, Students, etc.)
// references the same course names, categories and people.

export const courses = [
  {
    id: 'c1',
    title: 'Introduction to UI/UX Design',
    instructor: 'Priya Sharma',
    category: 'Design',
    progress: 72,
    thumbnailColor: '#F2A93B',
    description:
      'Learn the fundamentals of user interface and user experience design, from wireframes to interactive prototypes.',
  },
  {
    id: 'c2',
    title: 'Data Structures in JavaScript',
    instructor: 'Rohan Mehta',
    category: 'Programming',
    progress: 45,
    thumbnailColor: '#3C4B8C',
    description:
      'A hands-on course covering arrays, linked lists, stacks, queues, trees and graphs, implemented in JavaScript.',
  },
  {
    id: 'c3',
    title: 'Digital Marketing Basics',
    instructor: 'Aisha Khan',
    category: 'Marketing',
    progress: 90,
    thumbnailColor: '#3FAE7C',
    description:
      'Understand SEO, social media marketing, and paid campaigns to grow an audience from scratch.',
  },
  {
    id: 'c4',
    title: 'React for Beginners',
    instructor: 'Karan Verma',
    category: 'Programming',
    progress: 30,
    thumbnailColor: '#E15B5B',
    description:
      'Build your first React applications using components, props, state and hooks like useState and useEffect.',
  },
  {
    id: 'c5',
    title: 'Financial Accounting 101',
    instructor: 'Neha Gupta',
    category: 'Business',
    progress: 58,
    thumbnailColor: '#8858C8',
    description:
      'Core accounting principles including balance sheets, income statements and cash flow analysis.',
  },
  {
    id: 'c6',
    title: 'Photography Fundamentals',
    instructor: 'Sameer Iyer',
    category: 'Design',
    progress: 15,
    thumbnailColor: '#2D9CDB',
    description:
      'Master exposure, composition and lighting to take better photos with any camera.',
  },
]

export const categories = ['All', 'Design', 'Programming', 'Marketing', 'Business']

export const students = [
  { id: 's1', name: 'Alex Morgan', email: 'alex.morgan@learnova.com', course: 'React for Beginners', progress: 30 },
  { id: 's2', name: 'Meera Nair', email: 'meera.nair@learnova.com', course: 'Introduction to UI/UX Design', progress: 72 },
  { id: 's3', name: 'Ibrahim Farooq', email: 'ibrahim.farooq@learnova.com', course: 'Data Structures in JavaScript', progress: 45 },
  { id: 's4', name: 'Sara Thomas', email: 'sara.thomas@learnova.com', course: 'Digital Marketing Basics', progress: 90 },
  { id: 's5', name: 'Devansh Rao', email: 'devansh.rao@learnova.com', course: 'Financial Accounting 101', progress: 58 },
  { id: 's6', name: 'Lily Fernandes', email: 'lily.fernandes@learnova.com', course: 'Photography Fundamentals', progress: 15 },
]

export const assignments = [
  { id: 'a1', title: 'Wireframe Critique', course: 'Introduction to UI/UX Design', dueDate: '2026-07-08', status: 'Pending' },
  { id: 'a2', title: 'Binary Search Tree Implementation', course: 'Data Structures in JavaScript', dueDate: '2026-07-05', status: 'Submitted' },
  { id: 'a3', title: 'SEO Audit Report', course: 'Digital Marketing Basics', dueDate: '2026-07-12', status: 'Pending' },
  { id: 'a4', title: 'Build a Todo App', course: 'React for Beginners', dueDate: '2026-07-15', status: 'Pending' },
  { id: 'a5', title: 'Balance Sheet Exercise', course: 'Financial Accounting 101', dueDate: '2026-07-02', status: 'Late' },
]

export const quizzes = [
  { id: 'q1', title: 'Design Principles Quiz', course: 'Introduction to UI/UX Design', questions: 15, score: 87 },
  { id: 'q2', title: 'JS Data Structures Quiz', course: 'Data Structures in JavaScript', questions: 20, score: 74 },
  { id: 'q3', title: 'Marketing Channels Quiz', course: 'Digital Marketing Basics', questions: 10, score: 95 },
  { id: 'q4', title: 'React Hooks Quiz', course: 'React for Beginners', questions: 12, score: null },
]

export const liveClasses = [
  { id: 'l1', title: 'Prototyping in Figma', course: 'Introduction to UI/UX Design', instructor: 'Priya Sharma', date: '2026-07-03', time: '10:00 AM', status: 'Upcoming' },
  { id: 'l2', title: 'Recursion Deep Dive', course: 'Data Structures in JavaScript', instructor: 'Rohan Mehta', date: '2026-07-04', time: '2:00 PM', status: 'Upcoming' },
  { id: 'l3', title: 'Building Ad Campaigns', course: 'Digital Marketing Basics', instructor: 'Aisha Khan', date: '2026-06-28', time: '11:00 AM', status: 'Completed' },
]

export const messages = [
  { id: 'm1', name: 'Priya Sharma', role: 'Instructor', preview: 'Great work on your last wireframe submission!', time: '9:42 AM', unread: true },
  { id: 'm2', name: 'Rohan Mehta', role: 'Instructor', preview: 'Reminder: BST assignment is due Sunday.', time: 'Yesterday', unread: false },
  { id: 'm3', name: 'Meera Nair', role: 'Classmate', preview: 'Want to study together for the design quiz?', time: 'Yesterday', unread: true },
  { id: 'm4', name: 'Study Group - React', role: 'Group', preview: 'Ibrahim: Pushed the hooks demo to GitHub.', time: 'Mon', unread: false },
]

export const notes = [
  { id: 'n1', title: 'Color theory basics', course: 'Introduction to UI/UX Design', updated: '2026-06-30' },
  { id: 'n2', title: 'Big-O cheat sheet', course: 'Data Structures in JavaScript', updated: '2026-06-29' },
  { id: 'n3', title: 'SEO keyword checklist', course: 'Digital Marketing Basics', updated: '2026-06-25' },
  { id: 'n4', title: 'useState vs useReducer', course: 'React for Beginners', updated: '2026-06-27' },
]

export const certificates = [
  { id: 'cert1', course: 'Digital Marketing Basics', issued: '2026-05-20' },
  { id: 'cert2', course: 'Introduction to UI/UX Design', issued: null },
]
