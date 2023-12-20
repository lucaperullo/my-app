import { SimpleGrid, Image, Input, Flex } from '@chakra-ui/react';
import React, { useState } from 'react';

export default function Home() {
  let ACCESS_KEY = process.env.REACT_APP_ACCESS_KEY; //TODO : Scopri come si utilizza .env in React https://gist.github.com/Haugen/f6d685f18b4bd8a3cf5bcf6272577c5b

  const [images, setImages] = useState([]); //immagini
  const [searchQuery, setSearchQuery] = useState(''); //termine di ricerca

  // TODO : Scopri come reindirizzare ad un altra pagina cercando sulle docs di react-router-dom

  const fetchData = async () => {
    try {
      const endpoint = `https://api.unsplash.com/search/photos?query=${searchQuery}`;

      const response = await fetch(endpoint, {
        method: 'GET',
        headers: {
          Authorization: `Client-ID ${ACCESS_KEY}`, // FIX : è stato necessario inserire il token tramite headers (check:https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch)
        },
      });
      const data = await response.json();
      setImages(data.results);
    } catch (error) {
      console.error('Error fetching images:', error);
    }
  };
  return (
    <Flex justifyContent="center" alignItems="center" flexDir="column" p="4">
      <Input
        placeholder="cerca un immagine"
        w="250px"
        onChange={e => setSearchQuery(e.target.value)}
        onKeyDown={e => {
          if (e.keyCode === 13) {
            fetchData(e);
          }
        }}
      />
      <SimpleGrid columns={{ base: 1, sm: 1, md: 4 }} spacing={4} p="4">
        {images.map(image => (
          <Image
            backgroundPosition="center"
            objectFit={'cover'}
            borderRadius="md"
            key={image.id}
            src={image.urls.small}
            alt={image.alt_description}
            boxSize="100%"
          />
        ))}
      </SimpleGrid>
    </Flex>
  );
}
