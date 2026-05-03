// "use client";

// import { useState } from "react";
// import { useRouter } from "next/navigation";

// export default function RegisterPage() {
//     const router = useRouter();

//     const [username, setUsername] = useState("");
//     const [email, setEmail] = useState("");
//     const [password, setPassword] = useState("");
//     const [confirmPassword, setConfirmPassword] = useState("");

//     const [error, setError] = useState("");
//     const [success, setSuccess] = useState("");
//     const [loading, setLoading] = useState(false);

//     const handleRegister = async (e) => {
//         e.preventDefault();
//         setError("");
//         setSuccess("");

//         // Basic validation
//         if (password !== confirmPassword) {
//             setError("Passwords do not match");
//             setLoading(false);
//             return;
//         }

//         try {
//             const res = await fetch("/api/register", {
//                 method: "POST",
//                 headers: {
//                     "Content-Type": "application/json",
//                 },
//                 body: JSON.stringify({
//                     username,
//                     email,
//                     password,
//                 }),
//             });

//             const data = await res.json();

//             if (!res.ok) {
//                 setError(data.error || "Failed to register");
//                 setLoading(false);
//                 return;
//             }

//             setSuccess("Registration successful!");

//             setTimeout(() => {
//                 router.push("/login");
//             }, 2000);
//         } catch (error) {
//             setError(error.message);
//         } finally {
//             setLoading(false);
//         }
//     };

//     return(
//          <div className="min-h-screen flex items-center justify-center bg-gray-100">

//       <form
//         onSubmit={handleRegister}
//         className="bg-white p-8 rounded-xl shadow-lg w-[400px] flex flex-col gap-4"
//       >
//         <h2 className="text-2xl font-bold text-center">Create Admin Account</h2>

//         {error && <p className="text-red-500 text-sm">{error}</p>}
//         {success && <p className="text-green-600 text-sm">{success}</p>}

//         <input
//           type="text"
//           placeholder="Username"
//           className="border p-2 rounded-lg"
//           value={username}
//           onChange={(e) => setUsername(e.target.value)}
//         />

//         <input
//           type="email"
//           placeholder="Email"
//           className="border p-2 rounded-lg"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//           required
//         />

//         <input
//           type="password"
//           placeholder="Password"
//           className="border p-2 rounded-lg"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//           required
//         />

//         <input
//           type="password"
//           placeholder="Confirm Password"
//           className="border p-2 rounded-lg"
//           value={confirmPassword}
//           onChange={(e) => setConfirmPassword(e.target.value)}
//           required
//         />

//         <button
//           type="submit"
//           disabled={loading}
//           className="bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 disabled:opacity-50"
//         >
//           {loading ? "Creating..." : "Register"}
//         </button>

//         <p className="text-sm text-center">
//           Already have an account?{" "}
//           <span
//             onClick={() => router.push("/")}
//             className="text-blue-600 cursor-pointer hover:underline"
//           >
//             Login
//           </span>
//         </p>
//       </form>
//     </div>
//     );
// }