//frontend/src/components/minikit-provider.tsx

"use client"; // Required for Next.js

import { ReactNode, useEffect } from "react";
import { MiniKit } from "@worldcoin/minikit-js";

export default function MiniKitProvider({ children }: { children: ReactNode }) {
  useEffect(() => {
    MiniKit.install();

  }, []);

  return <>{children}</>;
}
