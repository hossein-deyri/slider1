import { Grid } from '@mui/material';
import useSearchContent from './useSearchContent';
import SingleCard from '@/components/custom/singleCard/SingleCard';
import InfiniteScroll from 'react-infinite-scroll-component';
import { ClipLoader } from 'react-spinners';
import COLORS from '@/constants/COLORS';
import SearchDescription from '../searchIcon/SearchDescription';

const SearchContent = () => {
  const { products, isLoading, fetchData, hasMore, isInitialLoad } =
    useSearchContent();

  return (
    <>
      {isInitialLoad && !isLoading ? (
        <SearchDescription icon="noData" />
      ) : (
        <InfiniteScroll
          dataLength={products.length}
          next={fetchData}
          hasMore={hasMore}
          loader={
            <ClipLoader
              color={COLORS.red2}
              loading={products.length > 0}
              size={50}
            />
          }
          style={{
            overflow: 'hidden',
            textAlign: 'center'
          }}
        >
          <Grid container spacing={1}>
            {products.map((item) => (
              <Grid item xs={6} sm={4} md={3} xl={2} key={item.id}>
                <SingleCard
                  {...(isLoading || !item.id
                    ? {
                        isLoading: isLoading || !item.id
                      }
                    : {
                        productId: item.id,
                        imageSrc: item.images?.find(
                          (img) => img.imageType === 'POSTER'
                        )?.src,
                        productName: item.name,
                        translatedName: item.translatedName,
                        tags: item.tags,
                        productionYear: item.productionYear,
                        country: item.countries,
                        product: item
                      })}
                />
              </Grid>
            ))}
          </Grid>
        </InfiniteScroll>
      )}
      {products.length === 0 && !isLoading && !isInitialLoad && (
        <SearchDescription icon="notFound" />
      )}
    </>
  );
};

export default SearchContent;
