import {Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle} from "@/components/ui/card";
import {CardContentPortolio} from "@/models/card-content-portolio";
import { Badge } from "@/components/ui/badge"
import {Avatar, AvatarImage} from "@/components/ui/avatar";
import {ArrowUpRight} from "lucide-react";
import Link from "next/link";
import {useCurrentLocale} from "@/locales/client";


export default function Content({ content }: { content : CardContentPortolio }) {

    return(
        <Link href={content.redirectUrl}>
            <Card className="h-full w-full overflow-hidden group">
                <CardHeader className="grid grid-cols-6 items-center">
                    <img src={content.imgRedirect} alt="" className="dark:invert dark:brightness-200 size-12 col-span-1"/>
                    <div className="col-span-4">
                        <CardTitle>{useCurrentLocale() == 'en' ? content.enName : content.frName}</CardTitle>
                        <CardDescription>{useCurrentLocale() == 'en' ? content.enDate : content.frDate}</CardDescription>
                    </div>
                    <div className="col-span-1 justify-items-end">
                        { content.redirectUrl ?
                            <ArrowUpRight className="group-hover:translate-x-2 mr-2 group-hover:-translate-y-2 transition-transform ml-2 justify-end" size={16}/> : null }
                    </div>
                </CardHeader>
                <CardContent className="size-15 w-full overflow-auto">
                    {useCurrentLocale() == 'en' ? content.enDescription : content.frDescription}
                </CardContent>
                <CardFooter className="overflow-x-auto whitespace-nowrap px-2">
                    {content.stacks.map(stack =>
                        <Badge className="m-1 shrink-0 inline-flex" key={stack.name} variant="secondary">
                            <Avatar className="p-1">
                                <AvatarImage src={stack.img}/>
                            </Avatar>
                            <p>{stack.name}</p>
                        </Badge>
                    )}
                </CardFooter>
            </Card>
        </Link>
    )
}