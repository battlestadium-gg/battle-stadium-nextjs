import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";

export const env = createEnv({
  server: {
    VERCEL_URL: z.string().optional(),
    VERCEL_ENV: z.string().optional(),
    VERCEL_OIDC_TOKEN: z.string().optional(),
    COOKIE_DOMAIN: z.string().optional(),
    NODE_ENV: z.string().default("development"),
    MEASUREMENT_ID: z.string().optional().default("G-XXXXXXXXXX"),
    PROD_API_BASE_URL: z.string().optional(),
    WEBSOCKET_URL: z.string().optional(),
    NEON_DATABASE_URL: z.string().optional(),
    LOCAL_DEV_BACKEND_HOST: z.string().optional().default("localhost"),
    LOCAL_DEV_BACKEND_PORT: z.string().optional().default("10000"),
    CLERK_SECRET_KEY: z.string(),
    CLERK_SIGN_IN_URL: z.string().optional().default("/sign-in"),
    CLERK_SIGN_UP_URL: z.string().optional().default("/sign-up"),
    EDGE_CONFIG: z.string().url().optional().default("https://edge.clerk.dev"),
    UPLOADTHING_TOKEN: z.string().optional(),
    AUTH_SECRET: z.string({
      required_error:
        "AUTH_SECRET  is required. This is a secret key used to sign and verify JWT tokens. It should be a long, seemingly random string.",
    }),
    DISCORD_APP_TOKEN: z
      .string({
        required_error:
          "DISCORD_APP_TOKEN is required. Visit https://discord.com/developers/applications -> Your bot -> Bot -> Token",
      })
      .min(
        1,
        "DISCORD_APP_TOKEN is required. Visit https://discord.com/developers/applications -> Your bot -> Bot -> Token",
      )
      .optional(),
    DISCORD_APP_ID: z
      .string({
        required_error:
          "DISCORD_APP_ID is required. Visit https://discord.com/developers/applications -> Your bot -> General information -> Application ID",
      })
      .min(
        1,
        "DISCORD_APP_ID is required. Visit https://discord.com/developers/applications -> Your bot -> General information -> Application ID",
      )
      .optional(),
    DISCORD_APP_PUBLIC_KEY: z
      .string({
        required_error:
          "DISCORD_APP_PUBLIC_KEY is required. Visit https://discord.com/developers/applications -> General information -> PUBLIC KEY",
      })
      .min(
        1,
        "DISCORD_APP_PUBLIC_KEY is required. Visit https://discord.com/developers/applications -> General information -> PUBLIC KEY",
      )
      .optional(),
    // DISCORD_BOT_TOKEN: z
    //   .string({
    //     required_error:
    //       "DISCORD_BOT_TOKEN is required. Visit https://discord.com/developers/applications -> Bot -> Token. This variable used only for register commands",
    //   })
    //   .min(
    //     1,
    //     "DISCORD_BOT_TOKEN is required. Visit https://discord.com/developers/applications -> Bot -> Token. This variable used only for register commands",
    //   ),
    ROOT_URL: z.string().url("ROOT_URL must be a valid URL").optional().default("http://localhost:10000"),
  },
  client: {
    NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY: z.string().min(1),
  },
  runtimeEnv: {
    NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY: process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY,
    VERCEL_URL: process.env.VERCEL_URL,
    VERCEL_ENV: process.env.VERCEL_ENV,
    VERCEL_OIDC_TOKEN: process.env.VERCEL_OIDC_TOKEN,
    COOKIE_DOMAIN: process.env.COOKIE_DOMAIN,
    NODE_ENV: process.env.NODE_ENV,
    MEASUREMENT_ID: process.env.MEASUREMENT_ID,
    PROD_API_BASE_URL: process.env.PROD_API_BASE_URL,
    WEBSOCKET_URL: process.env.WEBSOCKET_URL,
    NEON_DATABASE_URL: process.env.NEON_DATABASE_URL,
    LOCAL_DEV_BACKEND_HOST: process.env.LOCAL_DEV_BACKEND_HOST,
    LOCAL_DEV_BACKEND_PORT: process.env.LOCAL_DEV_BACKEND_PORT,
    CLERK_SECRET_KEY: process.env.CLERK_SECRET_KEY,
    CLERK_SIGN_IN_URL: process.env.CLERK_SIGN_IN_URL,
    CLERK_SIGN_UP_URL: process.env.CLERK_SIGN_UP_URL,
    EDGE_CONFIG: process.env.EDGE_CONFIG,
    UPLOADTHING_TOKEN: process.env.UPLOADTHING_TOKEN,
    AUTH_SECRET: process.env.AUTH_SECRET,
    DISCORD_APP_TOKEN: process.env.DISCORD_APP_TOKEN,
    DISCORD_APP_ID: process.env.DISCORD_APP_ID,
    DISCORD_APP_PUBLIC_KEY: process.env.DISCORD_APP_PUBLIC_KEY,
    ROOT_URL: process.env.ROOT_URL
  },
  onInvalidAccess: (error) => {
    throw new Error(`❌ Attempted to access a server-side environment variable on the client: ${error}`);
  },
});
