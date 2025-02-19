export async function generateMetadata({ params }) {
    const { carname } = await params; 

    return {
        title: `Car Details - ${carname}`,
        description: `Explore details about ${carname}`,
    };
}