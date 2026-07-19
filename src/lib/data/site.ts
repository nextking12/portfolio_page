export type NavItem = {
	label: string;
	href: `#${string}`;
};

export type Profile = {
	name: string;
	role: string;
	tagline: string;
	heroLead: string;
	intro: string;
	about: string[];
};

export type Service = {
	number: string;
	title: string;
	description: string;
	deliverables: string[];
};

export type Project = {
	title: string;
	category: string;
	brief: string;
	decision: string;
	image: string;
	imageAlt: string;
	description: string;
	outcome: string;
	tags: string[];
	repo: string;
	live: string;
};

export type BusinessSection = {
	label: string;
	heading: string;
	paragraphs: string[];
	note: string;
};

export type SkillGroup = {
	title: string;
	items: string[];
};

export type SocialPlatform = 'github' | 'linkedin' | 'twitter';

export type SocialLink = {
	label: string;
	handle: string;
	href: string;
	platform: SocialPlatform;
};

export const navItems: NavItem[] = [
	{ label: 'Services', href: '#services' },
	{ label: 'Work', href: '#projects' },
	{ label: 'About', href: '#about' },
	{ label: 'Process', href: '#skills' },
	{ label: 'Contact', href: '#contact' }
];

export const profile: Profile = {
	name: 'Edward King',
	role: 'Full-Stack Engineer',
	tagline: 'Clear, dependable digital work for businesses with somewhere to go.',
	heroLead:
		'I turn fuzzy business problems into clear, dependable websites and software—from the first conversation through launch.',
	intro:
		'You get one reliable partner for strategy, design, development, and the technical details behind the scenes.',
	about: [
		'I am an engineer who likes working across frontend and backend to deliver complete user experiences. My recent work centers on modern JavaScript stacks, responsive UI, and interfaces that stay maintainable as they grow.',
		'I care about clear communication, practical code quality, and steady iteration. Whether I am building a feature from scratch or improving an existing system, I prioritize performance, accessibility, and developer experience so teams can move faster with confidence.',
		'I also know most people are not hiring code - they are hiring trust. I keep projects transparent, explain tradeoffs in plain language, and stay reliable from kickoff to launch so clients always know where things stand.'
	]
};

export const services: Service[] = [
	{
		number: '01',
		title: 'Business sites & online stores',
		description:
			'For local businesses and growing brands that need a fast, credible home online—without looking like everyone else.',
		deliverables: [
			'Custom responsive design',
			'SEO and performance foundations',
			'Launch and ongoing support'
		]
	},
	{
		number: '02',
		title: 'Custom web apps & tools',
		description:
			'For teams ready to replace spreadsheets, connect a workflow, or turn a product idea into dependable software.',
		deliverables: ['Product planning', 'Full-stack development', 'Testing and deployment']
	}
];

export const businessSection: BusinessSection = {
	label: 'For businesses',
	heading: 'Working with small brands.',
	paragraphs: [
		"If you're a small business, you don't need a website — you need customers to find you, trust you, and buy from you.",
		'I build custom storefronts and business sites from scratch. That means a site designed around your brand instead of a template thousands of others are using, built to load fast and rank well in search, so more of the people looking for you actually find you.',
		'What that looks like: we talk through what you need, I handle the build and setup end to end, and I stay on afterward to keep things running. No jargon, no surprises, clear pricing up front.'
	],
	note: 'Currently taking on new projects.'
};

export const projects: Project[] = [
	{
		title: 'Smells Good Marketing',
		category: 'Client website',
		brief:
			'Give a fast-moving creative agency a web presence with the same confidence as its work.',
		decision:
			'Build a focused, custom experience with a direct inquiry path instead of adding a heavy CMS or paid form service.',
		image: '/projects/smells-good.jpg',
		imageAlt: 'Smells Good Marketing homepage showing its short-form video service offer',
		description:
			"A custom site for a marketing agency, built from scratch rather than a template. When someone reaches out, their message lands straight in the agency's inbox — no extra services, no monthly fees.",
		outcome: 'A distinct, mobile-ready brand presence with a direct lead-capture path.',
		tags: ['Next.js', 'TypeScript', 'Vercel'],
		repo: 'https://github.com/nextking12/smells_good',
		live: 'https://www.smellsgoodmktg.com'
	},
	{
		title: 'PhySec.Dash',
		category: 'Custom web application',
		brief:
			'Bring scattered physical-security systems into one workspace operators can understand at a glance.',
		decision:
			'Treat access control, alarms, cameras, and sensors as one coherent operational model backed by explicit roles and audit history.',
		image: '/projects/physec-dash.jpg',
		imageAlt: 'PhySec.Dash sign-in screen and interactive demo entry point',
		description:
			'PhySec.Dash gives security teams one dashboard to monitor cameras, card readers, alarm panels, and motion sensors with less operational friction. It is built with a Spring Boot API, PostgreSQL, Flyway migrations, JWT auth, role-based access control, audit logging, integration tests, and a React frontend.',
		outcome: 'One focused workspace for monitoring critical physical-security systems.',

		tags: ['Java', 'Spring Boot', 'React', 'TypeScript', 'PostgreSQL'],
		repo: 'https://github.com/nextking12/physec-dashboard',
		live: 'https://physec-dashboard.vercel.app'
	},
	{
		title: 'PhySec.Learn',
		category: 'Training platform',
		brief:
			'Make specialized physical-security training approachable without putting an account wall in front of learners.',
		decision:
			"Keep course content durable in Postgres while storing personal lesson progress privately in each visitor's browser.",
		image: '/projects/physec-learn.jpg',
		imageAlt: 'PhySec.Learn homepage introducing its physical access control course',
		description:
			"PhySec.Learn helps teams onboard faster with a no-login training experience for physical access control. Course content lives in Postgres with Prisma, while lesson progress stays private in each visitor's browser.",
		outcome: 'Faster onboarding with a private, no-login learning experience.',
		tags: ['Next.js', 'PostgreSQL', 'Neon'],
		repo: 'https://github.com/nextking12/open_acs',
		live: 'https://open-acs.vercel.app/'
	}
	// {
	// 	title: 'Project Three',
	// 	description:
	// 		'TODO: Showcase product impact, test strategy, or reliability work. Keep each project story outcome-oriented.',
	// 	tags: ['React', 'Playwright', 'CI/CD'],
	// 	repo: 'https://github.com/your-username/project-three',
	// 	live: 'https://project-three.example.com'
	// }
];

export const skillGroups: SkillGroup[] = [
	{ title: 'Discover', items: ['Goals & audience', 'Scope & priorities', 'Clear project plan'] },
	{
		title: 'Design & build',
		items: ['Frequent previews', 'Responsive development', 'Plain-language updates']
	},
	{
		title: 'Launch & support',
		items: ['Quality checks', 'Confident handoff', 'Ongoing improvements']
	}
];

export const socials: SocialLink[] = [
	{
		label: 'GitHub',
		handle: '@nextking12',
		href: 'https://github.com/nextking12',
		platform: 'github'
	},
	{
		label: 'LinkedIn',
		handle: 'Edward King Jr.',
		href: 'https://www.linkedin.com/in/edward-king-jr-385114251/',
		platform: 'linkedin'
	},
	{
		label: 'X',
		handle: '@nextking12_dev',
		href: 'https://x.com/nextking12_dev',
		platform: 'twitter'
	}
];

// Replace this once the public project inbox is ready.
export const contactEmail = 'hello@ecking.dev';
