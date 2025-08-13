import type { CommandRegistry, Skill } from '../types/terminal';

export class TerminalCommands {
	private currentDirectory = '~';

	getCommands(): CommandRegistry {
		return {
			help: () => this.showHelp(),
			whoami: () => this.showWhoAmI(),
			ls: () => this.listFiles(),
			'cat about.txt': () => this.showAbout(),
			'./projects.sh': () => this.showProjects(),
			'skills --list': () => this.showSkills(),
			'skills --verbose': () => this.showSkillsVerbose(),
			'tail experience.log': () => this.showExperience(),
			contact: () => this.showContact(),
			clear: () => '',
			'sudo make-coffee': () => this.makeCoffee(),
			'rm -rf /boredom': () => this.removeBoredom(),
			'ls -la /secrets': () => this.showSecrets(),
			date: () => new Date().toString(),
			pwd: () => `/home/zain${this.currentDirectory === '~' ? '' : '/' + this.currentDirectory}`,
			uname: () => 'ZainOS 1.0.0 (Creative-Developer-Edition)',
			uptime: () => 'up 25 years, 0 users, load average: ∞'
		};
	}

	getAvailableCommands(): string[] {
		return Object.keys(this.getCommands());
	}

	getAvailableFiles(): string[] {
		return [
			'about.txt',
			'projects.sh',
			'skills.json',
			'experience.log',
			'contact.vcard',
			'projects/',
			'.secrets/',
			'projects/1.md',
			'projects/2.md',
			'projects/3.md',
			'projects/4.md',
			'projects/5.md'
		];
	}

	getCommandFlags(): Record<string, string[]> {
		return {
			'ls': ['-la', '-l', '-a'],
			'skills': ['--list', '--verbose'],
			'rm': ['-rf'],
			'sudo': ['make-coffee'],
			'cat': ['about.txt', 'projects/1.md', 'projects/2.md', 'projects/3.md', 'projects/4.md', 'projects/5.md'],
			'tail': ['experience.log']
		};
	}

	private showHelp(): string {
		return `Available commands:

Basic Commands:
  help              Show this help message
  whoami            Display information about me
  ls                List available files and directories
  clear             Clear the terminal screen
  pwd               Show current directory
  date              Show current date and time
  uname             Show system information

Portfolio Commands:
  cat about.txt     Read detailed information about me
  ./projects.sh     Launch interactive project browser
  skills --list     Show my technical skills
  skills --verbose  Show detailed skill levels with progress bars
  tail experience.log  Show my work experience
  contact           Display contact information

Easter Eggs:
  sudo make-coffee  Brew some virtual coffee
  rm -rf /boredom   Remove all boredom from the system
  ls -la /secrets   List hidden secrets (if you dare)

💡 Pro tips: 
  • Use arrow keys to navigate command history
  • Press Tab for command and file completion
  • Try typing partial commands and press Tab to see suggestions`;
	}

	private showWhoAmI(): string {
		return `<span class="ascii-art">
    ███████╗ █████╗ ██╗███╗   ██╗
    ╚══███╔╝██╔══██╗██║████╗  ██║
      ███╔╝ ███████║██║██╔██╗ ██║
     ███╔╝  ██╔══██║██║██║╚██╗██║
    ███████╗██║  ██║██║██║ ╚████║
    ╚══════╝╚═╝  ╚═╝╚═╝╚═╝  ╚═══╝</span>

<strong>Hello! I'm Zain</strong>, a passionate full-stack developer who loves creating 
digital experiences that matter. I turn coffee into code and ideas 
into reality.

<em>Current Status:</em> Available for exciting opportunities
<em>Location:</em> Earth (Remote-friendly)
<em>Favorite Language:</em> JavaScript (but I speak many others)
<em>Superpower:</em> Debugging at 3 AM`;
	}

	private listFiles(): string {
		const date = new Date().toISOString().slice(0, 10);
		return `total 42
drwxr-xr-x  8 zain zain  4096 ${date} .
drwxr-xr-x  3 root root  4096 ${date} ..
-rw-r--r--  1 zain zain  2048 ${date} about.txt
-rwxr-xr-x  1 zain zain  4096 ${date} projects.sh
-rw-r--r--  1 zain zain  1024 ${date} skills.json
-rw-r--r--  1 zain zain  8192 ${date} experience.log
-rw-r--r--  1 zain zain   512 ${date} contact.vcard
drwxr-xr-x  2 zain zain  4096 ${date} projects/
drwx------  2 zain zain  4096 ${date} .secrets/`;
	}

