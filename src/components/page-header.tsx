import { cn } from "cn";
import { SidebarTrigger } from "./ui/sidebar";
import Link from "next/link";
import { Headphones, ThumbsUp } from "lucide-react";
import { Button } from "./ui/button";

export function PageHeader({
    title,
    className,
}: {
    title: string;
    className?: string;
}) {
    return (
        <div
            className={cn(
                "flex items-center justify-between border-b px-4 py-4",
                className,
            )}
        >
            <div className="flex items-center gap-2">
                <SidebarTrigger />
                <h1 className="text-lg font-semibold tracking-tight">
                    {title}
                </h1>
            </div>

            <div className="lg:flex items-center gap-3 hidden">
                <Button variant="outline" size="sm" asChild>
                    <Link href="mailto:amogus@imposter.com">
                        <ThumbsUp />
                        <span className="hidden lg:block">Feedback</span>
                    </Link>
                </Button>
                <Button variant="outline" size="sm" asChild>
                    <Link href="mailto:amogus@imposter.com">
                        <Headphones />
                        <span className="hidden lg:block">Need help?</span>
                    </Link>
                </Button>
            </div>
        </div>
    );
}
