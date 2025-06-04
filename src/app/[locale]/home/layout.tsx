import Footer from "@/widgets/Footer/Footer";
import Header from "@/widgets/Header/Header";

export default function HomeLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="flex flex-col h-screen">
            <Header />
            <div className="flex-grow">
                {children}
            </div>
            <Footer />
        </div>
    );
}
