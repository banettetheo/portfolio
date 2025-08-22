'use client'

import {Avatar, AvatarImage} from "@/components/ui/avatar";
import Link from "next/link";
import {Moon, Sun} from "lucide-react";
import {DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger} from "@/components/ui/dropdown-menu";
import {useTheme} from "next-themes";
import {Button} from "@/components/ui/button";
import {useChangeLocale} from "@/locales/client";

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
            <nav aria-label="Global" className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8">
                <div className="flex lg:flex-1">
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
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button className="m-2" variant="outline" size="icon">
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
                        <Button className="m-2" variant="outline" size="icon">
                            <img src="/us.svg" alt="Light" className="size-4"/>
                            <img src="/fr.svg" alt="Light" className="size-4"/>
                            <span className="sr-only">Toggle theme</span>
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
            </nav>
        </header>
    )
}
