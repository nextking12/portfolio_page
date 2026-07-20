export type NavItem = {
	label: string;
	href: `#${string}`;
};

export type Theme = 'light' | 'dark';

export type Profile = {
	name: string;
	headline: string;
	lead: string;
	aboutLead: string;
	about: string[];
};

export type ExperienceRole = {
	role: string;
	company: string;
	context?: string;
	period: string;
	summary: string;
	highlights: string[];
};

export type ExpertiseGroup = {
	title: string;
	items: string[];
};

export type ImpactItem = {
	metric: string;
	label: string;
	description: string;
};

export type Project = {
	title: string;
	category: string;
	description: string;
	approach: string;
	outcome: string;
	tags: string[];
	image?: string;
	imageAlt?: string;
	repo?: string;
	live?: string;
};

export type AdditionalWork = {
	title: string;
	description: string;
};

export type SocialLink = {
	label: string;
	href: string;
};

export const linkedInUrl = 'https://www.linkedin.com/in/edward-king-jr-385114251/';
export const resumeUrl = '/Edward-King-Resume.pdf';

export const navItems: NavItem[] = [
	{ label: 'Home', href: '#home' },
	{ label: 'About', href: '#about' },
	{ label: 'Experience', href: '#experience' },
	{ label: 'Expertise', href: '#expertise' },
	{ label: 'Impact', href: '#impact' },
	{ label: 'Projects', href: '#projects' },
	{ label: 'Resume', href: '#resume' },
	{ label: 'Contact', href: '#contact' }
];

export const profile: Profile = {
	name: 'Edward King',
	headline: 'Security Systems Engineer | Solutions Engineer | Technical Program Leader',
	lead: 'I connect enterprise security, systems integration, customer-facing technical leadership, and software engineering to deliver resilient systems.',
	aboutLead: 'I’m expanding 20+ years of security systems experience with software engineering.',
	about: [
		'My work sits where physical systems, networks, software, and people meet. For more than 20 years, I have designed, integrated, deployed, and commissioned security systems in mission-critical environments.',
		'Software development adds another layer to that experience: the ability to build tools, understand applications end to end, and turn recurring operational problems into maintainable systems.',
		'I am most useful in roles that need technical depth, clear communication, and ownership from discovery and architecture through implementation, validation, and delivery.'
	]
};

export const experienceRoles: ExperienceRole[] = [
	{
		role: 'Access Control Engineer',
		company: 'AECOM',
		context: 'Supporting WMATA',
		period: 'Apr 2026 - Present',
		summary: 'Enterprise security-systems engineering across a multi-site transit network.',
		highlights: [
			'Define credential technologies, access architecture, clearance models, and integration standards for critical resources.',
			'Engineer Honeywell ProWatch and its integration with CCTV/VMS, visitor management, intrusion detection, and enterprise IT.',
			'Partner with contractors, IT teams, and client leadership through design, QA/QC, implementation, and defect resolution.'
		]
	},
	{
		role: 'Security Program Manager',
		company: 'Amazon Web Services',
		period: 'May 2025 - Apr 2026',
		summary: 'Physical security architecture across global hyperscale data center programs.',
		highlights: [
			'Led access control, VMS, and intrusion-detection architecture across new construction, expansion, and retrofit programs.',
			'Established deployment, resilience, and lifecycle standards while providing design governance on integrated platforms.',
			'Managed vendors and integrators with multi-million-dollar budget authority across IT, facilities, networking, and security teams.'
		]
	},
	{
		role: 'Senior Systems Engineer',
		company: 'Pavion',
		context: 'Embedded at Philadelphia International Airport',
		period: 'Nov 2023 - May 2025',
		summary: 'Tier 2/3 engineering for integrated security infrastructure serving 1,000+ users.',
		highlights: [
			'Sustained 99.9% uptime across CCTV/VMS, access control, intrusion detection, and Windows Server infrastructure.',
			'Built PowerShell and Python monitoring automation that reduced incident response time by 40%.',
			'Connected automated alerting, REST APIs, and SQL data for cross-platform security event correlation.'
		]
	},
	{
		role: 'Senior Security Systems Administrator',
		company: 'Advanced Data & Risk Management',
		context: 'University of Pennsylvania',
		period: 'Feb 2023 - Nov 2023',
		summary:
			'Administered integrated security systems in Windows Server and VMware environments supporting 1,000+ users.',
		highlights: [
			'Maintained CCTV/VMS, access control, and intrusion-detection systems at 99.9% uptime.',
			'Supported Active Directory, policy enforcement, authentication troubleshooting, and automated integrity checks.'
		]
	}
];

