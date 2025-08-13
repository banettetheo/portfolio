import {TabsList} from "@/components/ui/tabs";
import {TabsListProps} from "@radix-ui/react-tabs";
import {Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle} from "@/components/ui/card";

export default function Content({content}: any) {
    return(
        <Card className="m-1">
            <CardHeader>
                <CardTitle>{content.name}</CardTitle>
                <CardDescription>{content.date}</CardDescription>
            </CardHeader>
            <CardContent>
                {content.description}
            </CardContent>
            <CardFooter>
                Test
            </CardFooter>
        </Card>
    )
}