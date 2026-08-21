import satori from "satori";
import { Resvg } from "@resvg/resvg-wasm";

const BURGUNDY = "#650D1B";
const IVORY = "#F7F2EA";
const ROSE_GOLD = "#EBA08D";

interface OgImageOptions {
  title: string;
  subtitle?: string;
  description?: string;
  width?: number;
  height?: number;
}

export async function generateOgImage({
  title,
  subtitle,
  description,
  width = 1200,
  height = 630,
}: OgImageOptions): Promise<Uint8Array> {
  const svg = await satori(
    {
      type: "div",
      props: {
        children: [
          {
            type: "div",
            props: {
              children: [
                {
                  type: "span",
                  props: {
                    children: "SHREENATIKA",
                    style: {
                      fontFamily: "serif",
                      fontSize: 18,
                      letterSpacing: "0.2em",
                      color: ROSE_GOLD,
                      textTransform: "uppercase",
                    },
                  },
                },
              ],
              style: {
                position: "absolute",
                top: 60,
                left: 60,
                right: 60,
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              },
            },
          },
          {
            type: "div",
            props: {
              children: [
                {
                  type: "h1",
                  props: {
                    children: title,
                    style: {
                      fontFamily: "serif",
                      fontSize: 72,
                      fontWeight: 400,
                      color: BURGUNDY,
                      lineHeight: 1.1,
                      margin: 0,
                    },
                  },
                },
                subtitle
                  ? {
                      type: "p",
                      props: {
                        children: subtitle,
                        style: {
                          fontFamily: "sans-serif",
                          fontSize: 20,
                          color: ROSE_GOLD,
                          letterSpacing: "0.1em",
                          textTransform: "uppercase",
                          marginTop: 24,
                        },
                      },
                    }
                  : null,
                description
                  ? {
                      type: "p",
                      props: {
                        children: description,
                        style: {
                          fontFamily: "sans-serif",
                          fontSize: 24,
                          color: "#666",
                          marginTop: 20,
                          maxWidth: "80%",
                        },
                      },
                    }
                  : null,
              ].filter(Boolean),
              style: {
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                padding: "0 60px",
                height: "100%",
              },
            },
          },
          {
            type: "div",
            props: {
              children: [
                {
                  type: "span",
                  props: {
                    children: "Classical Dance Academy",
                    style: {
                      fontFamily: "sans-serif",
                      fontSize: 14,
                      color: "#999",
                      letterSpacing: "0.05em",
                    },
                  },
                },
              ],
              style: {
                position: "absolute",
                bottom: 60,
                left: 60,
                right: 60,
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              },
            },
          },
        ],
        style: {
          width,
          height,
          backgroundColor: IVORY,
          position: "relative",
          overflow: "hidden",
        },
      },
    } as any,
    {
      width,
      height,
      fonts: [
        {
          name: "serif",
          data: await fetch(
            "https://fonts.gstatic.com/s/ebgaramond/v27/SlGDmQSNjdsmc35JDF1K5E55YMjF_7DPuGi-6_RUA4V-e6yHgQ.woff2",
          ).then((res) => res.arrayBuffer()),
          style: "normal",
        },
        {
          name: "sans-serif",
          data: await fetch(
            "https://fonts.gstatic.com/s/dmsans/v15/rP2tp2ywxg089UriI5-g4vlH9VoD8CmcqZG40F9JadbnoEwAopxhS23JjA.woff2",
          ).then((res) => res.arrayBuffer()),
          style: "normal",
        },
      ],
    },
  );

  const resvg = new Resvg(svg, {
    fitTo: {
      mode: "width",
      value: width,
    },
  });

  const pngData = resvg.render();
  return pngData.asPng();
}

export function getOgImageUrl(options: OgImageOptions): string {
  const params = new URLSearchParams({
    title: options.title,
    ...(options.subtitle && { subtitle: options.subtitle }),
    ...(options.description && { description: options.description }),
  });
  return `/api/og?${params.toString()}`;
}
