import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { Moon, Sun } from "lucide-react";

export default function DashboardContent() {
  return (
    <>
      <main className="flex-1 p-6">
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
                <Switch id="2fa" />
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
      </main>
    </>
  );
}
