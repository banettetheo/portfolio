import {CardContentPortolio} from "@/models/card-content-portolio";
import {Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle} from "@/components/ui/card";
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
import {useEffect, useState} from "react";
import { useForm, ValidationError } from '@formspree/react';
import {Label} from "@/components/ui/label";
import {Input} from "@/components/ui/input";
import {Textarea} from "@/components/ui/textarea";
import Container from "@/app/[locale]/_components/container";
import {toast} from "sonner";

export default function Contacts() {
    const scopedTContacts = useScopedI18n('contacts')
    const scopedTMailForm = useScopedI18n('mailForm')
    const scopedTMailToast = useScopedI18n('toastMail')
    const [copied, setCopied] = useState(false);

    const handleCopy = () => {
        navigator.clipboard.writeText(scopedTContacts('descriptionPhone'))
            .then(() => {
                setCopied(true);
                setTimeout(() => setCopied(false), 2000);
            })
            .catch(err => {
                console.error("Erreur lors de la copie :", err);
            });
    };

    const [open, setOpen] = useState(false);
    const [state, handleSubmit] = useForm("mvgwzerp");

    // 🔥 Dès que Formspree indique success, on ferme le Sheet
    useEffect(() => {
        if (state.succeeded) {
            setOpen(false);
            toast.success(scopedTMailToast('success'))
        } else if (state.errors) {
            setOpen(false);
            toast.error(scopedTMailToast('error'))
        }
    }, [state.succeeded]);

    return (
        <Container>
            <h1 className="text-xl italic col-span-10 my-4">{scopedTContacts('section')}</h1>
            <Link className="col-span-12 lg:col-span-4" href="https://www.linkedin.com/in/theobanette/">
                <Card className="py-2 place-content-center">
                    <CardHeader className="flex items-center">
                        <div className="relative h-10">
                            <Avatar className="h-10 w-10 mr-4">
                                <AvatarImage src="/theo.png" alt="Avatar"/>
                            </Avatar>
                            <Avatar className="h-8 w-7 bottom-7 -right-4 object-contain">
                                <AvatarImage src="/linkedin.svg" alt="Avatar"/>
                            </Avatar>
                        </div>
                        <div className="mr-auto truncate">
                            <CardTitle>{scopedTContacts('titleLinkedIn')}</CardTitle>
                            <CardDescription>{scopedTContacts('descriptionLinkedIn')}</CardDescription>
                        </div>
                        <div className="col-span-1">
                            { true ?
                                <ArrowUpRight className="group-hover:translate-x-2 mr-2 group-hover:-translate-y-2 transition-transform ml-2 justify-end" size={16}/> : null }
                        </div>
                    </CardHeader>
                </Card>
            </Link>
            <Card onClick={handleCopy} className="col-span-12 py-2 lg:col-span-4 place-content-center">
                <CardHeader className="flex items-center">
                    <div className="relative h-10">
                        <Avatar className="h-10 w-10 mr-4">
                            <AvatarImage src="/theo.png" alt="Avatar"/>
                        </Avatar>
                        <Avatar className="h-6 w-6 bottom-6 -right-5 object-contain">
                            <AvatarImage src="/whatsapp.svg" alt="Avatar"/>
                        </Avatar>
                    </div>
                    <div className="mr-auto truncate">
                        <CardTitle>{scopedTContacts('titlePhone')}</CardTitle>
                        <CardDescription>{scopedTContacts('descriptionPhone')}</CardDescription>
                    </div>
                    <div className="col-span-1">
                        {copied ? (
                            <span className="text-xs truncate text-green-500">{scopedTContacts('copy')}</span>
                        ) : (
                            <Copy className="mr-2" size={16} />
                        )}
                    </div>
                </CardHeader>
            </Card>
            <Sheet open={open} onOpenChange={setOpen}>
                <SheetTrigger asChild>
                    <Card className="col-span-12 py-2 lg:col-span-4 place-content-center">
                        <CardHeader className="flex items-center">
                            <div className="relative h-10">
                                <Avatar className="h-10 w-10 mr-4">
                                    <AvatarImage src="/theo.png" alt="Avatar"/>
                                </Avatar>
                                <Avatar className="h-6 w-6 bottom-6 -right-5 object-contain">
                                    <AvatarImage src="/gmail.svg" alt="Avatar"/>
                                </Avatar>
                            </div>
                            <div className="mr-auto truncate">
                                <CardTitle>{scopedTContacts('titleMail')}</CardTitle>
                                <CardDescription className="">{scopedTContacts('descriptionMail')}</CardDescription>
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
                        <SheetTitle>{scopedTMailForm('title')}</SheetTitle>
                        <SheetDescription>
                            {scopedTMailForm('description')}
                        </SheetDescription>
                    </SheetHeader>
                    <form onSubmit={handleSubmit}>
                        <CardContent className="space-y-4 pb-5">
                            <div>
                                <Label className="py-1" htmlFor="firstname">{scopedTMailForm('firstName')}</Label>
                                <Input id="firstname" name="Prénom" required />
                                <ValidationError prefix="Firstname" field="firstname" errors={state.errors} />
                            </div>

                            <div>
                                <Label className="py-1" htmlFor="lastname">{scopedTMailForm('lastName')}</Label>
                                <Input id="lastname" name="Nom de Famille" required />
                                <ValidationError prefix="Lastname" field="lastname" errors={state.errors} />
                            </div>

                            <div>
                                <Label className="py-1" htmlFor="object">{scopedTMailForm('mailObject')}</Label>
                                <Input id="object" name="Objet du mail" required />
                                <ValidationError prefix="Object" field="object" errors={state.errors} />
                            </div>

                            <div>
                                <Label className="py-1" htmlFor="email">{scopedTMailForm('email')}</Label>
                                <Input id="email" type="email" name="Adresse Email" required />
                                <ValidationError prefix="Email" field="email" errors={state.errors} />
                            </div>

                            <div>
                                <Label className="py-1" htmlFor="message">{scopedTMailForm('message')}</Label>
                                <Textarea id="message" name="Contenu du mail" required rows={4} />
                                <ValidationError prefix="Message" field="message" errors={state.errors} />
                            </div>
                        </CardContent>
                        <SheetFooter>
                            <Button type="submit" disabled={state.submitting} className="w-full">
                                {state.submitting ? scopedTMailForm('sendInProgress') : scopedTMailForm('sendBtn')}
                            </Button>
                            <SheetClose asChild>
                                <Button variant="outline">{scopedTMailForm('closeBtn')}</Button>
                            </SheetClose>
                        </SheetFooter>
                    </form>
                </SheetContent>
            </Sheet>
        </Container>
    )
}