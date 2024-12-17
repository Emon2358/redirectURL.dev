import { serve } from "https://deno.land/std@0.224.0/http/server.ts";

const handler = (req: Request): Response => {
  // リダイレクト先のURL
  const redirectUrl = "https://github.com/Emon2358";

  // 301リダイレクトレスポンスを返す
  return Response.redirect(redirectUrl, 301);
};

// サーバーを指定したポートで起動
console.log("Server running on http://localhost:8000");
await serve(handler, { port: 8000 });
