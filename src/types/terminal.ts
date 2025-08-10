export interface Command {
	name: string;
	description: string;
	execute: () => string | Promise<string>;
}

export interface CommandRegistry {
	[key: string]: () => string | Promise<string>;
}

export interface Skill {
	name: string;
	level: number;
}

export interface CompletionSuggestion {
	command: string;
	flags?: string[];
	files?: string[];
}

export interface TerminalState {
	commandHistory: string[];
	historyIndex: number;
	currentDirectory: string;
	bootComplete: boolean;
	bootSkipped: boolean;
}

export interface BootMessage {
	text: string;
	delay?: number;
}

export interface TabCompletionResult {
	suggestions: string[];
	commonPrefix: string;
}

export type CommandResult = string | Promise<string>;