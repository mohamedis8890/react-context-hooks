import React, { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";
import { BookListContext } from "../contexts/BookListContext";

function BookList() {
	const { isLightTheme, light, dark } = useContext(ThemeContext);
	const theme = isLightTheme ? light : dark;

	const { books } = useContext(BookListContext);

	return (
		<div
			className="book-list"
			style={{ color: theme.syntax, background: theme.bg }}
		>
			<ul>
				{books.map(book => (
					<li key={book.id} style={{ background: theme.ui }}>
						{book.title}
					</li>
				))}
			</ul>
		</div>
	);
}

export default BookList;
