"use client";

import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { Moon, Sun } from "lucide-react";
import { useState } from "react";
import { enrollMFA } from "@/lib/actions/mfa/enrollMfa";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "../ui/dialog";
import { Input } from "../ui/input";
import { verifyMFA } from "@/lib/actions/mfa/verifyMfa";
import { unEnrollMFA } from "@/lib/actions/mfa/unEnrollMfa";

export default function DashboardContent() {
  const [is2FAEnabled, setIs2FAEnabled] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [qrCode, setQrCode] = useState<string | null>(null);

  const handle2FAToggle = async (checked: boolean) => {
    if (checked) {
      try {
        setIs2FAEnabled(true);
        setIsModalOpen(true);
      } catch (error) {
        console.error("Failed to open modal", error);
      }
    } else {
      //   const unEnrollMfa = await unEnrollMFA();
      //   console.log("unEnrolledMFA-->", unEnrollMfa);
      setIs2FAEnabled(false);
      //   alert("2FA disabled");
    }
  };

  const handleEnrollMfa = async () => {
    const mfa = await enrollMFA();
    console.log("MFA-->", mfa);
    setQrCode(mfa.totp.qr_code);
  };

  return (
    <>
      <main className="flex-1 p-6 bg-gray-700">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold">Settings</h1>
          <Button variant="outline" size="icon" className="rounded-full">
            <Sun className="h-[1.2rem] w-[1.2rem] text-black rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <Moon className="absolute h-[1.2rem] w-[1.2rem] text-black rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            <span className="sr-only">Toggle theme</span>
          </Button>
        </div>

        <div className="bg-gray-800 rounded-lg shadow-lg p-6 space-y-6">
          {/* Account Settings */}
          <div>
            <h2 className="text-xl font-semibold mb-4 text-gray-100">
              Account Settings
            </h2>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <Label
                    htmlFor="notifications"
                    className="text-sm font-medium text-gray-200"
                  >
                    Enable Notifications
                  </Label>
                  <p className="text-sm text-gray-400">
                    Receive email notifications about account activity
                  </p>
                </div>
                <Switch id="notifications" />
              </div>
              <Separator className="bg-gray-700" />
              <div className="flex items-center justify-between">
                <div>
                  <Label
                    htmlFor="2fa"
                    className="text-sm font-medium text-gray-200"
                  >
                    Two-Factor Authentication (2FA)
                  </Label>
                  <p className="text-sm text-gray-400">
                    Add an extra layer of security to your account
                  </p>
                </div>
                <Switch
                  id="2fa"
                  checked={is2FAEnabled}
                  onCheckedChange={handle2FAToggle}
                />
              </div>
            </div>
          </div>

          {/* Privacy Settings */}
          <div>
            <h2 className="text-xl font-semibold mb-4 text-gray-100">
              Privacy Settings
            </h2>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <Label
                    htmlFor="profile-visibility"
                    className="text-sm font-medium text-gray-200"
                  >
                    Profile Visibility
                  </Label>
                  <p className="text-sm text-gray-400">
                    Make your profile visible to other users
                  </p>
                </div>
                <Switch id="profile-visibility" />
              </div>
              <Separator className="bg-gray-700" />
              <div className="flex items-center justify-between">
                <div>
                  <Label
                    htmlFor="data-sharing"
                    className="text-sm font-medium text-gray-200"
                  >
                    Data Sharing
                  </Label>
                  <p className="text-sm text-gray-400">
                    Allow us to share your data with partners
                  </p>
                </div>
                <Switch id="data-sharing" />
              </div>
            </div>
          </div>
        </div>

        <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
          <DialogContent className="sm:max-w-[425px] bg-gray-800 text-gray-100">
            <DialogHeader>
              <DialogTitle>Set up Two-Factor Authentication</DialogTitle>
              <Button
                type="submit"
                variant={"destructive"}
                className="w-full"
                onClick={() => handleEnrollMfa()}
              >
                Enable 2FA
              </Button>
              <DialogDescription className="text-gray-400">
                Scan the QR code with your authenticator app and enter the
                verification code below.
              </DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="flex justify-center">
                {qrCode && (
                  <div className="inline-block border p-4 rounded-lg bg-white">
                    <img
                      src={qrCode}
                      alt="MFA QR Code"
                      width={180}
                      height={180}
                    />
                  </div>
                )}
              </div>
              <form className="space-y-4" action={verifyMFA}>
                <div className="grid grid-cols-4 items-center">
                  <Label
                    htmlFor="verificationCode"
                    className="text-left col-span-1"
                  >
                    Verify code :
                  </Label>
                  <Input
                    id="verificationCode"
                    name="verifyCode"
                    className="col-span-3 bg-gray-700 text-gray-100 border-gray-600"
                    placeholder="Enter verification code"
                  />
                </div>
                <Button type="submit" className="w-full">
                  Verify and Enable 2FA
                </Button>
              </form>
            </div>
          </DialogContent>
        </Dialog>
      </main>
    </>
  );
}
