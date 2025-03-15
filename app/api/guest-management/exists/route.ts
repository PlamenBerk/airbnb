// import { NextResponse } from "next/server"
// import https from "https"
// import axios from "axios"
//
// export async function POST(request: Request) {
//   try {
//     const body = await request.json()
//     console.log("API route called with body:", body)
//
//     // Create a custom axios instance that ignores certificate errors
//     const instance = axios.create({
//       httpsAgent: new https.Agent({
//         rejectUnauthorized: false, // WARNING: This is insecure, but necessary for self-signed certs
//       }),
//     })
//
//     // Forward the request to your backend using axios
//     const response = await instance.post("https://34.132.92.1/api/guest-management/exists", body, {
//       headers: {
//         "Content-Type": "application/json",
//       },
//     })
//
//     console.log("Response status:", response.status)
//     console.log("Response data:", response.data)
//
//     return NextResponse.json(response.data)
//   } catch (error) {
//     console.error("API proxy error:", error)
//     return NextResponse.json(
//       { error: "Failed to connect to the backend server", details: error.message },
//       { status: 500 },
//     )
//   }
// }
//
