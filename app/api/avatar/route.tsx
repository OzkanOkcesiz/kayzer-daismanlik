import { ImageResponse } from "next/og";

export const runtime = "edge";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const name = searchParams.get("name") || "K";
  const bgColor = searchParams.get("bg") || "#43302b";
  const size = parseInt(searchParams.get("size") || "400");

  const initials = name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase()
    .slice(0, 2);

  return new ImageResponse(
    (
      <div
        style={{
          background: bgColor,
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: "50%",
          fontSize: size * 0.4,
          color: "white",
          fontWeight: 600,
        }}
      >
        {initials}
      </div>
    ),
    {
      width: size,
      height: size,
    }
  );
} 