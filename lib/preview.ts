// Project preview image resolution (lifted from the Velorah ProjectsPage so
// desktop windows and the Finder grid share one implementation).

export function ogCard(github?: string): string | null {
  const match = github?.match(/github\.com\/([^/]+\/[^/]+)/);
  return match ? `https://opengraph.githubassets.com/1/${match[1]}` : null;
}

export function previewFor(project: { external?: string; github?: string }): {
  src: string;
  fallback: string | null;
} | null {
  const og = ogCard(project.github);
  if (project.external) {
    // Microlink renders full JS + waits, so dynamic apps screenshot correctly.
    const u = encodeURIComponent(project.external);
    return {
      src: `https://api.microlink.io/?url=${u}&screenshot=true&meta=false&embed=screenshot.url&viewport.width=1200&viewport.height=630&waitUntil=networkidle2`,
      fallback: og,
    };
  }
  return og ? { src: og, fallback: null } : null;
}