	private showAbout(): string {
		return `<strong># About Zain</strong>

<em>## Who Am I?</em>
I'm a creative developer with a passion for building things that make 
people's lives easier and more enjoyable. With several years of experience 
in full-stack development, I've worked on everything from small business 
websites to large-scale applications.

<em>## What Drives Me?</em>
<span class="success">•</span> 🚀 Creating seamless user experiences
<span class="success">•</span> 🔧 Solving complex technical challenges  
<span class="success">•</span> 🌱 Continuous learning and growth
<span class="success">•</span> 🤝 Collaborating with amazing teams
<span class="success">•</span> ☕ Converting caffeine into clean code

<em>## My Philosophy</em>
<span class="info">"Code is poetry written for machines but read by humans."</span>

I believe in writing clean, maintainable code that tells a story. 
Every project is an opportunity to learn something new and create 
something meaningful.

<em>## Fun Facts</em>
<span class="info">•</span> I've debugged code in my dreams (and it actually worked!)
<span class="info">•</span> My rubber duck debugging collection has 7 members
<span class="info">•</span> I can center a div in CSS... most of the time
<span class="info">•</span> Stack Overflow is my second home`;
	}

	private showProjects(): string {
		return `
🚀 PROJECT LAUNCHER v2.1.0
==============================

Loading projects... ████████████ 100%

Featured Projects:
┌─────────────────────────────────────────────────────────────┐
│ 1. E-Commerce Platform                    [React, Node.js]  │
│    Full-stack shopping experience with payment integration  │
│                                                             │
│ 2. Task Management App                    [Vue.js, Python] │
│    Collaborative project management with real-time updates │
│                                                             │
│ 3. Weather Dashboard                      [JavaScript, API]│
│    Beautiful weather visualization with location services  │
│                                                             │
│ 4. Portfolio Website                      [Astro, CSS]     │
│    This very terminal you're using right now!              │
│                                                             │
│ 5. Open Source Contributions             [Various]         │
│    Contributing to the developer community                 │
└─────────────────────────────────────────────────────────────┘

Type 'cat projects/[number].md' for detailed information
Example: cat projects/1.md`;
	}

	private showSkills(): string {
		return `Technical Skills Inventory:
============================

Frontend:
  • JavaScript (ES6+)
  • TypeScript  
  • React.js
  • Vue.js
  • HTML5 & CSS3
  • Sass/SCSS
  • Tailwind CSS

Backend:
  • Node.js
  • Python
  • Express.js
  • FastAPI
  • RESTful APIs
  • GraphQL

Database:
  • PostgreSQL
  • MongoDB
  • Redis
  • SQLite

Tools & Others:
  • Git & GitHub
  • Docker
  • AWS/Cloud Services
  • Webpack/Vite
  • Jest/Testing
  • Linux/Unix

Use 'skills --verbose' for detailed proficiency levels.`;
	}

	private showSkillsVerbose(): string {
		const skills: Skill[] = [
			{ name: 'JavaScript', level: 95 },
			{ name: 'React.js', level: 90 },
			{ name: 'Node.js', level: 85 },
			{ name: 'TypeScript', level: 80 },
			{ name: 'Python', level: 75 },
			{ name: 'CSS/SCSS', level: 88 },
			{ name: 'Git', level: 92 },
			{ name: 'Docker', level: 70 },
			{ name: 'AWS', level: 65 },
			{ name: 'PostgreSQL', level: 78 }
		];

		let output = 'Skill Proficiency Analysis:\n';
		output += '='.repeat(50) + '\n\n';

		for (const skill of skills) {
			const barLength = 30;
			const sanitizedLevel = Math.floor(Math.max(0, Math.min(100, Number.isFinite(skill.level) ? skill.level : 0)));
			const filled = Math.round((sanitizedLevel / 100) * barLength);
			const empty = barLength - filled;
			const bar = '█'.repeat(filled) + '░'.repeat(empty);
			
			output += `${skill.name.padEnd(12)} [${bar}] ${sanitizedLevel}%\n`;
		}

		output += '\nLegend: █ = Proficient, ░ = Learning\n';
		output += 'Note: These bars are animated in real-time!';

		return output;
	}

