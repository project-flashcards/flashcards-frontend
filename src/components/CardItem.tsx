interface CardItemProps {
  title: string;
  description: string;
}

export default function CardItem({ title, description }: CardItemProps) {
  return (
    <div className="w-full p-4 my-5 bg-white shadow rounded-lg flex flex-col gap-2 items-center">
      <h2 className="text-2xl font-bold">{title}</h2>
      <span className="h-[1px] bg-gray-700 w-full"></span>
      <p className="text-gray-700">{description}</p>
    </div>
  );
}