interface Props {
  name: string;
}

export const CustomFooter = ({ name }: Props) => {
  return (
    <footer className="p-4 text-center text-white bg-blue-300 border-t-2 border-t-gray-50">
      &copy; {name} (2025)
    </footer>
  );
};
