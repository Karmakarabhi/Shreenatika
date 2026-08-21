import { createFileRoute } from "@tanstack/react-router";
import { generateOgImage } from "@/lib/og";

export const Route = createFileRoute("/api/og")({
  server: {
    handlers: {
      GET: async ({ request }) => {
        const url = new URL(request.url);
        const title = url.searchParams.get("title") || "Shreenatika";
        const subtitle = url.searchParams.get("subtitle") || "";
        const description = url.searchParams.get("description") || "";

        const png = await generateOgImage({
          title,
          subtitle,
          description,
        });

        return new Response(png as unknown as BodyInit, {
          headers: {
            "Content-Type": "image/png",
            "Cache-Control": "public, max-age=31536000, immutable",
          },
        });
      },
    },
  },
});
