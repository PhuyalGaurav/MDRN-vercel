import { data } from "../../data/data";
import CardDetail from "./cardDetail";

export default function CardSection() {
  return (
    <div>
      <section className="pb-[20px] py-16">
        <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-6">
          <div className="text-center">
            <h1 className="heading font-bold text-accent">
              Our plans <span className="block sm:hidden">&</span>
              <span className="hidden sm:inline">&</span> Promises
            </h1>
          </div>
          <hr className="mt-4 border-t-2 border-accent w-1/2 mx-auto" />

          <div className="mt-8 grid grid-cols-1 gap-y-4 gap-x-1 md:grid-cols-2">
            {data.slice(0, 2).map((item) => (
              <div key={item.id} className="flex justify-center">
                <CardDetail
                  title={item.title}
                  text={item.text}
                  image={item.image}
                  // className="max-w-sm"
                />
              </div>
            ))}
            <div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 flex justify-center">
              <CardDetail
                key={data[2].id}
                title={data[2].title}
                text={data[2].text}
                image={data[2].image}
                className="max-w-sm"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
