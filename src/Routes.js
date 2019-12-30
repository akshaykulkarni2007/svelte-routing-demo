// import Header from "./Components/Common/Header.svelte";
// import Footer from "./Components/Common/Footer.svelte";

import Home from "./Components/Home.svelte";
import About from "./Components/About.svelte";
import Layout from "./Components/Common/Layout.svelte";

const routes = [
	{
		name: "/",
		component: Home,
		layout: Layout
	},
	{
		name: "about",
		component: About,
		layout: Layout
	}
];

export { routes };
