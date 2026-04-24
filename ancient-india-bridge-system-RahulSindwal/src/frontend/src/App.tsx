import { Layout } from "@/components/Layout";
import { HomePage } from "@/pages/HomePage";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: { staleTime: 5 * 60 * 1000, retry: 2 },
  },
});

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Layout>
        <HomePage />
      </Layout>
    </QueryClientProvider>
  );
}
