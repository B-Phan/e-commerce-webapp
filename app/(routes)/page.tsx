import getBillboard from "@/actions/get-billboard";
import Billboard from "@/components/billboard";
import Container from "@/components/ui/container";

export const revalidate = 0;

const HomePage = async () => {
    const billboard = await getBillboard("afff10aa-7593-4ae4-9c3a-1a3a2e345fa3");
    return (
        <Container>
            <div className = "space-y-10 pb-10">
                <Billboard data = {billboard} />
            </div>
        </Container>
    );
}

export default HomePage