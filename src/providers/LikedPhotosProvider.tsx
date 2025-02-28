import { createContext, PropsWithChildren, useContext, useState } from "react";

interface LikedPhotosValue {
  likedPhotos: string[];
  toggleLikedPhoto: (id: string) => void;
}

const LikedPhotosContext = createContext({} as LikedPhotosValue);

export default function LikedPhotosProvider(props: PropsWithChildren) {
  const [likedPhotos, setLikedPhotos] = useState<string[]>([]);

  const toggleLikedPhoto = (id: string) => {
    if (likedPhotos.includes(id)) {
      setLikedPhotos(likedPhotos.filter((photoId) => photoId !== id));
    } else {
      setLikedPhotos([...likedPhotos, id]);
    }
  };

  return (
    <LikedPhotosContext.Provider value={{ likedPhotos, toggleLikedPhoto }}>
      {props.children}
    </LikedPhotosContext.Provider>
  );
}

export const useLikedPhotos = () => useContext(LikedPhotosContext);
