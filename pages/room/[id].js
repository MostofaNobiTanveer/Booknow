import Layout from '../../components/layout/Layout';
import RoomDetails from '../../components/room/RoomDetails';
import { wrapper } from '../../store/store';
import { getRoomDetails } from '../../store/actions/roomActions';

export default function RoomDetailsPage() {
  return (
    <Layout>
      <RoomDetails />
    </Layout>
  );
}

export const getServerSideProps = wrapper.getServerSideProps(
  (store) =>
    async ({ req, params }) => {
      await store.dispatch(getRoomDetails(req, params.id));
    }
);
