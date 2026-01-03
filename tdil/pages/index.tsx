import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import AppSidebar from "@/components/organisms/SidebarMenu/SidebarMenu";

export default function Home() {
    return (

        <div>
            <SidebarProvider>
                <AppSidebar />
                <main>
                    <SidebarTrigger />
                </main>
            </SidebarProvider>
        </div>
    );
}
