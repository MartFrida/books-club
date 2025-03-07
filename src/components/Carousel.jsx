import { useState, useEffect } from "react";
import { useSwipeable } from "react-swipeable";

const Carousel = () => {
  const [photos, setPhotos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  // ID папки из Google Drive (берется из URL публичной папки)
  const FOLDER_ID = import.meta.env.VITE_YOUR_GOOGLE_DRIVE_FOLDER_ID;
  // API ключ от Google (нужно создать в Google Cloud Console)
  const API_KEY = import.meta.env.VITE_YOUR_GOOGLE_API_KEY;

  const fetchMyPhotos = async () => {
    try {
      setLoading(true);
      const response = await fetch(
        `https://www.googleapis.com/drive/v3/files?q='${FOLDER_ID}'+in+parents&key=${API_KEY}&fields=files(id,name,webViewLink,thumbnailLink)`
      );
      const data = await response.json();

      if (data.files) {
        const photoList = data.files
          .filter(file => file.name.match(/\.(jpg|jpeg|png|gif)$/i))
          .map(file => ({
            id: file.id,
            url: `https://lh3.googleusercontent.com/d/${file.id}=s0`, // Высокое качество
            thumbnail: file.thumbnailLink,
            name: file.name
          }));
        setPhotos(photoList);
      }
    } catch (error) {
      console.error('Ошибка при загрузке фото:', error);
    } finally {
      setLoading(false);
    }
  };
  // Автоматическое обновление каждые 5 минут (300000 мс)
  useEffect(() => {
    fetchMyPhotos();
    const interval = setInterval(fetchMyPhotos, 300000);
    return () => clearInterval(interval);
  }, []);

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % photos.length);
  };

  const prevImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + photos.length) % photos.length);
  };

  const handlers = useSwipeable({
    onSwipedLeft: nextImage,
    onSwipedRight: prevImage,
    preventScrollOnSwipe: true,
    trackMouse: true,
  });

  return (
    <section className="bg-[#0d0b26] text-white py-12 px-6 md:px-12" {...handlers}>
      {loading && <p className="text-center text-gray-500">Downloading photo...</p>}
      {photos.length === 0 && !loading && (
        <p className="text-center text-gray-500">No photos available</p>
      )}
      <div className="relative w-full max-w-lg mx-auto overflow-hidden rounded-lg shadow-md">
        <div className="flex transition-transform duration-500" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
          {photos.map((image) => (
            <div key={image.id} className="w-full flex-shrink-0">
              <img src={image.url} alt={`Carousel img ${image.name + 1}`} className="w-full h-full object-cover"
                onError={(e) => {
                  e.target.src = image.thumbnail; // Запасной вариант - thumbnail
                  console.log(`Ошибка загрузки ${image.url}`);
                }}
              />
            </div>
          ))}
        </div>
        <button onClick={prevImage} className="absolute left-0 inset-y-0 p-2 text-white  bg-opacity-30 hover:bg-opacity-50">
          &lt;
        </button>
        <button onClick={nextImage} className="absolute right-0 inset-y-0 p-2 text-white  bg-opacity-30 hover:bg-opacity-50">
          &gt;
        </button>
      </div>
    </section>

  );
};

export default Carousel;