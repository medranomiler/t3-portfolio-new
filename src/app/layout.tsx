import { ClerkProvider } from "@clerk/nextjs";
import "~/styles/globals.css";

import { Inter } from "next/font/google";

import { TRPCReactProvider } from "~/trpc/react";
import { TabFilters } from "./_components/TabFilters";
import { BottomNavbar } from "./_components/BottomNavbar";
import { SearchPanel } from "./_components/SearchPanel";
import { SideBar } from "./_components/SideBar";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata = {
  title: "Create T3 App",
  description: "Generated by create-t3-app",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
  modal
}: {
  children: React.ReactNode;
  modal: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={`font-sans ${inter.variable} overscroll-none`}>
          <TRPCReactProvider>
            <main className="flex h-screen w-screen flex-col overflow-hidden overscroll-none bg-black text-white">
              <TabFilters />
              <div className={"flex grow flex-col md:flex-row md:bg-black"}>
                <SideBar />
                {children}
                <SearchPanel />
              </div>
              <BottomNavbar />
            </main>
            {modal}
            <div id="modal-root" />
          </TRPCReactProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
