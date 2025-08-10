"use client";
import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";

const Register = () => {
  const [open, setOpen] = useState(false);
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:pr-0">
        <div className="hidden lg:block">
          <DialogTrigger asChild>
            <Button
              variant="default"
              className="ml-9 rounded-full h-auto py-3 px-10 text-lg font-medium bg-white text-dodgerblue hover:bg-dodgerblue hover:text-white ttty"
            >
              Sign up
            </Button>
          </DialogTrigger>
        </div>
      </div>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="text-3xl text-center w-full">
            Register your account
          </DialogTitle>
          <DialogDescription className="sr-only">
            Create a new account
          </DialogDescription>
        </DialogHeader>
        <form
          className="space-y-6 mt-4"
          onSubmit={(e) => {
            e.preventDefault();
            setOpen(false);
          }}
        >
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email address</Label>
              <Input
                id="email"
                name="email"
                type="email"
                required
                placeholder="you@example.com"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                name="password"
                type="password"
                required
                placeholder="••••••••"
              />
            </div>
            <div className="flex items-center gap-2">
              <Checkbox id="remember-reg" />
              <Label htmlFor="remember-reg" className="font-normal">
                Remember me
              </Label>
            </div>
          </div>
          <DialogFooter>
            <Button type="submit" className="w-full">
              Register Now
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default Register;
