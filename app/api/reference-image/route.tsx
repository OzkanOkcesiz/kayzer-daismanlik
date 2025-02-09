import { ImageResponse } from "next/og";

export const runtime = "edge";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const type = searchParams.get("type") || "cafe";
  const number = searchParams.get("number") || "1";
  const bgColor = searchParams.get("bg") || "#43302b";

  const getEmoji = (type: string) => {
    switch (type) {
      case "cafe":
        return "☕";
      case "restaurant":
        return "🍽️";
      case "bistro":
        return "🍷";
      default:
        return "🏪";
    }
  };

  return new ImageResponse(
    (
      <div
        style={{
          background: bgColor,
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: "2rem",
          color: "white",
          gap: "2rem",
        }}
      >
        <div
          style={{
            fontSize: "8rem",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {getEmoji(type)}
        </div>
        <div
          style={{
            fontSize: "2rem",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {type.charAt(0).toUpperCase() + type.slice(1)} #{number}
        </div>
      </div>
    ),
    {
      width: 800,
      height: 600,
    }
  );
} 