export const earlierExperience =
	'Progressed through enterprise technician, installation, service, and commissioning roles with ADT Commercial, Johnson Controls, Siemens Building Technologies, Security and Data Technologies, and other integrators from 2008 to 2023.';

export const expertiseGroups: ExpertiseGroup[] = [
	{
		title: 'Security architecture',
		items: [
			'Enterprise reference designs',
			'Design governance and standards',
			'Global deployment models',
			'Lifecycle planning'
		]
	},
	{
		title: 'Security platforms',
		items: ['Honeywell ProWatch', 'Lenel OnGuard', 'CCure 9000', 'Milestone VMS']
	},
	{
		title: 'Infrastructure and integration',
		items: [
			'TCP/IP, VLANs, DNS and DHCP',
			'Windows Server and Active Directory',
			'REST APIs and SQL',
			'AWS, VMware and Linux'
		]
	},
	{
		title: 'Software and automation',
		items: [
			'Java and Spring Boot',
			'TypeScript and React',
			'Python and PowerShell',
			'PostgreSQL, Docker and CI/CD'
		]
	}
];

export const impactItems: ImpactItem[] = [
	{
		metric: '20+',
		label: 'years in security systems',
		description:
			'A hands-on foundation spanning installation, commissioning, administration, architecture, and program delivery.'
	},
	{
		metric: '99.9%',
		label: 'mission-critical uptime',
		description:
			'Sustained integrated airport and university security infrastructure supporting more than 1,000 users.'
	},
	{
		metric: '40%',
		label: 'faster incident response',
		description:
			'Achieved through PowerShell and Python monitoring, health checks, and automated incident detection.'
	},
	{
		metric: 'Global',
		label: 'program scale',
		description:
			'Led physical security architecture and delivery across hyperscale data center programs with multi-million-dollar budget authority.'
	}
];

export const projects: Project[] = [
	{
		title: 'Physical Security Dashboard',
		category: 'Featured application',
		description:
			'A full-stack security operations dashboard for monitoring cameras, card readers, alarm panels, and motion sensors in one workspace.',
		approach:
			'Built an n-tier Java/Spring Boot REST API with JWT authentication and role-based access control, paired with a React frontend and PostgreSQL.',
		outcome:
			'Demonstrates how deep security-domain knowledge can shape secure software architecture and end-to-end product delivery.',
		tags: ['Java', 'Spring Boot', 'React', 'TypeScript', 'PostgreSQL'],
		image: '/projects/physec-dash.jpg',
		imageAlt: 'Physical Security Dashboard sign-in screen and interactive demo entry point',
		repo: 'https://github.com/nextking12/physec-dashboard',
		live: 'https://physec-dashboard.vercel.app'
	},
	{
		title: 'Physical Security Learning Platform',
		category: 'Next.js application',
		description:
			'A no-login learning experience designed to make physical access control training easier to explore and complete.',
		approach:
			'Used Next.js and TypeScript for the full stack, with Prisma and PostgreSQL for durable course content and browser-local lesson progress.',
		outcome:
			'Connects physical-security subject-matter expertise with modern full-stack application development.',
		tags: ['Next.js', 'TypeScript', 'PostgreSQL', 'Prisma'],
		image: '/projects/physec-learn.jpg',
		imageAlt: 'Physical Security Learning Platform course homepage',
		repo: 'https://github.com/nextking12/open_acs',
		live: 'https://open-acs.vercel.app/'
	},
	{
		title: 'Agency Marketing Site',
		category: 'Next.js client project',
		description:
			'A custom responsive website for a creative agency with a direct path from service discovery to inquiry.',
		approach:
			'Built a focused branded experience without a heavy content platform or paid form dependency.',
		outcome: 'Delivered a distinct, mobile-ready web presence with direct lead capture.',
		tags: ['Next.js', 'TypeScript', 'Vercel'],
		image: '/projects/smells-good.jpg',
		imageAlt: 'Smells Good Marketing website homepage',
		repo: 'https://github.com/nextking12/smells_good',
		live: 'https://www.smellsgoodmktg.com'
	}
];

export const additionalWork: AdditionalWork[] = [
	{
		title: 'WordPress',
		description:
			'Implementation and site improvements within established content-management workflows.'
	},
	{
		title: 'Automation',
		description:
			'Python, PowerShell, REST, and SQL tools that reduce repetitive operational work and improve visibility.'
	},
	{
		title: 'Design Review Assistant',
		description:
			'A software concept for making technical design reviews more consistent, traceable, and actionable.'
	}
];

export const socials: SocialLink[] = [
	{ label: 'LinkedIn', href: linkedInUrl },
	{ label: 'GitHub', href: 'https://github.com/nextking12' }
];

export const contactEmail = 'hello@ecking.dev';
