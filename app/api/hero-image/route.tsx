import { ImageResponse } from "next/og";

export const runtime = "edge";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const type = searchParams.get("type") || "cafe";

  const gradientColors = {
    cafe: ["#967669", "#43302b"],
    restaurant: ["#846358", "#2b1810"],
  };

  const colors = gradientColors[type as keyof typeof gradientColors] || gradientColors.cafe;

  return new ImageResponse(
    (
      <div
        style={{
          background: `linear-gradient(45deg, ${colors[0]}, ${colors[1]})`,
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "2rem",
        }}
      >
        <div
          style={{
            fontSize: "12rem",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            opacity: "0.3",
          }}
        >
          {type === "cafe" ? "☕" : "🍽️"}
        </div>
      </div>
    ),
    {
      width: 1920,
      height: 1080,
    }
  );
} 