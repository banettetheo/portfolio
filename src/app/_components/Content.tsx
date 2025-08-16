import {TabsList} from "@/components/ui/tabs";
import {TabsListProps} from "@radix-ui/react-tabs";
import {Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle} from "@/components/ui/card";
import {CardContentPortolio} from "@/models/CardContentPortolio";
import { Badge } from "@/components/ui/badge"
import {Avatar, AvatarImage} from "@/components/ui/avatar";


export default function Content({ content }: { content : CardContentPortolio }) {
    return(
        <Card className="m-1 h-full pb-2">
            <CardHeader>
                <CardTitle>{content.name}</CardTitle>
                <CardDescription>{content.date}</CardDescription>
            </CardHeader>
            <CardContent className="size-15 w-full overflow-auto">
                {content.description}
            </CardContent>
            <CardFooter className="overflow-x-auto">
                {content.stacks.map(stack =>
                    <Badge className="m-1" key={stack.name} variant="secondary">
                        <Avatar className="p-1">
                            <AvatarImage src={stack.img}/>
                        </Avatar>
                        <p>{stack.name}</p>
                    </Badge>
                )}
            </CardFooter>
        </Card>
    )
}