import { useTranslations } from "next-intl";

export function useSafeTranslations(namespace: string) {
  const t = useTranslations(namespace);
  return (key: string) => {
    const result = t(key);
    if (result === `${namespace}.${key}`) return '';
    return result;
  };
}
