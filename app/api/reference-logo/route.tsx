import { ImageResponse } from "next/og";

export const runtime = "edge";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const name = searchParams.get("name") || "Company";
  const bgColor = searchParams.get("bg") || "#43302b";
  const textColor = searchParams.get("color") || "#ffffff";

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
          padding: "2rem",
          color: textColor,
          fontSize: "2rem",
          fontWeight: "bold",
          textAlign: "center",
        }}
      >
        {name}
      </div>
    ),
    {
      width: 400,
      height: 200,
    }
  );
} 