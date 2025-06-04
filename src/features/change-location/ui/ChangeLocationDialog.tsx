"use client"

import * as React from "react"
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/shared/components/ui/alert-dialog"
import { Button } from "@/shared/components/ui/button"
import { MapPin, Check, ChevronsUpDown, Search } from "lucide-react"
import { cn } from "@/lib/utils"
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/shared/components/ui/command"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/shared/components/ui/popover"
import { useTranslations } from "next-intl"
import useChangeLocation from "../model/useChangeLocation"

const cities = [
  { value: "baku", label: "Bakı" },
  { value: "ganja", label: "Gəncə" },
  { value: "sumqayit", label: "Sumqayıt" },
  { value: "lerik", label: "Lerik" },
  { value: "sheki", label: "Şəki" },
];

type Props = {
  className?: string
}

export function ChangeLocationDialog({ className }: Props) {
  const [open, setOpen] = React.useState(false)
  const { selectedCity, setSelectedCity } = useChangeLocation();
  const t = useTranslations('HomePage')

  const selectedLabel = cities.find(c => c.value === selectedCity)?.label

  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button variant="outline" size="sm" className={className}>
          <MapPin className="mr-2 h-4 w-4" />
          {selectedLabel}
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>{t('changeLocationDialog.changeCityTitle')}</AlertDialogTitle>
        </AlertDialogHeader>

        <div className="py-4">
          <Popover open={open} onOpenChange={setOpen}>
            <PopoverTrigger asChild>
              <Button
                variant="outline"
                role="combobox"
                size='lg'
                aria-expanded={open}
                className="w-full h-12 justify-between"
              >
                {selectedLabel ?? t("changeLocationDialog.selectCity")}
                <Search className="ml-2 h-4 w-4 opacity-50" />
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-max-[100%] " align="start" sideOffset={4} asChild>
              <Command>
                <CommandInput placeholder={t("changeLocationDialog.searchPlaceholder")} className="h-9" />
                <CommandList>
                  <CommandEmpty>{t('changeLocationDialog.cityNotFound')}</CommandEmpty>
                  <CommandGroup>
                    {cities.map((city) => (
                      <CommandItem
                        key={city.value}
                        value={city.value}
                        onSelect={(currentValue) => {
                          setSelectedCity(currentValue)
                          setOpen(false)
                        }}
                      >
                        {city.label}
                        <Check
                          className={cn(
                            "ml-auto h-4 w-4",
                            selectedCity === city.value ? "opacity-100" : "opacity-0"
                          )}
                        />
                      </CommandItem>
                    ))}
                  </CommandGroup>
                </CommandList>
              </Command>
            </PopoverContent>
          </Popover>
        </div>

        <AlertDialogFooter>
          <AlertDialogCancel className="cursor-pointer text-sm md:text-md ">{t("changeLocationDialog.cancel")}</AlertDialogCancel>
          <AlertDialogAction className="bg-blue-500 hover:bg-blue-600 text-sm transition-colors duration-150 cursor-pointer sm:text-md">{t("changeLocationDialog.confirm")}</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  )
}
