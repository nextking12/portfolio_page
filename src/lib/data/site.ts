export type NavItem = {
	label: string;
	href: `#${string}`;
};

export type Theme = 'light' | 'dark';

export type Profile = {
	name: string;
	headline: {
		opening: string;
		emphasis: string;
		closing: string;
	};
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
export const githubUrl = 'https://github.com/nextking12';
export const resumeUrl = '/Edward-King-Resume.pdf';

export const navItems: NavItem[] = [
	{ label: 'Home', href: '#home' },
	{ label: 'Projects', href: '#projects' },
	{ label: 'About', href: '#about' },
	{ label: 'Services', href: '#services' },
	{ label: 'Contact', href: '#contact' }
];

export const profile: Profile = {
	name: 'Edward King',
	headline: {
		opening: 'Clear thinking.',
		emphasis: 'Thoughtful engineering.',
		closing: 'Useful products.'
	},
	lead: 'I help businesses and teams create thoughtful websites, applications, and tools that make work simpler.',
	aboutLead: 'A practical development partner, from first idea to finished product.',
	about: [
		'I build web products end to end, from understanding the problem and shaping the experience to developing and launching the finished product.',
		'My background in mission-critical systems gives me a practical lens: good software should be clear, dependable, and genuinely useful to the people relying on it.',
		'I value direct communication, sensible decisions, and a collaborative process that keeps you informed without burying you in technical detail.'
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
		title: 'Custom web applications',
		items: [
			'Full-stack product development',
			'Secure user accounts',
			'Dashboards and workflows',
			'Responsive, accessible interfaces'
		]
	},
	{
		title: 'Business websites',
		items: [
			'Distinct visual design',
			'Clear customer journeys',
			'Lead capture and integrations',
			'Fast, mobile-ready builds'
		]
	},
	{
		title: 'Internal tools',
		items: [
			'Workflow automation',
			'Operational dashboards',
			'Data and API integrations',
			'Purpose-built team utilities'
		]
	},
	{
		title: 'Technical partnership',
		items: [
			'Project scoping',
			'Architecture and planning',
			'Modernization and improvements',
			'Launch and handoff support'
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
		title: 'Agency Marketing Site',
		category: 'Featured live client project',
		description:
			'A live production website built for a real creative agency client, with a direct path from service discovery to inquiry.',
		approach:
			'Built a focused branded experience without a heavy content platform or paid form dependency.',
		outcome:
			'Launched a distinct, mobile-ready web presence that is actively serving the client and capturing leads.',
		tags: ['Next.js', 'TypeScript', 'Vercel'],
		image: '/projects/smells-good.jpg',
		imageAlt: 'Smells Good Marketing website homepage',
		repo: 'https://github.com/nextking12/smells_good',
		live: 'https://www.smellsgoodmktg.com'
	},
	{
		title: 'Physical Security Dashboard',
		category: 'Full-stack application',
		description:
			'A full-stack security operations dashboard shaped by 20+ years of hands-on experience with access control, video, intrusion detection, and mission-critical security environments.',
		approach:
			'Built an n-tier Java/Spring Boot REST API with JWT authentication and role-based access control, paired with a React frontend and PostgreSQL.',
		outcome:
			'Turns real operational workflows and two decades of domain knowledge into a focused product for monitoring physical security systems.',
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
			'A no-login learning experience that distills 20+ years of physical security systems knowledge into approachable access control training.',
		approach:
			'Used Next.js and TypeScript for the full stack, with Prisma and PostgreSQL for durable course content and browser-local lesson progress.',
		outcome:
			'Makes field-tested subject-matter expertise easier for newcomers and working professionals to explore at their own pace.',
		tags: ['Next.js', 'TypeScript', 'PostgreSQL', 'Prisma'],
		image: '/projects/physec-learn.jpg',
		imageAlt: 'Physical Security Learning Platform course homepage',
		repo: 'https://github.com/nextking12/open_acs',
		live: 'https://open-acs.vercel.app/'
	}
];

export const additionalWork: AdditionalWork[] = [
	{
		title: 'Web platforms',
		description:
			'Responsive sites and improvements across custom builds and established content platforms.'
	},
	{
		title: 'Automation',
		description:
			'Python, PowerShell, REST, and SQL tools that reduce repetitive operational work and improve visibility.'
	},
	{
		title: 'Product experiments',
		description:
			'Prototypes that explore better ways to handle technical reviews, training, and operational workflows.'
	}
];

export const socials: SocialLink[] = [
	{ label: 'GitHub', href: githubUrl },
	{ label: 'LinkedIn', href: linkedInUrl }
];
