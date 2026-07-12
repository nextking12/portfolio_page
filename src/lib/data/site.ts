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

export type Project = {
	title: string;
	description: string;
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
	{ label: 'Home', href: '#home' },
	{ label: 'About', href: '#about' },
	{ label: 'For Businesses', href: '#for-business' },
	{ label: 'Projects', href: '#projects' },
	{ label: 'Skills', href: '#skills' },
	{ label: 'Contact', href: '#contact' }
];

export const profile: Profile = {
	name: 'Edward King',
	role: 'Full-Stack Engineer',
	tagline: 'I build fast, accessible web products with modern and clean UI systems.',
	heroLead:
		'I build custom sites and online stores for small brands — and the systems behind them.',
	intro:
		'I focus on shipping maintainable applications that feel polished in everyday use. I enjoy turning product ideas into clear technical plans and reliable releases.',
	about: [
		'I am an engineer who likes working across frontend and backend to deliver complete user experiences. My recent work centers on modern JavaScript stacks, responsive UI, and interfaces that stay maintainable as they grow.',
		'I care about clear communication, practical code quality, and steady iteration. Whether I am building a feature from scratch or improving an existing system, I prioritize performance, accessibility, and developer experience so teams can move faster with confidence.',
		'I also know most people are not hiring code - they are hiring trust. I keep projects transparent, explain tradeoffs in plain language, and stay reliable from kickoff to launch so clients always know where things stand.'
	]
};

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
		description:
			'A custom site for a marketing agency, built from scratch rather than a template. When someone reaches out, their message lands straight in the agency\'s inbox — no extra services, no monthly fees.',
		tags: ['Next.js', 'TypeScript', 'Vercel'],
		repo: 'https://github.com/nextking12/smells_good',
		live: 'https://smells-good-rho.vercel.app/'
	},
	{
		title: 'PhySec.Dash',
		description:
			'PhySec.Dash gives security teams one dashboard to monitor cameras, card readers, alarm panels, and motion sensors with less operational friction. It is built with a Spring Boot API, PostgreSQL, Flyway migrations, JWT auth, role-based access control, audit logging, integration tests, and a React frontend.',

		tags: ['Java', 'Spring Boot', 'React', 'TypeScript', 'PostgreSQL'],
		repo: 'https://github.com/nextking12/physec-dashboard',
		live: 'https://physec-dashboard.vercel.app'
	},
	{
		title: 'PhySec.Learn',
		description:
			"PhySec.Learn helps teams onboard faster with a no-login training experience for physical access control. Course content lives in Postgres with Prisma, while lesson progress stays private in each visitor's browser.",
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
	{ title: 'Frontend', items: ['React', 'TypeScript', 'Tailwind CSS'] },
	{ title: 'Backend', items: ['Java', 'Spring Boot', 'PostgreSQL', 'REST'] },
	{ title: 'Workflow', items: ['GitHub Actions', 'Playwright', 'Vitest', 'Vercel'] }
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
