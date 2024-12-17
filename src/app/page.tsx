import Banner from "@/components/pages/homepage/Banner";
import Services from "@/components/pages/homepage/Services";

export default function Home() {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "60px" }}>
      <Banner />
      <Services />
    </div>
  );
}
