import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

export default function Register() {
  return (
    <div className="min-h-screen w-screen flex items-center justify-center bg-gray-100">

      
      <Card className="w-full max-w-md shadow-lg">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl">
            Create Account
          </CardTitle>
          <CardDescription>
            Enter your details to register
          </CardDescription>
        </CardHeader>

        <CardContent>
          <form className="space-y-4">
            <div className="space-y-2">
              <Label>Full Name</Label>
              <Input placeholder="John Doe" />
            </div>

            <div className="space-y-2">
              <Label>Email</Label>
              <Input type="email" placeholder="example@mail.com" />
            </div>

            <div className="space-y-2">
              <Label>Password</Label>
              <Input type="password" />
            </div>

            <div className="space-y-2">
              <Label>Confirm Password</Label>
              <Input type="password" />
            </div>

            <Button className="w-full">
              Register
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
