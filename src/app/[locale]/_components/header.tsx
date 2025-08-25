'use client'

import {Avatar, AvatarImage} from "@/components/ui/avatar";
import Link from "next/link";
import {Moon, Sun} from "lucide-react";
import {DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger} from "@/components/ui/dropdown-menu";
import {useTheme} from "next-themes";
import {Button} from "@/components/ui/button";
import {useChangeLocale, useCurrentLocale} from "@/locales/client";

const navigation = [
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Professional background', href: '#experience' },
    { name: 'Contact me', href: '#contact' },
]

export default function Header() {
    const { setTheme } = useTheme()
    const changeLocale = useChangeLocale()

    return (
        <header>
            <nav aria-label="Global" className="grid grid-cols-12 items-center justify-between py-4">
                <div className="flex col-span-5 col-start-2 sm:col-span-3 sm:col-start-2 md:col-span-3 md:col-start-3 lg:col-span-3 lg:col-start-3  xl:col-span-2 xl:col-start-4">
                    <Link href="https://github.com/banettetheo">
                        <Avatar>
                            <AvatarImage
                                src="/github.svg"
                                alt="GitHub"
                                className="dark:invert dark:brightness-200"
                            />
                        </Avatar>

                    </Link>
                    <h1 className="ml-4 content-center">Théo Banette</h1>
                </div>
                <div className="flex col-span-3 col-start-9 sm:col-span-2 sm:col-start-10 md:col-span-2 md:col-start-9 lg:col-span-1 lg:col-start-10 xl:col-span-1 xl:col-start-9 justify-self-end">
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button className="mr-2" variant="outline" size="icon">
                                <Sun className="h-[1.2rem] w-[1.2rem] scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90" />
                                <Moon className="absolute h-[1.2rem] w-[1.2rem] scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0" />
                                <span className="sr-only">Toggle theme</span>
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                            <DropdownMenuItem onClick={() => setTheme("light")}>
                                Light
                            </DropdownMenuItem>
                            <DropdownMenuItem onClick={() => setTheme("dark")}>
                                Dark
                            </DropdownMenuItem>
                            <DropdownMenuItem onClick={() => setTheme("system")}>
                                System
                            </DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button variant="outline" size="icon">
                                { useCurrentLocale() == 'en' ? (
                                        <img src="/us.svg" alt="US" className="size-4"/>
                                    ) : (
                                        <img src="/fr.svg" alt="FR" className="size-4"/>
                                    )}
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                            <DropdownMenuItem onClick={() => changeLocale('en')}>
                                <img src="/us.svg" alt="US" className="size-4"/>
                                <p>Anglais</p>
                            </DropdownMenuItem>
                            <DropdownMenuItem onClick={() => changeLocale('fr')}>
                                <img src="/fr.svg" alt="FR" className="size-4"/>
                                <p>Français</p>
                            </DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                </div>
            </nav>
        </header>
    )
}
