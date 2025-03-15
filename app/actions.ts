"use server"

// This is now just a placeholder since we're handling authentication client-side
export async function verifyAccessCode(code: string) {
  console.log("This server action is no longer used for verification")
  return { success: true }
}

