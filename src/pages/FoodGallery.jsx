import { useEffect, useState } from 'react';
import PageTitle from '../components/PageTitle/PageTitle';
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import { useQuery } from '@tanstack/react-query';
import Loader from '../components/Loader/Loader';
import NoResultFound from '../components/NoResultFound/NoResultFound';
import useFoodsApi from '../axios/useFoodsApi';

const FoodGallery = () => {
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);
  const [images, setImages] = useState([])
  const { getFoodsPromise } = useFoodsApi()


  const { isPending, error, data } = useQuery({
    queryKey: ['allFoods'],
    queryFn: () => getFoodsPromise().then(res => res.data)
  })

  useEffect(() => {
    if (data) {
      const initialImages = []
      data.forEach(food => initialImages.push({ src: food.image, alt: food.title }))
      setImages(initialImages)
    }
  }, [data])


  if (isPending) return <Loader />
  if (error) return <Error />
  return (
    <div className='px-5 container mx-auto'>
      <title>Savor | Gallery</title>
      <PageTitle
        title={'A Visual Taste of Our Menu'}
        subtitle={'Browse our most-loved dishes in a glance-ready gallery.'} />

      {/* gallery  */}
      <div className="py-20">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2 md:gap-4">
          {
            images.length === 0 && <NoResultFound />
          }
          {images.map((img, i) => (
            <div key={i} className="cursor-pointer rounded-lg overflow-hidden shadow-md hover:shadow-xl transition duration-300">
              <img
                src={img.src}
                alt={img.alt}
                onClick={() => {
                  setIndex(i);
                  setOpen(true);
                }}
                className="hover:scale-105 transition duration-300 w-full h-40 lg:h-60 object-cover"
              />
            </div>
          ))}
        </div>

        <Lightbox
          open={open}
          index={index}
          close={() => setOpen(false)}
          slides={images}
        />
      </div>
    </div>
  );
};

export default FoodGallery;