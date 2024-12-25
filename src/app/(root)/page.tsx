import EditorPanel from "./_components/EditorPanel";
import Header from "./_components/Header";
import OutputPanel from "./_components/OutputPanel";
import LanguageSelector from "./_components/LanguageSelector";
import { ConvexHttpClient } from "convex/browser";
import { currentUser } from "@clerk/nextjs/server";
import { api } from "../../../convex/_generated/api";

export default async function Home() {
  const convex = new ConvexHttpClient(process.env.NEXT_PUBLIC_CONVEX_URL!);
  const user = await currentUser();

  const convexUser = await convex.query(api.users.getUser, {
    userId: user?.id || "",
  });

  return (
    <div className="min-h-screen">
      <div className="max-w-[1800px] mx-auto p-4">
        <Header 
          convexUser={convexUser}  // Pass convexUser to Header
          LanguageSelector={LanguageSelector}  // Pass LanguageSelector to Header
        />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <EditorPanel />
          <OutputPanel />
        </div>
      </div>
    </div>
  );
}
