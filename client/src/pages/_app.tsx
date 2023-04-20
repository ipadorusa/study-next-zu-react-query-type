
import { QueryClient, QueryClientProvider, Hydrate } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { DefaultLayout as Layout } from '@/components/layout'
import { AppPropsWithLayout } from '@/type/AppPropsWithLayout'


const queryClient = new QueryClient({
  defaultOptions: { queries: { retry: false, refetchOnWindowFocus: false } },
});

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? DefaultLayout
  return (
  <QueryClientProvider client={queryClient}>
    <Hydrate state={pageProps.dehydratedSate}>
      {getLayout(<Component {...pageProps} />)}
      <ReactQueryDevtools />
    </Hydrate>
  </QueryClientProvider>
  )
}

function DefaultLayout(page: React.ReactElement) {
  return <Layout>{page}</Layout>
}
