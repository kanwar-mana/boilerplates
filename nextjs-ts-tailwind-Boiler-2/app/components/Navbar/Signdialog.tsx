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

const Signin = () => {
  const [open, setOpen] = useState(false);
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <div className="absolute inset-y-0 right-0 flex items-center sm:static sm:inset-auto sm:pr-0">
        <div className="hidden lg:block">
          <DialogTrigger asChild>
            <button type="button" className="text-lg text-blue font-medium">
              Log In
            </button>
          </DialogTrigger>
        </div>
      </div>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="text-3xl text-center w-full">
            Sign in to your account
          </DialogTitle>
          <DialogDescription className="sr-only">
            Enter credentials to sign in
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
              <Label htmlFor="signin-email">Email address</Label>
              <Input
                id="signin-email"
                name="email"
                type="email"
                required
                placeholder="you@example.com"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="signin-password">Password</Label>
              <Input
                id="signin-password"
                name="password"
                type="password"
                required
                placeholder="••••••••"
              />
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Checkbox id="remember-sign" />
                <Label htmlFor="remember-sign" className="font-normal">
                  Remember me
                </Label>
              </div>
              <a href="#" className="text-sm text-dodgerblue hover:underline">
                Forgot your password?
              </a>
            </div>
          </div>
          <DialogFooter>
            <Button type="submit" className="w-full">
              Sign in
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default Signin;
