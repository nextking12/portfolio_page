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

export type SocialLink = {
	label: string;
	href: string;
};

export const navItems: NavItem[] = [
	{ label: 'Home', href: '#home' },
	{ label: 'About', href: '#about' },
	{ label: 'Projects', href: '#projects' },
	{ label: 'Skills', href: '#skills' },
	{ label: 'Contact', href: '#contact' }
];

export const profile: Profile = {
	name: 'Your Name',
	role: 'Software Engineer',
	tagline: 'I build thoughtful digital products with a focus on speed, clarity, and polish.',
	intro:
		'TODO: Replace this with a concise two to three sentence introduction that explains your value and what kinds of products you enjoy building.',
	about: [
		'TODO: Add a short background paragraph. Mention your years of experience, product domains, or the type of teams you have worked with.',
		'TODO: Add a second paragraph with your engineering style. You might include collaboration, ownership, performance, accessibility, or DX priorities.'
	]
};

export const projects: Project[] = [
	{
		title: 'Project One',
		description:
			'TODO: Describe the core problem, your solution, and one measurable outcome. Keep it to two short lines.',
		tags: ['SvelteKit', 'TypeScript', 'Tailwind'],
		repo: 'https://github.com/your-username/project-one',
		live: 'https://project-one.example.com'
	},
	{
		title: 'Project Two',
		description:
			'TODO: Highlight architecture choices, performance improvements, or a technical challenge you solved.',
		tags: ['Node.js', 'PostgreSQL', 'REST API'],
		repo: 'https://github.com/your-username/project-two',
		live: 'https://project-two.example.com'
	},
	{
		title: 'Project Three',
		description:
			'TODO: Showcase product impact, test strategy, or reliability work. Keep each project story outcome-oriented.',
		tags: ['React', 'Playwright', 'CI/CD'],
		repo: 'https://github.com/your-username/project-three',
		live: 'https://project-three.example.com'
	}
];

export const skillGroups: SkillGroup[] = [
	{ title: 'Frontend', items: ['Svelte', 'React', 'TypeScript', 'Tailwind CSS', 'Accessibility'] },
	{ title: 'Backend', items: ['Node.js', 'Express', 'PostgreSQL', 'REST', 'GraphQL'] },
	{ title: 'Workflow', items: ['GitHub Actions', 'Playwright', 'Vitest', 'Vercel', 'Figma'] }
];

export const socials: SocialLink[] = [
	{ label: 'Email', href: 'mailto:you@example.com' },
	{ label: 'GitHub', href: 'https://github.com/your-username' },
	{ label: 'LinkedIn', href: 'https://www.linkedin.com/in/your-profile/' }
];
