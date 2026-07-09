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
	year: string;
	repo: string;
	live: string;
};

export type SkillGroup = {
	title: string;
	items: string[];
};

export type SocialPlatform = 'github' | 'linkedin' | 'email' | 'twitter' | 'website';

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
	name: 'Jay King',
	role: 'Full-Stack Engineer',
	tagline:
		'I build fast, accessible web products with modern and clean UI systems.',
	intro:
		'I focus on shipping maintainable applications that feel polished in everyday use. I enjoy turning product ideas into clear technical plans and reliable releases.',
	about: [
		'I am an engineer who likes working across frontend and backend to deliver complete user experiences. My recent work centers on modern JavaScript stacks, responsive interfaces, and scalable component architecture.',
		'I care about clear communication, practical code quality, and steady iteration. Whether I am building a feature from scratch or improving an existing system, I prioritize performance, accessibility, and developer experience so teams can move faster with confidence.'
	]
};

export const projects: Project[] = [
	{
		title: 'PhySec.Dash',
		description:
			'A full-stack physical security operations dashboard. The current version manages security devices such as cameras, card readers, alarm panels, and motion sensors. This project is built as a portfolio-ready app with a Spring Boot API, PostgreSQL persistence, Flyway migrations, JWT authentication, role-based access control, audit logging, integration tests, and a React dashboard frontend.',
			
		tags: ['Java', 'Spring Boot', 'React', 'TypeScript', 'PostgreSQL'],
		year: '2026',
		repo: 'https://github.com/nextking12/physec-dashboard',
		live: 'https://physec-dashboard.vercel.app'
	},
	{
		title: 'Open ACS',
		description:
			'Open ACS is a Next.js learning platform for physical access control systems. The current app has a small vertical slice: Postgres for storage, Prisma for the data layer, seed content for an access control fundamentals course, and a /courses page that reads from the database.',
		tags: ['Next.js', 'TypeScript', 'PostgreSQL', 'Prisma'],
		year: '2025',
		repo: 'https://github.com/nextking12/open_acs',
		live: ''
	},
	{
		title: 'Project Three',
		description:
			'TODO: Showcase product impact, test strategy, or reliability work. Keep each project story outcome-oriented.',
		tags: ['React', 'Playwright', 'CI/CD'],
		year: '2024',
		repo: 'https://github.com/your-username/project-three',
		live: 'https://project-three.example.com'
	}
];

export const skillGroups: SkillGroup[] = [
	{ title: 'Frontend', items: ['Svelte', 'React', 'TypeScript', 'Tailwind CSS', 'Accessibility'] },
	{ title: 'Backend', items: ['Node.js', 'Express', 'PostgreSQL', 'REST', 'GraphQL'] },
	{ title: 'Workflow', items: ['GitHub Actions', 'Playwright', 'Vitest', 'Vercel', 'Figma'] }
];

export const email = 'you@example.com';

export const socials: SocialLink[] = [
	{
		label: 'GitHub',
		handle: '@your-username',
		href: 'https://github.com/your-username',
		platform: 'github'
	},
	{
		label: 'LinkedIn',
		handle: 'your-profile',
		href: 'https://www.linkedin.com/in/your-profile/',
		platform: 'linkedin'
	},
	{
		label: 'Email',
		handle: email,
		href: `mailto:${email}`,
		platform: 'email'
	},
	{
		label: 'Website',
		handle: 'your-domain.com',
		href: 'https://your-domain.com',
		platform: 'website'
	}
];
