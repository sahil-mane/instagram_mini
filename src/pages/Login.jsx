import { useEffect, useState } from "react"
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

const Login = () => {
  const [showLogin, setShowLogin] = useState(false)
  const [fadeOut, setFadeOut] = useState(false)

  useEffect(() => {
    const fadeTimer = setTimeout(() => {
      setFadeOut(true)
    }, 3000)

    const loginTimer = setTimeout(() => {
      setShowLogin(true)
    }, 4000)

    return () => {
      clearTimeout(fadeTimer)
      clearTimeout(loginTimer)
    }
  }, [])

  return (
    <div className="min-h-screen flex items-center justify-center">

      {!showLogin ? (
        <h1
          className={`text-5xl font-bold transition-opacity duration-1000 ${
            fadeOut ? "opacity-0" : "opacity-100"
          }`}
        >
          Welcome to{" "}
          <span className="bg-gradient-to-r from-violet-500 to-indigo-500 bg-clip-text text-transparent">
            Pixora
          </span>
        </h1>
      ) : (
        <Card className="w-full max-w-sm animate-in fade-in zoom-in duration-500">
          <CardHeader>
            <CardTitle>Login to your account</CardTitle>
          </CardHeader>

          <CardContent>
            <div className="flex flex-col gap-6">
              <div className="grid gap-2">
                <Label>Email</Label>
                <Input className="focus-visible:ring-violet-300" type="email" required />
              </div>
              <div className="grid gap-2">
                <Label>Password</Label>
                <Input className="focus-visible:ring-violet-300" type="password" required />
              </div>
            </div>
          </CardContent>

          <CardFooter className="flex flex-col gap-2">
            <Button className="w-full bg-gradient-to-r from-violet-500 to-indigo-500 cursor-pointer">
              Sign in
            </Button>
            <Button className="w-full border-2 border-violet-400-50 bg-transparent text-black hover:bg-transparent cursor-pointer">
              Sign Up
            </Button>
          </CardFooter>
        </Card>
      )}
    </div>
  )
}

export default Login