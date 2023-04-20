const getMoviesFN = async () => {
    const res = await getMovies();
    setItems(res);
  }