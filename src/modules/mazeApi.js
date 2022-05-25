const getMaze = async (mazeId) => {
  try {
    const poke = await fetch(`https://api.tvmaze.com/shows/${mazeId}/`);
    const loaded = await maze.json();
    return loaded;
  } catch (e) {
    return e;
  }
};

export default getMaze;
