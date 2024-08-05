//exercise 1

// import ThemeSwitcher from "./component/ThemeSwitcher";
// import { ThemeProvider, useTheme } from "./component/ThemeContext";
// import "./App.css";

// function AppContent() {
//   const { theme } = useTheme();

//   return (
//     <div className={`App ${theme}`}>
//       <h1>Theme Switcher Example</h1>
//       <ThemeSwitcher />
//     </div>
//   );
// }

// function App() {
//   return (
//     <ThemeProvider>
//       <AppContent />
//     </ThemeProvider>
//   );
// }


//exercise2
import React from "react";
import "./App.css";
import CharacterCounter from "./component/CharacterCount";

function App() {
  return (
    <div className="App">
      <CharacterCounter />
    </div>
  );
}

export default App;
