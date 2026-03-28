import type { APIRoute } from 'astro';

export const prerender = false;

export const GET: APIRoute = async () => {
	const username = 'shwethalokugamage';

	try {
		const response = await fetch(`https://github.com/${username}.contribs`);

		if (response.status === 404) {
			return new Response(JSON.stringify({ error: 'User not found' }), {
				status: 404,
				headers: { 'Content-Type': 'application/json' },
			});
		}

		if (!response.ok) {
			return new Response(JSON.stringify({ error: 'Failed to fetch contribution data' }), {
				status: 502, // Bad Gateway
				headers: { 'Content-Type': 'application/json' },
			});
		}

		const data = await response.json();

		return new Response(JSON.stringify(data), {
			status: 200,
			headers: { 
				'Content-Type': 'application/json',
				'Cache-Control': 'public, max-age=3600, s-maxage=3600, stale-while-revalidate=86400'
			},
		});
	} catch (error) {
		console.error(`Error fetching contributions for ${username}:`, error);
		return new Response(JSON.stringify({ error: 'Internal Server Error' }), {
			status: 500,
			headers: { 'Content-Type': 'application/json' },
		});
	}
};
