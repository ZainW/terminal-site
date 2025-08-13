// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
	vite: {
		plugins: [
			{
				name: 'security-headers',
				configureServer(server) {
					server.middlewares.use('/', (_req, res, next) => {
						// Content Security Policy
						res.setHeader('Content-Security-Policy', 
							"default-src 'self'; " +
							"script-src 'self' 'unsafe-inline'; " +
							"style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; " +
							"font-src 'self' https://fonts.gstatic.com; " +
							"img-src 'self' data:; " +
							"connect-src 'self'; " +
							"frame-ancestors 'none'; " +
							"base-uri 'self'"
						);
						
						// Additional security headers
						res.setHeader('X-Content-Type-Options', 'nosniff');
						res.setHeader('X-Frame-Options', 'DENY');
						res.setHeader('X-XSS-Protection', '1; mode=block');
						res.setHeader('Referrer-Policy', 'strict-origin-when-cross-origin');
						res.setHeader('Permissions-Policy', 'geolocation=(), microphone=(), camera=()');
						
						next();
					});
				}
			}
		]
	}
});
