export type NavItem = {
	label: string;
	href: `#${string}`;
};

export type Profile = {
	name: string;
	role: string;
	tagline: string;
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
	{ label: 'Projects', href: '#projects' },
	{ label: 'Skills', href: '#skills' },
	{ label: 'Contact', href: '#contact' }
];

export const profile: Profile = {
	name: 'Edward King',
	role: 'Full-Stack Engineer',
	tagline: 'I build fast, accessible web products with modern and clean UI systems.',
	intro:
		'I focus on shipping maintainable applications that feel polished in everyday use. I enjoy turning product ideas into clear technical plans and reliable releases.',
	about: [
		'I am an engineer who likes working across frontend and backend to deliver complete user experiences. My recent work centers on modern JavaScript stacks, responsive interfaces, and scalable component architecture.',
		'I care about clear communication, practical code quality, and steady iteration. Whether I am building a feature from scratch or improving an existing system, I prioritize performance, accessibility, and developer experience so teams can move faster with confidence.',
		'I also know most people are not hiring code - they are hiring trust. I keep projects transparent, explain tradeoffs in plain language, and stay reliable from kickoff to launch so clients always know where things stand.'
	]
};

export const projects: Project[] = [
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
