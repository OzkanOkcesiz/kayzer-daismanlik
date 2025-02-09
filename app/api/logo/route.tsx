import { ImageResponse } from "next/og";

export const runtime = "edge";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const variant = searchParams.get("variant") || "default";

  const isWhite = variant === "white";

  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          background: "transparent",
          width: "100%",
          height: "100%",
          alignItems: "center",
          justifyContent: "flex-start",
          padding: "20px",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              width: "48px",
              height: "48px",
              background: isWhite ? "#ffffff" : "#43302b",
              borderRadius: "50%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              marginRight: "12px",
            }}
          >
            <span
              style={{
                fontSize: "24px",
                color: isWhite ? "#43302b" : "#ffffff",
                fontWeight: "bold",
              }}
            >
              K
            </span>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              color: isWhite ? "#ffffff" : "#43302b",
            }}
          >
            <span
              style={{
                fontSize: "24px",
                fontWeight: "bold",
                lineHeight: "1.2",
              }}
            >
              KAYZER
            </span>
            <span
              style={{
                fontSize: "16px",
                opacity: "0.9",
              }}
            >
              DANIŞMANLIK
            </span>
          </div>
        </div>
      </div>
    ),
    {
      width: 300,
      height: 80,
    }
  );
} 