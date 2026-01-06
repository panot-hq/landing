"use client";

import Header from "./components/Header";
import Screen from "./components/PageTransition";

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-neutral-900">
      <Screen>
        <div className="mx-auto flex min-h-screen max-w-3xl flex-col px-6 pb-16 pt-8 sm:px-8 sm:pt-10">
          <Header />
        </div>
      </Screen>
    </main>
  );
}
