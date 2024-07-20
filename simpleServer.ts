// To listen on port 3000.
Deno.serve({ port: 3000 }, (_req) => {
  return new Response("Hello, World!");
});
