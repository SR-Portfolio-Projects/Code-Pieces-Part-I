const dummyPieces = [
	{
		id: '1',
        title: 'React',
        content: 'Should you learn React? If you want to work as a front end web developer, building UIs, the answer is YES! React is a JavaScript library that specializes in helping developers build user interfaces, or UIs. In terms of websites and web applications, UIs are the collection of on-screen menus, search bars, buttons, and anything else someone interacts with to USE a website or app.',
        imageUrl:"https://images.unsplash.com/photo-1477763858572-cda7deaa9bc5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1876&q=80",
        user: {
          userId: '9',
          userImage: "https://icon2.cleanpng.com/20180320/sqe/kisspng-twitch-computer-icons-streaming-media-youtube-live-tv-twitch-icon-5ab19172461392.001176751521586546287.jpg",
          displayName: 'Shannon Reed',
          email: 'shannon@email.com'
        },
        likes: 34,
        numOfComments: 8,
		commentsList: [
			{
				id: 40,
				username: "Julius Reed",
				text: "Gingerbread chocolate donut marzipan soufflé.",
			},
			{
				id: 19,
				username: "Ryan Baker",
				text: "Wafer ice cream bear claw brownie.",
			},
			{
				id: 320,
				username: "Lisa brown",
				text: " Wafer jujubes jelly-o pie marshmallow sweet cupcake.",
			},
			{
				id: 28,
				username: "James Michael",
				text: " Caramels dragée gingerbread chupa chups. ",
			},
			{
				id: 40,
				username: "Julius Reed",
				text: "Gingerbread chocolate donut marzipan soufflé.",
			},
			{
				id: 19,
				username: "Ryan Baker",
				text: "Wafer ice cream bear claw brownie.",
			},
			{
				id: 320,
				username: "Lisa brown",
				text: " Wafer jujubes jelly-o pie marshmallow sweet cupcake.",
			},
			{
				id: 28,
				username: "James Michael",
				text: " Caramels dragée gingerbread chupa chups. ",
			},
		],
	},
	{
		id: '2',
        title: 'JavaScript Libraries',
        content: 'JavaScript libraries are collections of pre-written JavaScript code that can be used for common JS tasks, allowing you to bypass the time intensive process of coding by hand. If there’s a run-of-the-mill JavaScript function that you keep needing to code there’s probably a JS library to ease your pain. Make sense?',
        imageUrl:"https://images.unsplash.com/photo-1477763858572-cda7deaa9bc5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1876&q=80",
        user: {
          userId: '6',
          userImage: "https://icon2.cleanpng.com/20180320/sqe/kisspng-twitch-computer-icons-streaming-media-youtube-live-tv-twitch-icon-5ab19172461392.001176751521586546287.jpg",
          displayName: 'Kitai Bell',
          email: 'keon@email.com'
        },
        likes: 87,
        numOfComments: 2,
		commentsList: [
			{
				id: 320,
				username: "Lisa brown",
				text: " Wafer jujubes jelly-o pie marshmallow sweet cupcake.",
			},
			{
				id: 28,
				username: "James Michael",
				text: " Caramels dragée gingerbread chupa chups. ",
			},
		],
	},
	{
	id: '3',
        title: 'JSX',
		content: 'React embraces the fact that rendering logic is inherently coupled with other UI logic: how events are handled, how the state changes over time, and how the data is prepared for display. Instead of artificially separating technologies by putting markup and logic in separate files, React separates concerns with loosely coupled units called “components” that contain both. We will come back to components in a further section, but if you’re not yet comfortable putting markup in JS, this talk might convince you otherwise. React doesn’t require using JSX, but most people find it helpful as a visual aid when working with UI inside the JavaScript code. It also allows React to show more useful error and warning messages.',
        imageUrl:"https://images.unsplash.com/photo-1477763858572-cda7deaa9bc5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1876&q=80",
        user: {
          userId: '12',
          userImage: "https://icon2.cleanpng.com/20180320/sqe/kisspng-twitch-computer-icons-streaming-media-youtube-live-tv-twitch-icon-5ab19172461392.001176751521586546287.jpg",
          displayName: 'James Michael',
          email: 'james@email.com'
        },
        likes: 41,
        numOfComments: 4,
		commentsList: [
			{
				id: 20,
				username: "Julius Reed",
				text: "Gingerbread chocolate donut marzipan soufflé.",
			},
			{
				id: 89,
				username: "Ryan Baker",
				text: "Wafer ice cream bear claw brownie.",
			},
			{
				id: 30,
				username: "Lisa brown",
				text: " Wafer jujubes jelly-o pie marshmallow sweet cupcake.",
			},
			{
				id: 28,
				username: "James Michael",
				text: " Caramels dragée gingerbread chupa chups. ",
			},
		],
	},
];

export default dummyPieces;