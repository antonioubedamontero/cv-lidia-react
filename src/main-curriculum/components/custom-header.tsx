interface Props {
  name: string;
}

export const CustomHeader = ({ name }: Props) => {
  return (
    <header className="bg-sky-600 p-4 border-b-2 border-b-gray-50">
      <h1 className="text-center text-white text-xl font-bold">
        <span>Curriculum Vitae - {name}</span>
      </h1>
    </header>
  );
};
