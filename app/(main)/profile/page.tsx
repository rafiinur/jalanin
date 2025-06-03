import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import React from "react";

const ProfilePage = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <Card className="mt-6 p-6 bg-white shadow-md rounded-lg border-neutral-200">
        <CardHeader>
          <CardTitle>
            <h1 className="text-2xl font-bold text-gray-800">Profile</h1>
          </CardTitle>
          <CardDescription>
            <p className="text-gray-600">
              Manage your profile information and settings.
            </p>
          </CardDescription>
        </CardHeader>
        <CardContent>
          <h2 className="text-xl font-semibold mb-2">User Information</h2>
          <p className="text-gray-600">Name: John Doe</p>
          <p className="text-gray-600">Email:</p>
        </CardContent>
      </Card>
    </div>
  );
};

export default ProfilePage;
