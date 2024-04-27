import CATEGORIES from '@/constants/CATEGORIES';
import { useEffect, useState } from 'react';
import { getProductsByParams } from '@/services/productServices';
import { IProducts } from '@/ts/models/Product.service';
import { useAppSelector } from '@/redux/hooks';

const CONTENT_SIZE = 18;

const useSearchContent = () => {
  const [products, setProducts] = useState<IProducts[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [hasMore, setHasMore] = useState<boolean>(true);
  const [offset, setOffset] = useState<number>(0);
  const [isInitialLoad, setIsInitialLoad] = useState<boolean>(true);
  const searchState = useAppSelector((state) => state.search);

  useEffect(() => {
    if (Object.keys(searchState).length) {
      setIsInitialLoad(true);
      fetchData(true);
    } else {
      setProducts([]);
    }
  }, [searchState]);

  const fetchData = (shouldResetData: boolean = false) => {
    let newOffset = offset;
    if (shouldResetData) {
      newOffset = 0;
      setHasMore(true);
      setProducts([]);
      setIsLoading(true);
    }

    getProductsByParams({
      name: searchState.searchValue,
      size: CONTENT_SIZE,
      category: [CATEGORIES.MOVIE, CATEGORIES.SERIES],
      orTags: searchState.filters.tags?.map((tag) => tag.apiId),
      countries: searchState.filters.countries?.map((tag) => tag.apiId),
      sounds: searchState.filters.sounds?.map((tag) => tag.apiId),
      subtitles: searchState.filters.subtitles?.map((tag) => tag.apiId),
      sortProductEnum: searchState.filters.sortProductEnum?.apiId,
      startYear: searchState.filters.startYear?.apiId,
      endYear: searchState.filters.endYear?.apiId,
      offset: newOffset
    })
      .then((res) => {
        const newHasMore = res.items.length === CONTENT_SIZE;
        setProducts((prevItems) => [...prevItems, ...res.items]);
        setOffset(res.offset + CONTENT_SIZE);
        setHasMore(newHasMore);
      })
      .catch((err) => {
        // TODO: @maedeh: handling error
      })
      .finally(() => {
        setIsLoading(false);
        if (products.length !== 0) setIsInitialLoad(false);
      });
  };

  return {
    products,
    isLoading,
    fetchData,
    hasMore,
    isInitialLoad
  };
};

export default useSearchContent;
