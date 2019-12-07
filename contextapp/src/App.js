import React from "react";
import BookList from "./components/BookList";
import Navbar from "./components/Navbar";
import ThemeContextProvider from "./contexts/ThemeContext";
import ToggleTheme from "./components/ToggleTheme";
import AuthContextProvider from "./contexts/AuthContext";
import BookListContextProvider from "./contexts/BookListContext";

function App() {
	return (
		<div className="App">
			<ThemeContextProvider>
				<AuthContextProvider>
					<Navbar />
					<BookListContextProvider>
						<BookList />
					</BookListContextProvider>
					<ToggleTheme />
				</AuthContextProvider>
			</ThemeContextProvider>
		</div>
	);
}

export default App;
