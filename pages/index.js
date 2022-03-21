import Layout from '../components/layout/Layout';
import Home from '../components/home';
import { wrapper } from '../store/store';
import { getRooms } from '../store/actions/roomActions';

export default function HomePage() {
  return (
    <Layout>
      <Home />
    </Layout>
  );
}

export const getServerSideProps = wrapper.getServerSideProps(
  (store) =>
    async ({ req, query }) => {
      await store.dispatch(
        getRooms(req, query.page, query.location, query.guests, query.category)
      );
    }
);
