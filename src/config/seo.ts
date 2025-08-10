export interface SEOConfig {
	title: string;
	description: string;
	keywords: string[];
	author: string;
	siteUrl: string;
	image: string;
	twitterHandle: string;
	linkedinProfile: string;
	githubProfile: string;
}

export const seoConfig: SEOConfig = {
	title: "Zain - Full Stack Developer | Interactive Terminal Portfolio",
	description: "Experienced full-stack developer specializing in React, Node.js, TypeScript, and modern web technologies. Explore my interactive terminal portfolio to discover my projects, skills, and experience.",
	keywords: [
		"full stack developer",
		"web developer",
		"react developer",
		"nodejs developer",
		"typescript developer",
		"javascript developer",
		"frontend developer",
		"backend developer",
		"software engineer",
		"web development",
		"portfolio",
		"terminal portfolio",
		"interactive portfolio",
		"creative developer",
		"zain developer"
	],
	author: "Zain",
	siteUrl: "https://zain-portfolio.dev", // Update with your actual domain
	image: "/og-image.png", // We'll create this
	twitterHandle: "@zain_codes",
	linkedinProfile: "https://linkedin.com/in/zain-dev",
	githubProfile: "https://github.com/zain-dev"
};

export const structuredData = {
	"@context": "https://schema.org",
	"@type": "Person",
	"name": "Zain",
	"jobTitle": "Full Stack Developer",
	"description": "Experienced full-stack developer specializing in React, Node.js, TypeScript, and modern web technologies.",
	"url": seoConfig.siteUrl,
	"image": `${seoConfig.siteUrl}${seoConfig.image}`,
	"sameAs": [
		seoConfig.linkedinProfile,
		seoConfig.githubProfile,
		`https://twitter.com/${seoConfig.twitterHandle.replace('@', '')}`
	],
	"knowsAbout": [
		"JavaScript",
		"TypeScript",
		"React.js",
		"Node.js",
		"Vue.js",
		"Python",
		"Web Development",
		"Full Stack Development",
		"Software Engineering",
		"Frontend Development",
		"Backend Development"
	],
	"alumniOf": {
		"@type": "EducationalOrganization",
		"name": "Computer Science Degree"
	},
	"hasOccupation": {
		"@type": "Occupation",
		"name": "Full Stack Developer",
		"occupationLocation": {
			"@type": "Place",
			"name": "Remote"
		},
		"skills": [
			"JavaScript",
			"TypeScript", 
			"React.js",
			"Node.js",
			"Vue.js",
			"Python",
			"PostgreSQL",
			"MongoDB",
			"Docker",
			"AWS"
		]
	}
};