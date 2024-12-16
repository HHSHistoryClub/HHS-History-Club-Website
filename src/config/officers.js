// ** For more information on how to edit the config, please read the README.md ** //
// https://github.com/underscorelior/HHS-Club-Template?tab=readme-ov-file#officers-page-srcconfigofficersjs

const officer_team = [
	{ name: 'Luke Wang', role: 'President', image: '/officers/luke.png' },
	{ name: 'Alex Jiang', role: 'Vice President', image: '/logo.png' },
	{
		name: 'Ishaan Verma',
		role: 'General Historian',
		image: '/officers/ishaan.jpg',
	},
	{ name: 'Jacob Jang', role: 'Secretary', image: '/logo.png' },
	{ name: 'Sriram Joshi', role: 'Treasurer', image: '/logo.png' },
	{ name: 'Evan Wang', role: 'Events Manager', image: '/logo.png' },
	{ name: 'Lior Pendler', role: 'Webmaster', image: '/officers/lior.jpeg' },
];

const officer_app = {
	display: true,
	open: false,
	open_text:
		'Our officer applications are open until 12/12/1212! Aliquip magna non laboris amet irure fugiat reprehenderit laboris labore non anim.',
	closed_text:
		'Out officer applications are closed right now, check back again at the end of the year!.',
	link: 'https://forms.google.com/',
};

// *** DO NOT EDIT *** //
const officer_config = {
	officer_team: officer_team,
	officer_app: officer_app,
};
export default officer_config;
