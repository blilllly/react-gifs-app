import { useState } from 'react';
import { GifsList } from './gifs/components/GifsList';
import { PreviousSearches } from './gifs/components/PreviousSearches';
import { CustomHeader } from './shared/components/CustomHeader';
import { SearchBar } from './shared/components/SearchBar';
import { getGifsByQuery } from './gifs/actions/get-gifs-query.action';
import type { Gif } from './gifs/interfaces/gif.interface';

export const GifsApp = () => {
  const [previousTerms, setPreviousTerms] = useState<string[]>([]);

  const [gifsArray, setGifsArray] = useState<Gif[]>([]);

  const handleTermClicked = (term: string) => {
    console.log({ term });
  };

  const handleSearch = async (query: string) => {
    const term = query.toLowerCase().trim();
    if (term.length === 0 || previousTerms.includes(term)) return;
    setPreviousTerms([term, ...previousTerms].splice(0, 7));
    const gifs = await getGifsByQuery(term);
    setGifsArray(gifs);
  };

  return (
    <>
      {/* Header */}
      <CustomHeader
        title="Buscador de Gifs"
        description="Descubre y comparte el Gif perfecto"
      />

      {/* Search */}
      <SearchBar onQuery={handleSearch} placeholder="Buscar lo que quieras" />

      {/* Busquedas previas */}
      <PreviousSearches
        onLabelClicked={handleTermClicked}
        searches={previousTerms}
      />

      {/* Gifs */}
      <GifsList gifs={gifsArray} />
    </>
  );
};
