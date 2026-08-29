import PageHeader from "../components/common/PageHeader";
import Stores from "../components/stores/Stores";

export default function StoresPage() {
    return (
        <div>
            <PageHeader
                eyebrow="Find us near you"
                title="Our Store Locations"
                description="Every DHANUSH PETROLEUM INC store brings the same fuel, hospitality, and reliability, wherever you find us."
            />
            <div className="app-surface py-10 sm:py-14">
                <Stores />
            </div>
        </div>
    );
}
