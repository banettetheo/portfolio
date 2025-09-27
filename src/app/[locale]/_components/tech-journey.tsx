import {Tabs, TabsContent, TabsList, TabsTrigger} from "@/components/ui/tabs";
import {Card} from "@/components/ui/card";
import Content from "@/app/[locale]/_components/content";
import {TechJourneyContent} from "@/models/tech-journey-content";
import {useI18n, useScopedI18n} from "@/locales/client";

const tabs: TechJourneyContent[] = [
    {
        name: '',
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
                        name: 'Spring Boot',
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
            }
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
                        name: 'PHP',
                        img: 'php.svg'
                    },
                    {
                        name: 'React Native',
                        img: 'react.svg'
                    },
                    {
                        name: 'Java',
                        img: 'java.svg'
                    },
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
                        name: 'Laravel',
                        img: 'laravel.svg'
                    },
                    {
                        name: 'Flutter',
                        img: 'flutter.svg'
                    },
                    {
                        name: 'C#',
                        img: 'csharp.svg'
                    },
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
                        name: 'Spring Boot',
                        img: 'spring-boot.svg'
                    },
                    {
                        name: 'C#',
                        img: 'csharp.svg'
                    },
                    {
                        name: 'Angular',
                        img: 'angular.svg'
                    },
                    {
                        name: 'Redis',
                        img: 'redis.svg'
                    },
                    {
                        name: 'MongoDB',
                        img: 'mongo.svg'
                    },
                    {
                        name: 'Kafka',
                        img: 'kafka.svg'
                    },
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
                        name: 'JEE',
                        img: 'java.svg'
                    },
                    {
                        name: 'Spring',
                        img: 'spring-boot.svg'
                    },
                    {
                        name: 'PostgreSQL',
                        img: 'postgresql.svg'
                    },
                    {
                        name: 'Angular',
                        img: 'angular.svg'
                    },
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
                        name: 'Spring Boot',
                        img: 'spring-boot.svg'
                    },
                    {
                        name: 'JSP',
                        img: 'java.svg'
                    },
                    {
                        name: 'React',
                        img: 'react.svg'
                    },
                    {
                        name: 'Oracle',
                        img: 'oracle.svg'
                    },
                ],
                flags: [],
                imgRedirect: "macif.png"
            }
        ]
    }
]

export default function TechJourney() {
    const t = useI18n()

    tabs[0].name = t('projects');
    tabs[1].name = t('trainings');
    tabs[2].name = t('pro');

    return (
        <div className="grid grid-cols-12">
            <Card className="p-4 overflow-hidden col-span-10 col-start-2 sm:col-start-3 sm:col-span-8 xl:col-start-4 xl:col-span-6">
                <Tabs defaultValue={tabs[0].name}>
                    <TabsList>
                        {tabs.map((tab, index) => (
                            <TabsTrigger key={tab.name} value={tab.name}>{tab.name}</TabsTrigger>
                        ))}
                    </TabsList>
                    {tabs.map((tab, index) => (
                        <TabsContent className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-4 py-4" key={tab.name} value={tab.name}>
                            {tab.contents.map((content, index) => (
                                <Content key={content.name} content={content}/>
                            ))}
                        </TabsContent>
                    ))}
                </Tabs>
            </Card>
        </div>
    )
}
