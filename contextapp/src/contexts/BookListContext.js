import React, { useState, createContext } from "react";

export const BookListContext = createContext();
export default function BookListContextProvider(props) {
	const [books, setBooks] = useState([
		{ title: "name of the wind", id: 1 },
		{ title: "the way of kings", id: 2 },
		{ title: "the final empire", id: 3 },
		{ title: "the hero of ages", id: 4 }
	]);
	return (
		<BookListContext.Provider value={{ books }}>
			{props.children}
		</BookListContext.Provider>
	);
}
