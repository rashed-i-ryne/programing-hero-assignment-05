# Dev Stack Builder

A modern, responsive, and interactive React web application built for developers to explore and curate their custom technology stack. Designed with a clean prop-drilling and custom hook architecture, smooth UI interactions, loading feedback, and a polished responsive layout.

# Features

 **Comprehensive Tech Explorer:** Browse a collection of technologies categorized across frontend, backend, database, language, styling, DevOps, and tools—complete with ratings, difficulty tags, custom badges, descriptions, and technology logos.

 **Interactive "Your Stack" Management:** Dynamically add technologies to your custom sidebar stack, prevent duplicate selections with toast warnings, track selected items, remove individual technologies, and clear the entire stack instantly using the "Remove All" action.

 **Dedicated Toast Notifications & Responsive Layout:** Seamless user feedback powered by React-Toastify, with notifications for adding, duplicate attempts, removing, and clearing technologies. The application also includes a responsive navbar, mobile navigation menu, hero banner, technology section, and structured footer.

 **JSON Data Loading & Loading State:** Technology information is loaded dynamically from a local data.json file instead of being hardcoded inside components. A loading state is displayed while the technology data is being fetched.

 **Shared Gradient Brand Theme:** A reusable orange-to-pink-to-violet gradient is defined in one place and used across the brand, hero heading, and primary buttons for consistent theming.


# Technologies Used

 **React.js** (Core UI Library)
 **TypeScript** (Type-safe JavaScript and component interfaces)
 **Vite** (Lightning-fast Build Tool & Dev Server)
 **Tailwind CSS** (Utility-first Styling & Responsive Design)
 **React-Toastify** (Alerts & Notifications)
 **JSON** (Local Technology Data Source)


# Question and Answer

### 1. What is JSX, and why is it used in React?

**Ans:** JSX stands for JavaScript XML. It lets us write HTML-like markup right inside our JavaScript or TypeScript files. Writing UI logic this way feels much easier than using DOM methods like document.createElement. It keeps the structure readable and lets us mix JavaScript variables directly into our markup.

### 2. What is the difference between props and state?

**Ans:** Props are handed down from parent to child components as read-only configuration, meaning a child component can't alter them directly. State, on the other hand, is private data managed inside a component. When state changes, React triggers a re-render to update the UI on the screen.

### 3. What does the useState hook do, and where did you use it in this project?

**Ans:** The useState hook gives functional components a memory so they can remember and update values over time. In this project, I used it inside the useStackManager custom hook to manage the list of available technologies, track the items added to the user's selected stack, and manage the loading state. I also used useState in the Navbar to control the mobile menu.

### 4. What does the useEffect hook do, and why did you need it to load the JSON data?

**Ans:** useEffect handles side effects in React, which are things that happen outside the normal rendering flow like fetching data, timers, or window listeners. We needed it to fetch our data.json file from the public folder when the application mounts. By passing an empty dependency array [], we made sure the fetch runs once when the component is mounted so our technology data can be loaded.

### 5. Why does every item in a .map() list need a unique key prop?

**Ans:** React relies on keys to track elements efficiently inside arrays. When items get added, filtered out, or deleted from a list, the unique key helps React figure out precisely what changed without unnecessarily recreating the whole list. In our app, we passed key={tech.id} when mapping through the technology cards and selected items.

### 6. What is conditional rendering? Show one place you used it.

**Ans:** Conditional rendering means showing different UI depending on a condition using JavaScript operators such as ternary statements "? : or &&`."

**Where I used it:** In my SelectedStack component, I checked if selectedTechnologies.length === 0. If it is empty, I render a dashed placeholder box saying "Your stack is empty." If items are present, it maps through them to display the selected technologies alongside their remove buttons.

I also used conditional rendering in App.tsx to show "Loading technologies..." while the JSON data is being fetched and display the TechSection after loading is complete.

### 7. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?

**Ans:**

**Parent to Child:** We pass data down through props, like passing technologies and selectedTechnologies from App.tsx into TechSection, and then into the child components such as TechStack and SelectedStack.

**Child to Parent:** Since components can't directly mutate the parent's state, the parent passes callback functions as props, such as addToStack, removeFromStack, and removeAll. When a user clicks a button inside a child component, it calls the callback function, which updates the state managed by the parent/custom hook.