import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useAuthStore } from "@/store/authStore"
import { useNavigate } from "react-router-dom"
import apiClient from "@/utils/apiClient"

// === Pixora Splash Animation ===
const PixoraSplash = ({ onComplete }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      if (typeof onComplete === "function") onComplete()
    }, 3200)
    return () => clearTimeout(timer)
  }, [onComplete])

  return (
    <motion.div
      className="absolute inset-0 flex items-center justify-center overflow-hidden z-30"
      initial={{ backgroundColor: "#000" }}
      animate={{ backgroundColor: ["#000", "#000", "#000", "#f0008c"] }}
      transition={{ duration: 3, ease: "easeInOut", times: [0, 0.4, 0.6, 1] }}
    >
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-fuchsia-600 via-pink-500 to-orange-400"
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 0, 1] }}
        transition={{ duration: 3, times: [0, 0.6, 1], ease: "easeInOut" }}
      />
      <div className="relative flex items-center justify-center z-10">
        <motion.div
          className="grid grid-cols-2 gap-[4px]"
          initial={{ rotate: 0, scale: 0, opacity: 0 }}
          animate={{
            rotate: [0, 45, 0],
            scale: [0, 1.15, 1],
            opacity: 1,
          }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
        >
          {[...Array(4)].map((_, i) => (
            <div
              key={i}
              className="w-6 h-6 bg-fuchsia-500 rounded-sm sm:w-8 sm:h-8"
            />
          ))}
        </motion.div>

        <motion.h1
          className="ml-3 text-white text-4xl sm:text-5xl font-bold tracking-tight"
          initial={{ opacity: 0, x: 25 }}
          animate={{ opacity: [0, 0, 1], x: [25, 25, 0] }}
          transition={{ duration: 3, times: [0, 0.6, 1], ease: "easeOut" }}
        >
          Pixora
        </motion.h1>
      </div>
    </motion.div>
  )
}

// === Main Login Screen ===
const Login = () => {
  const [animationDone, setAnimationDone] = useState(false)
  const [slideLeft, setSlideLeft] = useState(false)
  const navigate = useNavigate()
  // const [userName, setUserName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const login = useAuthStore((state) => state.login)

  const handleLogin = async () => {
    if (!email || !password) return;

    try {
      const res = await apiClient.post("/api/auth/login", {
        email,
        password,
      });

      if (res?.success) {
        login(res.data.token);
        navigate("/");
      }

    } catch (error) {
      console.error("Login Error:", error);

      if (error.response) {
        // Server ne error bheja
        alert(error.response.data.message || "Login failed");
      } else if (error.request) {
        // Request gaya but response nahi aaya
        alert("Server response nahi mila");
      } else {
        // Kuch aur error
        alert("Something went wrong");
      }
    }
  };

  // trigger slide after animation finishes
  useEffect(() => {
    if (animationDone) {
      const timer = setTimeout(() => setSlideLeft(true), 300)
      return () => clearTimeout(timer)
    }
  }, [animationDone])

  return (
    <div
      onKeyDown={(e) => {
        if (e.key === "Enter") handleLogin()
      }}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black text-white"
    >
      {/* Splash animation full screen first */}
      <motion.div
        className="absolute top-0 left-0 w-full h-full flex items-center justify-center"
        initial={{ x: 0 }}
        animate={{ x: slideLeft ? "-25%" : 0 }}
        transition={{ duration: 1, ease: "easeInOut" }}
      >
        <PixoraSplash onComplete={() => setAnimationDone(true)} />
      </motion.div>

      {/* Login form appears AFTER animation and slide */}
      {animationDone && (
        <motion.div
          className="absolute top-0 right-0 h-full w-full md:w-1/2 flex items-center justify-center bg-white text-black"
          initial={{ opacity: 0 }}
          animate={{ opacity: slideLeft ? 1 : 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
        >
          <Card className="w-full max-w-sm mx-6 shadow-xl animate-in fade-in duration-500">
            <CardHeader>
              <CardTitle>Login to your account</CardTitle>
            </CardHeader>

            <CardContent>
              <div className="flex flex-col gap-6">
                <div className="grid gap-2">
                  <Label>Email</Label>
                  <Input
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="focus-visible:ring-violet-300"
                    type="email"
                    required
                  />
                </div>
                <div className="grid gap-2">
                  <Label>Password</Label>
                  <Input
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="focus-visible:ring-violet-300"
                    type="password"
                    required
                  />
                </div>
              </div>
            </CardContent>

            <CardFooter className="flex flex-col gap-2">
              <Button
                onClick={handleLogin}
                className="w-full bg-gradient-to-r from-violet-500 to-indigo-500"
              >
                Sign in
              </Button>
              <Button className="w-full border border-violet-400 bg-transparent text-black hover:bg-transparent">
                Sign Up
              </Button>
            </CardFooter>
          </Card>
        </motion.div>
      )}
    </div>
  )
}

export default Login