import {CardContentPortolio} from "@/models/card-content-portolio";
import {Card, CardDescription, CardHeader, CardTitle} from "@/components/ui/card";
import {ArrowUpRight} from "lucide-react";
import {Avatar, AvatarImage} from "@/components/ui/avatar";

export default function Contacts() {
    return (
        <div className="mx-auto max-w-7xl p-14">
            <h1 className="my-4">Contacts</h1>
            <div className="grid md:grid-cols-3 lg:grid-cols-3">
                <Card>
                    <CardHeader className="grid grid-cols-3 items-center">
                        <div className="flex items-center justify-between gap-x-2 col-span-1">
                            <Avatar className="p-1">
                                <AvatarImage src="/theo.png" alt="Avatar"/>
                            </Avatar>
                            <Avatar className="p-1">
                                <AvatarImage src="/linkedin.svg" alt="Avatar"/>
                            </Avatar>
                        </div>
                        <div className="col-span-1">
                            <CardTitle>test</CardTitle>
                            <CardDescription>dateTest</CardDescription>
                        </div>
                        <div className="col-span-1 justify-items-end">
                            { true ?
                                <ArrowUpRight className="group-hover:translate-x-2 mr-2 group-hover:-translate-y-2 transition-transform ml-2 justify-end" size={16}/> : null }
                        </div>
                    </CardHeader>
                </Card>

            </div>
        </div>
    )
}