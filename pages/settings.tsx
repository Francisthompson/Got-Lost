import React from 'react';

import Navbar from '@/components/Navbar';
import { useTheme } from '@/context/ThemeContext';

const Settings: React.FC = () => {
  const { preference, changePreference } = useTheme();

  return (
    <div className="min-h-screen">
      <Navbar />
      
      <main className="container mx-auto px-4 pt-24 pb-12 max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold mb-4">Settings</h1>
        <div className="flex flex-col gap-4 border rounded-md p-4">
            <fieldset className="space-y-3">
              <legend className="sr-only">Theme Preference</legend>
              <div className="flex flex-col gap-2">
                <label className="flex gap-2 items-center">
                  <input
                    type="radio"
                    name="theme-radio"
                    className="radio radio-primary"
                    checked={preference === "light"}
                    onChange={() => changePreference("light")}
                  /> Light
                </label>
                <label className="flex gap-2 items-center">
                  <input
                    type="radio"
                    name="theme-radio"
                    className="radio radio-primary"
                    checked={preference === "dark"}
                    onChange={() => changePreference("dark")}
                  /> Dark
                </label>
                <label className="flex gap-2 items-center">
                  <input
                    type="radio"
                    name="theme-radio"
                    className="radio radio-primary"
                    checked={preference === "system"}
                    onChange={() => changePreference("system")}
                  /> System (Auto)
                </label>
              </div>
            </fieldset>
        </div>
      </main>
    </div>
  );
};

export default Settings;