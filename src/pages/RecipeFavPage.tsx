import { mockedPhotos } from "../data";
import { useLikedPhotos } from "../providers/LikedPhotosProvider";

export default function RecipeFavPage() {
  const { likedPhotos, toggleLikedPhoto } = useLikedPhotos();

  return (
    <div className="flex flex-col flex-1 justify-center items-center bg-yellow-50">
      <div className="flex flex-col flex-1 justify-center bg-yellow-100 m-2 max-w-[900px] rounded-lg">
        {mockedPhotos
          .filter((photo) => likedPhotos.includes(photo.id))
          .map((photo) => (
            <article key={photo.id}>
              <h2 className="p-2 text-xl">{photo.title}</h2>
              <p className="text-lg px-2">{photo.description}</p>
              <img
                src={photo.url}
                className="w-full max-w-md mx-auto rounded-lg my-4"
              />
              <p className="text-lg px-2">
                {photo.instructions.map((step, index) => (
                  <span key={index} className="block mb-2">
                    {step}
                  </span>
                ))}
              </p>
              <button onClick={() => toggleLikedPhoto(photo.id)}>
                {likedPhotos.includes(photo.id) ? "❤️" : "🤍"}
              </button>
            </article>
          ))}
      </div>
    </div>
  );
}
