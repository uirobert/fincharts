/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	// handle tailwind MUI injection order if needed vs injection first
	important: "#root",

	theme: {
		extend: {},
	},
	plugins: [],
};
