import TextHeader from "./components/ui/text/TextHeader";
import TextBody from "./components/ui/text/TextBody";
import Card from "./components/ui/Card";
import getCoffee from "./api/api";

interface Coffee {
  id: number;
  name: string;
  price: string;
  image: string;
  rating: string;
  votes: string;
  popular: boolean; // Aquí definimos que `votes` es un número
}

export default async function Home() {
  const coffe: Coffee[] = await getCoffee();
  return (
    <main className="w-full flex flex-col items-center">
      <header className="h-72 w-full overflow-hidden">
        <img
          src="/bg-cafe.jpg"
          alt="banner coffe listing"
          className="object-cover w-full h-full"
        />
      </header>
      <div className="bg-card py-20 px-10 relative -top-40 rounded-xl flex flex-col items-center text-center min-w-md max-w-md lg:max-w-5xl">
        <TextHeader>Our Collection</TextHeader>
        <div className="max-w-md lg:max-w-xl text-center py-5">
          <TextBody>
            Introducing our Coffee Collection, a selection of unique coffees
            from different roast types and origins, expertly roasted in small
            batches and shipped fresh weekly.
          </TextBody>
        </div>
        <div className="flex flex-col lg:flex-row flex-wrap items-center gap-8">
          {
            coffe.map((item, index) => (
              <Card
              key={index}
              image={`${item.image}`}
              name={item.name}
              pricing={item.price}
              rating={item.rating === null ?"No rating" : item.rating}
              votes={item.votes}
              popular={item.popular}
              />
            ))
          }
          
        </div>
      </div>
    </main>
  );
}
