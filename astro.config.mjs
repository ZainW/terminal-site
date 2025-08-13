// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
	vite: {
		plugins: [
			{
				name: 'security-headers-dev',
				configureServer(server) {
					server.middlewares.use('/', (_req, res, next) => {
						// Development-only CSP - Astro-compatible
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
						res.setHeader('Permissions-Policy', 'geolocation=(), microphone=(), camera=(), payment=(), usb=()');
						
						next();
					});
				}
			}
		]
	}
});

/*
PRODUCTION CSP CONFIGURATION:
For production deployment, configure these headers in your hosting provider/CDN:

Content-Security-Policy: default-src 'self'; script-src 'self' 'unsafe-inline'; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src 'self' https://fonts.gstatic.com; img-src 'self' data:; connect-src 'self'; frame-ancestors 'none'; base-uri 'self'
X-Content-Type-Options: nosniff
X-Frame-Options: DENY
X-XSS-Protection: 1; mode=block
Referrer-Policy: strict-origin-when-cross-origin
Permissions-Policy: geolocation=(), microphone=(), camera=(), payment=(), usb=()

For better security, consider implementing nonce-based CSP with a build plugin.
*/
