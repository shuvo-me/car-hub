import CarCard from "@/components/CarCard";
import CustomFilter from "@/components/CustomFilter";
import Hero from "@/components/Hero";
import SearchBar from "@/components/SearchBar";
import { CardCardProps, carInterface } from "@/types";
import { getCars } from "@/utils";
import Image from "next/image";

export default async function Home() {
  const { res: cars, err } = await getCars();
  console.log({ cars, err });
  return (
    <main className="overflow-x-hidden">
      <Hero />
      <div className="mt-12 padding-x padding-y max-width" id="discover">
        <div className="home__text-container">
          <h1 className="text-4xl font-extrabold">Car Catalog</h1>
          <p>Explores the cars you might like.</p>
        </div>
        <div className="home__filters">
          <SearchBar />
          <div className="home__filter-container">
            <CustomFilter title="fuel" />
            <CustomFilter title="year" />
          </div>
        </div>
        {cars?.length ? (
          <section>
            <div className="home__cars-wrapper">
              {cars?.map((car: carInterface) => (
                <CarCard car={car} />
              ))}
            </div>
          </section>
        ) : (
          <div>Opps No Data</div>
        )}
      </div>
    </main>
  );
}
