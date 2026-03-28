# API Proxy Implementation for GitHub Contributions

## Goal
Build a server-side API proxy to fetch GitHub contribution data and bypass CORS restrictions.

## Route Structure
- File location: src/pages/api/contributions/[username].ts
- Must export a GET function for the API endpoint.

## Data Fetching & Error Handling
1. **Validation**: Extract username from params. If missing, return 400 Bad Request.
2. **Fetch**: Make a server-side etch() call to https://github.com/$username.contribs.
3. **Error Handling**:
   - If response is 404, return 404 Not Found.
   - If response is not ok, log the error and return 502 Bad Gateway or 500 Internal Server Error with JSON error details.
   - Use 	ry/catch around the network request to handle parsing and timeout failures.
4. **Success**: Parse the JSON array and return it in a standard Astro Response object with Content-Type: application/json.

## Caching Strategy
Set the following caching header on the response to optimize performance and prevent rate-limiting:
- Cache-Control: public, max-age=3600, s-maxage=3600, stale-while-revalidate=86400
"@
node -e "const fs = require('fs'); fs.writeFileSync('d:/ICET/my-mona-mayhem/mona-mayhem/workshop/copilot.instruction.md', '# API Proxy Implementation for GitHub Contributions\n\n## Goal\nBuild a server-side API proxy to fetch GitHub contribution data and bypass CORS restrictions.\n\n## Route Structure\n- File location: src/pages/api/contributions/[username].ts\n- Must export a GET function for the API endpoint.\n\n## Data Fetching & Error Handling\n1. **Validation**: Extract username from params. If missing, return 400 Bad Request.\n2. **Fetch**: Make a server-side etch() call to https://github.com/.contribs.\n3. **Error Handling**:\n   - If response is 404, return 404 Not Found.\n   - If response is not ok, log the error and return 502 Bad Gateway or 500 Internal Server Error with JSON error details.\n   - Use 	ry/catch around the network request to handle parsing and timeout failures.\n4. **Success**: Parse the JSON array and return it in a standard Astro Response object with Content-Type: application/json.\n\n## Caching Strategy\nSet the following caching header on the response to optimize performance and prevent rate-limiting:\n- Cache-Control: public, max-age=3600, s-maxage=3600, stale-while-revalidate=86400\n');"
"
"
curl.exe http://localhost:4321/api/contributions/octocat
