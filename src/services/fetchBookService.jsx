export const fetchInitialOfFilters = async ({
    setInitialAuthors,
    setInitialGenres,
    setFilteredBooks,
  }) => {
    try {
      const [authorData, GenreData, FilteredData] = await Promise.all(
        [
          "/api/filter/all-authors",
          "/api/filter/all-genres",
          "/api/filter/all-books",
        ].map(async (val) => {
          const response = await fetch(`${import.meta.env.VITE_API_URL}${val}`, {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
          });
  
          if (!response.ok) {
            throw new Error("Error in response");
          }
          return response.json();
        })
      );
  
      // Format the data before setting it
      const formattedAuthors = authorData.AuthorsNameFormatted || [];
        const formattedGenres = GenreData.GenresNameFormatted || [];
        
        const formattedResult = FilteredData.formattedBooks || [];
      setInitialAuthors(formattedAuthors);
      setInitialGenres(formattedGenres);
      setFilteredBooks(formattedResult);
    } catch (err) {
      console.error("Error while fetching:", err);

  }
  
  

  };