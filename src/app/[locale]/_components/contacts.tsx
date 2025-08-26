import {CardContentPortolio} from "@/models/card-content-portolio";
import {Card, CardDescription, CardHeader, CardTitle} from "@/components/ui/card";
import {ArrowUpRight, Copy} from "lucide-react";
import {Avatar, AvatarImage} from "@/components/ui/avatar";
import {useI18n, useScopedI18n} from "@/locales/client";
import {
    Sheet, SheetClose,
    SheetContent,
    SheetDescription,
    SheetFooter,
    SheetHeader,
    SheetTitle,
    SheetTrigger
} from "@/components/ui/sheet";
import {Button} from "@/components/ui/button";
import Link from "next/link";
import {useState} from "react";

export default function Contacts() {
    const t = useI18n()
    const scopedT = useScopedI18n('contacts')
    const [copied, setCopied] = useState(false);

    const handleCopy = () => {
        navigator.clipboard.writeText(scopedT('descriptionPhone'))
            .then(() => {
                setCopied(true);
                setTimeout(() => setCopied(false), 2000);
            })
            .catch(err => {
                console.error("Erreur lors de la copie :", err);
            });
    };

    return (
        <div className="grid grid-cols-12 grid-rows-4 items-center justify-between h-100 pt-14">
            <h1 className="text-xl italic col-start-2 col-span-10">{scopedT('section')}</h1>
            <Link className="col-start-2 row-span-1 col-span-10" href="https://www.linkedin.com/in/theobanette/">
                <Card className="py-2">
                    <CardHeader className="flex items-center">
                        <div className="relative h-10">
                            <Avatar className="h-10 w-10 mr-4">
                                <AvatarImage src="/theo.png" alt="Avatar"/>
                            </Avatar>
                            <Avatar className="h-7 w-7 bottom-6 -right-5 object-contain">
                                <AvatarImage src="/linkedin.svg" alt="Avatar"/>
                            </Avatar>
                        </div>
                        <div className="mr-auto">
                            <CardTitle>{scopedT('titleLinkedIn')}</CardTitle>
                            <CardDescription>{scopedT('descriptionLinkedIn')}</CardDescription>
                        </div>
                        <div className="col-span-1">
                            { true ?
                                <ArrowUpRight className="group-hover:translate-x-2 mr-2 group-hover:-translate-y-2 transition-transform ml-2 justify-end" size={16}/> : null }
                        </div>
                    </CardHeader>
                </Card>
            </Link>
            <Card onClick={handleCopy} className="col-start-2 row-span-1 col-span-10 py-2">
                <CardHeader className="flex items-center">
                    <div className="relative h-10">
                        <Avatar className="h-10 w-10 mr-4">
                            <AvatarImage src="/theo.png" alt="Avatar"/>
                        </Avatar>
                        <Avatar className="h-7 w-7 bottom-6 -right-5 object-contain">
                            <AvatarImage src="/whatsapp.svg" alt="Avatar"/>
                        </Avatar>
                    </div>
                    <div className="mr-auto">
                        <CardTitle>{scopedT('titlePhone')}</CardTitle>
                        <CardDescription>{scopedT('descriptionPhone')}</CardDescription>
                    </div>
                    <div className="col-span-1">
                        {copied ? (
                            <span className="text-xs text-green-500">{scopedT('copy')}</span>
                        ) : (
                            <Copy className="mr-2" size={16} />
                        )}
                    </div>
                </CardHeader>
            </Card>
            <Sheet>
                <SheetTrigger asChild>
                    <Card className="col-start-2 row-span-1 col-span-10 py-2">
                        <CardHeader className="flex items-center">
                            <div className="relative h-10">
                                <Avatar className="h-10 w-10 mr-4">
                                    <AvatarImage src="/theo.png" alt="Avatar"/>
                                </Avatar>
                                <Avatar className="h-6 w-6 bottom-6 -right-5 object-contain">
                                    <AvatarImage src="/gmail.svg" alt="Avatar"/>
                                </Avatar>
                            </div>
                            <div className="mr-auto">
                                <CardTitle>{scopedT('titleMail')}</CardTitle>
                                <CardDescription>{scopedT('descriptionMail')}</CardDescription>
                            </div>
                            <div className="col-span-1">
                                { true ?
                                    <ArrowUpRight className="group-hover:translate-x-2 mr-2 group-hover:-translate-y-2 transition-transform ml-2 justify-end" size={16}/> : null }
                            </div>
                        </CardHeader>
                    </Card>
                </SheetTrigger>
                <SheetContent>
                    <SheetHeader>
                        <SheetTitle>Edit profile</SheetTitle>
                        <SheetDescription>
                            Make changes to your profile here. Click save when you&apos;re done.
                        </SheetDescription>
                    </SheetHeader>
                    <div className="grid flex-1 auto-rows-min gap-6 px-4">
                        <div className="grid gap-3">
                            {/*<Label htmlFor="sheet-demo-name">Name</Label>*/}
                            {/*<Input id="sheet-demo-name" defaultValue="Pedro Duarte" />*/}
                        </div>
                        <div className="grid gap-3">
                            {/*<Label htmlFor="sheet-demo-username">Username</Label>*/}
                            {/*<Input id="sheet-demo-username" defaultValue="@peduarte" />*/}
                        </div>
                    </div>
                    <SheetFooter>
                        <Button type="submit">Save changes</Button>
                        <SheetClose asChild>
                            <Button variant="outline">Close</Button>
                        </SheetClose>
                    </SheetFooter>
                </SheetContent>
            </Sheet>

        </div>
    )
}