import { redirect } from 'next/navigation';

const DashboardPage = ({
  params
}: {
  params: { slug: string };
}): JSX.Element => {
  if (params.slug === 'profile') {
    redirect('/dashboard');
  }

  return (
    <div>
      <h1>Dashboard slug page</h1>
    </div>
  );
};

export default DashboardPage;
