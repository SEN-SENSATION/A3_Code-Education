import { getFeaturedEvents } from "../dummy-data";
import EventList from "./../components/events/event-list";

const Index = () => {
  const featuedEvents = getFeaturedEvents();

  return (
    <>
      <h1>Home</h1>
      <EventList events={featuedEvents} />
    </>
  );
};

export default Index;
