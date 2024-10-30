(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["chunks/[root of the server]__423df8._.js", {

"[externals]/ [external] (node:async_hooks, cjs)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: require } = __turbopack_context__;
{
const mod = __turbopack_external_require__("node:async_hooks");

module.exports = mod;
}}),
"[externals]/ [external] (node:buffer, cjs)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: require } = __turbopack_context__;
{
const mod = __turbopack_external_require__("node:buffer");

module.exports = mod;
}}),
"[project]/env.mjs [middleware] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
{
__turbopack_esm__({
    "env": (()=>env)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$t3$2d$oss$2f$env$2d$nextjs$2f$dist$2f$index$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@t3-oss/env-nextjs/dist/index.js [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/zod/lib/index.mjs [middleware] (ecmascript)");
;
;
const env = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$t3$2d$oss$2f$env$2d$nextjs$2f$dist$2f$index$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["createEnv"])({
    server: {
        VERCEL_URL: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$middleware$5d$__$28$ecmascript$29$__["z"].string().optional(),
        VERCEL_ENV: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$middleware$5d$__$28$ecmascript$29$__["z"].string().optional(),
        VERCEL_OIDC_TOKEN: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$middleware$5d$__$28$ecmascript$29$__["z"].string().optional(),
        COOKIE_DOMAIN: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$middleware$5d$__$28$ecmascript$29$__["z"].string().optional(),
        NODE_ENV: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$middleware$5d$__$28$ecmascript$29$__["z"].string().default("development"),
        MEASUREMENT_ID: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$middleware$5d$__$28$ecmascript$29$__["z"].string().optional().default("G-XXXXXXXXXX"),
        PROD_API_BASE_URL: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$middleware$5d$__$28$ecmascript$29$__["z"].string().optional(),
        WEBSOCKET_URL: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$middleware$5d$__$28$ecmascript$29$__["z"].string().optional(),
        NEON_DATABASE_URL: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$middleware$5d$__$28$ecmascript$29$__["z"].string().optional(),
        LOCAL_DEV_BACKEND_HOST: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$middleware$5d$__$28$ecmascript$29$__["z"].string().optional().default("localhost"),
        LOCAL_DEV_BACKEND_PORT: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$middleware$5d$__$28$ecmascript$29$__["z"].number().optional().default(10000),
        NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$middleware$5d$__$28$ecmascript$29$__["z"].string(),
        CLERK_SECRET_KEY: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$middleware$5d$__$28$ecmascript$29$__["z"].string(),
        NEXT_PUBLIC_CLERK_SIGN_IN_URL: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$middleware$5d$__$28$ecmascript$29$__["z"].string().optional().default("/sign-in"),
        NEXT_PUBLIC_CLERK_SIGN_UP_URL: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$middleware$5d$__$28$ecmascript$29$__["z"].string().optional().default("/sign-up"),
        EDGE_CONFIG: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$middleware$5d$__$28$ecmascript$29$__["z"].string().url().optional().default("https://edge.clerk.dev"),
        UPLOADTHING_TOKEN: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$middleware$5d$__$28$ecmascript$29$__["z"].string().optional(),
        AUTH_SECRET: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$middleware$5d$__$28$ecmascript$29$__["z"].string({
            required_error: "AUTH_SECRET  is required. This is a secret key used to sign and verify JWT tokens. It should be a long, seemingly random string."
        }),
        DISCORD_APP_TOKEN: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$middleware$5d$__$28$ecmascript$29$__["z"].string({
            required_error: "DISCORD_APP_TOKEN is required. Visit https://discord.com/developers/applications -> Your bot -> Bot -> Token"
        }).min(1, "DISCORD_APP_TOKEN is required. Visit https://discord.com/developers/applications -> Your bot -> Bot -> Token").optional(),
        DISCORD_APP_ID: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$middleware$5d$__$28$ecmascript$29$__["z"].string({
            required_error: "DISCORD_APP_ID is required. Visit https://discord.com/developers/applications -> Your bot -> General information -> Application ID"
        }).min(1, "DISCORD_APP_ID is required. Visit https://discord.com/developers/applications -> Your bot -> General information -> Application ID").optional(),
        DISCORD_APP_PUBLIC_KEY: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$middleware$5d$__$28$ecmascript$29$__["z"].string({
            required_error: "DISCORD_APP_PUBLIC_KEY is required. Visit https://discord.com/developers/applications -> General information -> PUBLIC KEY"
        }).min(1, "DISCORD_APP_PUBLIC_KEY is required. Visit https://discord.com/developers/applications -> General information -> PUBLIC KEY").optional(),
        // DISCORD_BOT_TOKEN: z
        //   .string({
        //     required_error:
        //       "DISCORD_BOT_TOKEN is required. Visit https://discord.com/developers/applications -> Bot -> Token. This variable used only for register commands",
        //   })
        //   .min(
        //     1,
        //     "DISCORD_BOT_TOKEN is required. Visit https://discord.com/developers/applications -> Bot -> Token. This variable used only for register commands",
        //   ),
        ROOT_URL: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$middleware$5d$__$28$ecmascript$29$__["z"].string().url("ROOT_URL must be a valid URL").optional().default("http://localhost:10000")
    },
    onInvalidAccess: (error)=>{
        throw new Error(`❌ Attempted to access a server-side environment variable on the client: ${error}`);
    }
});
}}),
"[project]/middleware.ts [middleware] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
{
__turbopack_esm__({
    "config": (()=>config),
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$env$2e$mjs__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/env.mjs [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$server$2f$routeMatcher$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@clerk/nextjs/dist/esm/server/routeMatcher.js [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$server$2f$clerkMiddleware$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@clerk/nextjs/dist/esm/server/clerkMiddleware.js [middleware] (ecmascript)");
;
;
const config = {
    matcher: [
        // Skip Next.js internals and all static files, unless found in search params
        "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
        // Always run for API routes
        "/(api|trpc)(.*)"
    ]
};
const isPublicRoute = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$server$2f$routeMatcher$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["createRouteMatcher"])([
    "/",
    "/sign-in(.*)",
    "/sign-up(.*)"
]);
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$server$2f$clerkMiddleware$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["clerkMiddleware"])(async (auth, request)=>{
    if ([
        __TURBOPACK__imported__module__$5b$project$5d2f$env$2e$mjs__$5b$middleware$5d$__$28$ecmascript$29$__["env"].NODE_ENV,
        __TURBOPACK__imported__module__$5b$project$5d2f$env$2e$mjs__$5b$middleware$5d$__$28$ecmascript$29$__["env"].VERCEL_ENV
    ].includes("production") && !isPublicRoute(request)) {
        await auth.protect();
    }
});
}}),
}]);

//# sourceMappingURL=%5Broot%20of%20the%20server%5D__423df8._.js.map