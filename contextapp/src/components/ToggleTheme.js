<<<<<<< HEAD
import React, { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";

export default function ToggleTheme() {
	const { toggleTheme } = useContext(ThemeContext);
	return <button onClick={toggleTheme}>Toggle Theme</button>;
=======
import React, { Component } from "react";
import { ThemeContext } from "../contexts/ThemeContext";

export default class ToggleTheme extends Component {
	static contextType = ThemeContext;
	render() {
		const { toggleTheme } = this.context;
		return <button onClick={toggleTheme}>Toggle Theme</button>;
	}
>>>>>>> lesson-1
}
