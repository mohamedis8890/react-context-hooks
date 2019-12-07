import React from "react";
import BookList from "./components/BookList";
import Navbar from "./components/Navbar";
import ThemeContextProvider from "./contexts/ThemeContext";
import ToggleTheme from "./components/ToggleTheme";
import AuthContextProvider from "./contexts/AuthContext";
<<<<<<< HEAD
import BookListContextProvider from "./contexts/BookListContext";
=======
>>>>>>> lesson-1

function App() {
	return (
		<div className="App">
			<ThemeContextProvider>
				<AuthContextProvider>
					<Navbar />
<<<<<<< HEAD
					<BookListContextProvider>
						<BookList />
					</BookListContextProvider>
=======
					<BookList />
>>>>>>> lesson-1
					<ToggleTheme />
				</AuthContextProvider>
			</ThemeContextProvider>
		</div>
	);
}

export default App;
