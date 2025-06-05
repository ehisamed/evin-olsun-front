"use client";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/shared/components/ui/select";
import { useAvailableLocales } from "../model/useAvailableLocales";
import { useChangeLocale } from "../model/useChangeLocale";
import clsx from "clsx";

type Props = {
  defaultValue: string;
  label: string;
  className?: string;
};

export default function LocaleSwitcherSelect({ defaultValue, label, className }: Props) {
  const onSelectChange = useChangeLocale();
  const locales = useAvailableLocales();

  return (
    <Select defaultValue={defaultValue} onValueChange={onSelectChange}>
      <SelectTrigger
        className={clsx(
          'w-fit h-8 border-none dark:bg-transparent cursor-pointer dark:hover:bg-transparent bg-transparent focus:ring-0 focus:ring-offset-0',
          className
        )}
        aria-label={label}
      >
        <SelectValue />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Languages</SelectLabel>
        </SelectGroup>
        {locales.map((locale) => (
          <SelectItem key={locale} value={locale}>
            {locale.toUpperCase()}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}
