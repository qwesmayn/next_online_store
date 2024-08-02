import BreadcrumbsComponent from "../BreadCrumbs/BreadCrumbs";
import Footer from "../Footer/Footer";
import Header from "../header/Header";

export default function LayoutClient({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header />
      <section className="mx-[7.5%]">
        <BreadcrumbsComponent />
        {children}
      </section>
      <Footer />
    </>
  );
}
