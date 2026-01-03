import { SidebarProvider } from "@/components/ui/sidebar";
import AppSidebar from "@/components/organisms/SidebarMenu/SidebarMenu";

export default function Home() {
    return (

        <div>
            <SidebarProvider>
                <AppSidebar />
            </SidebarProvider>
        </div>
    );
}
