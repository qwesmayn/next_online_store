
import slugFilters from '@/components/Products/SlugFilter/slugFiler.data';
import { notFound } from 'next/navigation';
import { FC } from 'react';

interface PageProps {
    params: { slug: string };
}

const Page: FC<PageProps> = ({ params }) => {
    const { slug } = params;
    const filter = slugFilters.find(filter => filter.link === slug);

    if (!filter) {
        return notFound()
    }

    return (
        <div className='h-screen'>
            {filter.name}
        </div>
    );
};

export default Page;
