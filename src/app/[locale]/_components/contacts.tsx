import {CardContentPortolio} from "@/models/card-content-portolio";
import {Card, CardDescription, CardHeader, CardTitle} from "@/components/ui/card";
import {ArrowUpRight} from "lucide-react";
import {Avatar, AvatarImage} from "@/components/ui/avatar";
import {useI18n, useScopedI18n} from "@/locales/client";

export default function Contacts() {
    const t = useI18n()
    const scopedT = useScopedI18n('contacts')

    return (
        <div className="grid grid-cols-12 grid-rows-4 gap-y-6 items-center justify-between h-100 py-14">
            <h1 className="text-2xl italic col-start-2 col-span-10">{scopedT('section')}</h1>
            <Card className="col-start-2 row-span-1 col-span-10 py-2">
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
            <Card className="col-start-2 row-span-1 col-span-10 py-2">
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
                        <CardTitle>{scopedT('titlePhone')}</CardTitle>
                        <CardDescription>{scopedT('descriptionPhone')}</CardDescription>
                    </div>
                    <div className="col-span-1">
                        { true ?
                            <ArrowUpRight className="group-hover:translate-x-2 mr-2 group-hover:-translate-y-2 transition-transform ml-2 justify-end" size={16}/> : null }
                    </div>
                </CardHeader>
            </Card>
            <Card className="col-start-2 row-span-1 col-span-10 py-2">
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
                        <CardTitle>{scopedT('titleMail')}</CardTitle>
                        <CardDescription>{scopedT('descriptionMail')}</CardDescription>
                    </div>
                    <div className="col-span-1">
                        { true ?
                            <ArrowUpRight className="group-hover:translate-x-2 mr-2 group-hover:-translate-y-2 transition-transform ml-2 justify-end" size={16}/> : null }
                    </div>
                </CardHeader>
            </Card>
        </div>
    )
}