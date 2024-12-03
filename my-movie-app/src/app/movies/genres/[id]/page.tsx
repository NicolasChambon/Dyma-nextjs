const GenreIdPage = ({ params }: { params: { id: string } }): JSX.Element => {
  return (
    <div>
      <h1>Genre id : {params.id}</h1>
    </div>
  );
};

export default GenreIdPage;