	private showExperience(): string {
		return `[2024-01-15 09:00:00] INFO: Started new exciting opportunities
[2023-06-01 08:30:00] INFO: Completed major project milestone
[2023-03-15 14:20:00] DEBUG: Fixed critical production bug in 2 hours
[2022-11-20 16:45:00] INFO: Led team of 4 developers on React migration
[2022-08-10 10:15:00] SUCCESS: Deployed scalable microservices architecture
[2022-05-01 09:00:00] INFO: Promoted to Senior Developer role
[2021-12-15 13:30:00] INFO: Implemented CI/CD pipeline, reduced deploy time by 80%
[2021-09-01 08:00:00] INFO: Joined amazing development team
[2021-06-15 11:20:00] SUCCESS: Graduated with Computer Science degree
[2020-03-01 10:00:00] INFO: Started journey as Junior Developer

Use 'grep ERROR experience.log' to see challenges overcome
Use 'grep SUCCESS experience.log' to see major achievements`;
	}

	private showContact(): string {
		return `
📧 CONTACT INFORMATION
======================

Email:    zain@example.com
LinkedIn: linkedin.com/in/zain-dev
GitHub:   github.com/zain-dev
Twitter:  @zain_codes
Website:  zain-portfolio.dev

📍 Location: Available for remote work worldwide
🕐 Timezone: UTC+0 (flexible for collaboration)

💬 Preferred Contact Methods:
   1. Email (for formal inquiries)
   2. LinkedIn (for professional networking)
   3. GitHub (for code-related discussions)

📝 Currently: Open to new opportunities
🎯 Interests: Full-stack development, DevOps, Open Source

Feel free to reach out! I usually respond within 24 hours.`;
	}

	private makeCoffee(): string {
		return `
☕ COFFEE BREWING SYSTEM v3.1.4
===============================

Initializing coffee maker... ✓
Grinding beans... ████████████ 100%
Heating water to optimal temperature (195°F)... ✓
Brewing... ████████████ 100%

        (  )   (   )  )
         ) (   )  (  (
         ( )  (    ) )
         _____________
        <_____________> ___
        |             |/ _ \\
        |               | | |
        |               |_| |
     ___|             |\\___/
    /    \\___________/    \\
    \\_____________________/

☕ Your virtual coffee is ready!

WARNING: This coffee may cause increased productivity,
         better code quality, and sudden urges to refactor.

Side effects may include: staying up late coding,
having brilliant ideas at 3 AM, and an addiction to
clean, readable code.`;
	}

	private removeBoredom(): string {
		return `
🗑️  BOREDOM REMOVAL UTILITY v2.0
=================================

Scanning system for boredom... ████████████ 100%

Found boredom in:
  /usr/local/mundane_tasks/
  /home/zain/repetitive_work/
  /tmp/boring_meetings/
  /var/log/dull_moments.log

Removing boredom... ████████████ 100%

rm: removing '/boredom/lack_of_creativity'... ✓
rm: removing '/boredom/repetitive_tasks'... ✓  
rm: removing '/boredom/uninspiring_projects'... ✓
rm: removing '/boredom/monday_blues'... ✓

SUCCESS: All boredom has been successfully removed!

System now running at optimal creativity levels.
Fun.exe is now running in the background.
Inspiration daemon started successfully.

Warning: Side effects may include uncontrollable urges to
build cool projects and learn new technologies!`;
	}

	private showSecrets(): string {
		const date = new Date().toLocaleDateString();
		return `
🔐 ACCESSING CLASSIFIED DIRECTORY...
====================================

Authentication required... ✓
Decrypting files... ████████████ 100%

total 13
-rw------- 1 zain zain  256 ${date} .hidden_talents
-rw------- 1 zain zain  128 ${date} .secret_projects  
-rw------- 1 zain zain  512 ${date} .future_plans
-rw------- 1 zain zain   64 ${date} .favorite_memes
-rw------- 1 zain zain  1024 ${date} .dream_job.txt

🤫 Secret revealed: I once spent 6 hours debugging a problem
   that was caused by a missing semicolon. Don't tell anyone!

🎮 Hidden talent: I can solve a Rubik's cube while explaining
   the difference between == and === in JavaScript.

🚀 Secret project: Building an AI that generates perfect
   commit messages (still in beta, currently just suggests
   "fixed stuff" for everything).

🎯 Future plan: Become the developer who actually reads the
   documentation before asking questions on Stack Overflow.

Access granted. You're now part of the secret club! 🎉`;
	}
}