"use client";

import { Locale, routing, usePathname, useRouter } from "@/i18n/routing";
import { useParams } from "next/navigation";

export function useChangeLocale() {
  const router = useRouter();
  const pathname = usePathname();
  const params = useParams();

  return function onSelectChange(nextLocale: string) {
    router.replace(
      // @ts-expect-error -- TypeScript will validate that only known params
      // are used in combination with a given pathname. Since the two will
      // always match for the current route, we can skip runtime checks.
      { pathname, params },
      { locale: nextLocale as Locale }
    );
  };
}
