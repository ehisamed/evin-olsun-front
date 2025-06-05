import { useLocale } from "next-intl";
import LocaleSwitcherSelect from "./LocaleSwitcherSelect";

type Props = {
  className?: string;
}

export default function LocaleSwitcher({ className }: Props) {
  const locale = useLocale();

  return (
    <LocaleSwitcherSelect
      defaultValue={locale}
      label="Select a locale"
      className={className}
    />
  );
}
