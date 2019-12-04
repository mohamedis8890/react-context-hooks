import React from "react";
import BookList from "./components/BookList";
import Navbar from "./components/Navbar";
import ThemeContextProvider from "./contexts/ThemeContext";
import ToggleTheme from "./components/ToggleTheme";

function App() {
	return (
		<div className="App">
			<ThemeContextProvider>
				<Navbar />
				<BookList />
				<ToggleTheme />
			</ThemeContextProvider>
		</div>
	);
}

export default App;
