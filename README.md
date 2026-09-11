#  Dev Stack

Dev Stack is a modern and responsive web application where developers
can explore different technologies and build their own personalized
technology stack.

The project provides useful information about popular frontend,
backend, database, programming language, styling, and DevOps technologies.

---

## 🌐 Live Website

Add your live website link here.

---

## 🛠️ Technologies Used

- React.js
- JavaScript (ES6+)
- Tailwind CSS
- DaisyUI
- React-Toastify
- JSON
- Vite

---

##  Features

### 1. Explore Technologies

Users can explore different technologies with their:

- Name
- Category
- Description
- Difficulty
- Rating
- Technology icon
- Badge

### 2. Build Your Stack

Users can add technologies to their personal stack.

The same technology cannot be added twice.

Users can also:

- Remove individual technologies
- Remove all technologies
- See the selected technology count

### 3. Responsive Design

The website works across:

- Mobile
- Tablet
- Desktop

The technology cards automatically adjust according to screen size.

---

## 📂 Project Structure

```text
src/
├── components/
│   ├── Navbar.jsx
│   ├── Hero.jsx
│   ├── TechnologyCard.jsx
│   ├── TechnologyGrid.jsx
│   ├── YourStack.jsx
│   └── Footer.jsx
│
├── data/
│   └── technologies.json
│
├── App.jsx
├── main.jsx
└── index.css


<!-- Question answer -->

1. What is JSX, and why is it used in React?

JSX is a syntax that lets us write HTML-like code inside JavaScript.

It makes React components easier to read and write.

Example:

<h1>Hello React</h1>
2. What is the difference between props and state?

Props are used to pass data from a parent component to a child
component.

State is data managed inside a component that can change over time.

For example, we passed technology data through props and used state
to manage the user's selected stack.

3. What does the useState hook do, and where did you use it?

useState allows a React component to store and update data.

In this project, we used it to manage:

const [stack, setStack] = useState([]);

This stores the technologies selected by the user.

We also used state for the mobile navigation menu and loading state.

4. What does the useEffect hook do, and why did you need it to load the JSON data?

useEffect runs code after a component renders.

We used it in TechnologyGrid to load the technology data and update
the loading state.

useEffect(() => {
  setTechnologies(technologiesData);
  setLoading(false);
}, []);
5. Why does every item in a .map() list need a unique key prop?

React uses the key to identify each item in a list.

It helps React understand which item was added, removed, or changed.

Example:

{technologies.map((technology) => (
  <TechnologyCard
    key={technology.id}
    technology={technology}
  />
))}

Here technology.id is unique for every technology.

6. What is conditional rendering?

Conditional rendering means showing different UI depending on a
condition.

We used it in the Your Stack section.

When the stack is empty, we show an empty message:

{stack.length === 0 ? (
  <p>Your stack is empty</p>
) : (
  <StackItems />
)}

When technologies are selected, the selected items are displayed
instead.

7. How do you pass data from a parent component to a child component,

and how does a child send something back to the parent?

A parent sends data to a child using props.

Example:

<TechnologyCard
  technology={technology}
  onAdd={handleAdd}
/>

The child can send information back by calling a function received
through props.

Example:

onAdd(technology);

So the parent owns the main state, while the child can notify the
parent about an action.