const MovieIdPage = ({ params }: { params: { id: string } }): JSX.Element => {
  return (
    <div>
      <h1>Movie page with id : {params.id}</h1>
    </div>
  );
};

export default MovieIdPage;
