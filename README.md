*Dev Stack Builder
A modern, responsive, and interactive React web application built for developers to explore, filter, and curate their custom technology stack. Designed with a clean prop-drilling and custom hook architecture, smooth UI interactions, and a polished mobile-first layout.

*Features
Comprehensive Tech Explorer: Browse a rich collection of technologies categorized across frontend, backend, database, and tooling—complete with ratings, difficulty tags, custom badges, and icepanel vector logos.

*Interactive "Your Stack" Management: Dynamically add tools to your custom sidebar stack, prevent duplicates with toast warnings, track selected items, and clear your stack instantly using single-item removal or the "Remove All" action.

*Dedicated Toast Notifications & Responsive Layout: Seamless user feedback powered by a custom toast provider component and react-toastify, wrapped inside a fully responsive navbar, mobile drawer, hero banner, and structured footer.

**Technologies Used
.React.js (Core UI Library)

.Vite (Lightning-fast Build Tool & Dev Server)

.Tailwind CSS (Utility-first Styling & Custom Gradients)

.React-Toastify (Alerts & Notifications)

.json (Local Public Data Source)

Question and Answer:
1. What is JSX, and why is it used in React?
Ans: JSX stands for JavaScript XML. It lets us write HTML-like markup right inside our JavaScript or TypeScript files. Writing UI logic this way feels way more easier than DOM methods like document.createElement etc. It keeps the structure readable and lets us mix JavaScript variables straight into our markup easily.

2. What is the difference between props and state?
Ans: Props are handed down from parent to child components as read-only configuration, meaning a child component can't alter them directly. State, on the other hand, is private data managed inside a component. When state changes, React triggers a re-render to update the UI on the screen.

3. What does the useState hook do, and where did you use it in this project?
Ans: useState hook gives functional components a memory so they can remember and update values over time. In this project, I used it heavily inside the useStackManager custom hook—specifically to manage the list of available technologies fetched from the json file, track the items added to the user's selected stack, and handle mobile menu toggling in the navbar.

4. What does the useEffect hook do, and why did you need it to load the json data?
Ans: useEffect handles side effects in React, which are things that happen outside the normal rendering flow like fetching data, timers, or window listeners. We needed it to fetch our data.json file from the public folder right when the application mounts. By passing an empty dependency array [], we made sure the fetch only runs once on startup so our tech cards populate immediately.

5. Why does every item in a .map() list need a unique key prop?
Ans: React relies on keys to track elements efficiently inside arrays. When items get added, filtered out, or deleted from a list, the unique key helps React figure out precisely what changed without forcing the browser to re-render the whole list from scratch. In our app, we passed key={tech.id} when mapping through the technology cards and selected items.

6. What is conditional rendering? Show one place you used it.
Ans: Conditional rendering just means showing different UI chunks depending on certain conditions using standard JavaScript logical operators like ternary statements (? :) or &&.

Where I used it: In my SelectedStack component, I checked if selectedTechnologies.length === 0. If it's empty, I render a dashed placeholder box saying "Your stack is empty." If items are present, it maps through them to display the selected cards alongside their remove buttons.

7. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?
Ans:

Parent to Child: We pass data down through normal props, like passing technologies and selectedTechnologies from App.tsx down into TechStack and SelectedStack.

Child to Parent: Since components can't mutate props directly, the parent has to pass down a callback function as a prop, like addToStack or removeFromStack. When a user clicks a button inside the child card, it executes that function, bubbling the action back up to the parent state.