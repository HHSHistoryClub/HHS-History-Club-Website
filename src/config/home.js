// ** For more information on how to edit the config, please read the README.md ** //
// https://github.com/underscorelior/HHS-Club-Template?tab=readme-ov-file#about-section-srcconfigaboutjs

const description = `Homestead High School's history club. 
We discuss general history, cover course content for APUSH and AP US Government, and we also play history bowl.`;

const secondary_button = {
	display: false,
	text: 'Secondary Button',
	url: 'https://example.com',
};

const carousel = [
	{
		name: 'Meetings',
		description: `We usually cover history topics through presentations, games, or even sometimes guest speakers.`,
		image: '/placeholder.png',
	},
	{
		name: 'Events',
		description: `We hosted the History Bowl & Bee 2024 Northern California Championships. This photo was taken during event setup.`,
		image: '/eventsetup.jpeg',
	},
	// {
	// 	name: 'Image 2',
	// 	description: `Aute deserunt elit enim est cillum.
	// 		Nulla consectetur nostrud nulla voluptate sit eiusmod pariatur ad.
	// 		Velit dolore fugiat voluptate enim non nostrud elit culpa pariatur aliquip ad.`,
	// 	image: '/placeholder3.png',
	// },
];

// *** DO NOT EDIT *** //
const home_config = {
	home_page: {
		description: description,
		secondary_button: secondary_button,
		carousel: carousel,
	},
};
export default home_config;
