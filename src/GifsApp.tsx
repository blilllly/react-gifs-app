import { GifsList } from './gifs/components/GifsList';
import { PreviousSearches } from './gifs/components/PreviousSearches';
import { mockGifs } from './mock-data/gifs.mock';
import { CustomHeader } from './shared/components/CustomHeader';
import { SearchBar } from './shared/components/SearchBar';

const searches: string[] = ['Goku', 'Saitama', 'Elden Ring'];

export const GifsApp = () => {
  return (
    <>
      {/* Header */}
      <CustomHeader
        title="Buscador de Gifs"
        description="Descubre y comparte el Gif perfecto"
      />

      {/* Search */}
      <SearchBar placeholder="Buscar lo que quieras" />

      {/* Busquedas previas */}
      <PreviousSearches searches={searches} />

      {/* Gifs */}
      <GifsList gifs={mockGifs} />
    </>
  );
};
