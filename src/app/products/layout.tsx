import SlugFilter from "@/components/Products/SlugFilter/SlugFilter";

export default function Layout({children}: {children: React.ReactNode}) {
    return (
        <main>
            <SlugFilter />
            {children}
        </main>
    );
}