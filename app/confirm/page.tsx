import Header from '@/components/Header/Header';

export default function Signup({
  searchParams,
}: {
  searchParams: { message: string };
}) {
  return (
    <div>

      <div className="w-full px-8 sm:max-w-lg mx-auto mt-8">
        <p className="text-foreground">{searchParams.message}</p>
      </div>
    </div>
  );
}
