<<<<<<< HEAD
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
=======
import React, { Component } from "react";
import { ThemeContext } from "../contexts/ThemeContext";

class BookList extends Component {
	render() {
		return (
			<ThemeContext.Consumer>
				{context => {
					const { isLightTheme, light, dark } = context;
					const theme = isLightTheme ? light : dark;
					return (
						<div
							className="book-list"
							style={{ color: theme.syntax, background: theme.bg }}
						>
							<ul>
								<li style={{ background: theme.ui }}>the way of kings</li>
								<li style={{ background: theme.ui }}>the name of the wind</li>
								<li style={{ background: theme.ui }}>the final empire</li>
							</ul>
						</div>
					);
				}}
			</ThemeContext.Consumer>
		);
	}
>>>>>>> lesson-1
}

export default BookList;
