import { ChevronDownIcon } from '@heroicons/react/16/solid'
import {Tabs, TabsContent, TabsList, TabsTrigger} from "@/components/ui/tabs";
import {Card} from "@/components/ui/card";
import Content from "@/app/_components/Content";
import {TechJourneyContent} from "@/models/TechJourneyContent";

const tabs: TechJourneyContent[] = [
    {
        name: 'Projects',
        contents: [
            {
                name: 'Bot Discord Lucario',
                description: 'A certified bot discord with over 75 servers',
                date: 'March 2021',
                redirectUrl: '',
                stacks: [
                    {
                        name: 'JavaScript',
                        img: 'javascript.svg'
                    },
                    {
                        name: 'Docker',
                        img: 'docker.svg'
                    },
                    {
                        name: 'MongoDB',
                        img: 'mongo.svg'
                    }
                ],
                flags: [],
                imgRedirect: "private.svg"
            },
            {
                name: 'Dklare',
                description: 'A furniture management tool for business',
                date: 'May 2024',
                redirectUrl: '',
                stacks: [
                    {
                        name: 'Java Spring Boot',
                        img: 'spring-boot.svg'
                    },
                    {
                        name: 'Angular',
                        img: 'angular.svg'
                    },
                    {
                        name: 'PostgreSQL',
                        img: 'postgresql.svg'
                    }
                ],
                flags: [],
                imgRedirect: "private.svg"
            },
            {
                name: 'Portfolio',
                description: 'A business portolio about me',
                date: 'August 2025',
                redirectUrl: 'https://github.com/banettetheo/portfolio',
                stacks: [
                    {
                        name: 'Next',
                        img: 'next.svg'
                    },
                    {
                        name: 'TypeScript',
                        img: 'typescript.svg'
                    }
                ],
                flags: [],
                imgRedirect: "github.svg"
            },
            {
                name: 'Dklares',
                description: 'A furniture management tool for business',
                date: 'May 2024',
                redirectUrl: '',
                stacks: [
                    {
                        name: 'JavaScript',
                        img: ''
                    }
                ],
                flags: [],
                imgRedirect: ""
            },
        ]
    },
    {
        name: 'Tech training',
        contents: [
            {
                name: 'Two-year technical degree',
                description: 'A school training to learn IT basics - ICSAA',
                date: 'September 2019 - July 2021',
                redirectUrl: 'https://www.icssa-niort.com/',
                stacks: [
                    {
                        name: 'JavaScript',
                        img: ''
                    }
                ],
                flags: [],
                imgRedirect: "icssa.png"
            },
            {
                name: 'Software Engineering Accountant',
                description: 'A bachelor\'s degree specialized in software development - Apprenticeship - CESI',
                date: 'September 2021 - September 2022',
                redirectUrl: 'https://www.cesi.fr/',
                stacks: [
                    {
                        name: 'JavaScript',
                        img: ''
                    }
                ],
                flags: [],
                imgRedirect: "cesi.png"
            },
            {
                name: 'Software Architecture Manager',
                description: 'A master\'s degree specialized in software architecture - Apprenticeship - CESI',
                date: 'September 2022 - September 2024',
                redirectUrl: 'https://www.cesi.fr/',
                stacks: [
                    {
                        name: 'JavaScript',
                        img: ''
                    }
                ],
                flags: [],
                imgRedirect: "cesi.png"
            }
        ]
    },
    {
        name: 'Pro',
        contents: [
            {
                name: 'COVEA - MAAF',
                description: 'I worked on compliance procedures related to AML/CFT regulations.',
                date: 'September 2024 - July 2025',
                redirectUrl: 'https://www.maaf.fr/fr/assurance',
                stacks: [
                    {
                        name: 'JavaScript',
                        img: ''
                    }
                ],
                flags: [],
                imgRedirect: "maaf.png"
            },
            {
                name: 'MACIF - MUTAVIE',
                description: 'Contributed to a strategic migration project at Mutavie, focused on decoupling and exposing business logic through standardized APIs, allowing seamless access by the parent company.',
                date: 'July 2025 - Now',
                redirectUrl: 'https://www.macif.fr/',
                stacks: [
                    {
                        name: 'JavaScript',
                        img: ''
                    }
                ],
                flags: [],
                imgRedirect: "macif.png"
            }
        ]
    },
    {
        name: 'Skills',
        contents: [
            {
                name: 'Bot Discord Lucario',
                description: 'A discord bot',
                date: '',
                redirectUrl: '',
                stacks: [
                    {
                        name: 'JavaScript',
                        img: ''
                    }
                ],
                flags: [],
                imgRedirect: ""
            },
            {
                name: 'Dklare',
                description: 'A furniture management tool',
                date: '',
                redirectUrl: '',
                stacks: [
                    {
                        name: 'JavaScript',
                        img: ''
                    }
                ],
                flags: [],
                imgRedirect: ""
            }
        ]
    },
]

export default function TechJourney() {
    return (
        <div className="relative isolate overflow-hidden bg-linear-to-b from-indigo-100/20 pt-14">
            <div className="mx-auto max-w-7xl px-6 py-32 sm:py-40 lg:px-8">
                <div className="mx-auto max-w-2xl lg:mx-0 lg:grid lg:max-w-none lg:gap-x-16 lg:gap-y-8 xl:grid-cols-1 xl:grid-rows-1 xl:gap-x-8">
                    <Card className="mx-auto p-4 shadow overflow-hidden max-w-2xl lg:mx-0 lg:grid lg:max-w-none lg:gap-x-16 lg:gap-y-8 xl:grid-cols-1 xl:grid-rows-1 xl:gap-x-8">
                        <Tabs defaultValue={tabs[0].name}>
                            <TabsList>
                                {tabs.map((tab, index) => (
                                    <TabsTrigger key={tab.name} value={tab.name}>{tab.name}</TabsTrigger>
                                ))}
                            </TabsList>
                            {tabs.map((tab, index) => (
                                <TabsContent className="grid xl:grid-cols-3 md:grid-cols-1 lg:grid-cols-2 sm:grid-cols-1 gap-4" key={tab.name} value={tab.name}>
                                    {tab.contents.map((content, index) => (
                                        <Content key={content.name} content={content}/>
                                    ))}
                                </TabsContent>
                            ))}
                        </Tabs>
                    </Card>
                </div>
            </div>
            <div className="absolute inset-x-0 bottom-0 -z-10 h-24 bg-linear-to-t from-white sm:h-32" />
        </div>
    )
}
