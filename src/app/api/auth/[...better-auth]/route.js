
import { auth } from "@/lib/auth";
import { toNextJsHandler } from "better-auth/next-js";

// Function of request handle better auth with next js router


export const { GET, POST } = toNextJsHandler(auth);
